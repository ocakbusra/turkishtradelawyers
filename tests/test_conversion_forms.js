const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
function harness(file){
 const source=fs.readFileSync(path.join(root,file),'utf8');
 const listeners={}; const events=[]; const requests=[]; let resolve;
 const security={value:'7',setCustomValidity(){},reportValidity(){},focus(){}};
 const status={};const button={disabled:false};let resets=0;
 const form={dataset:{formId:'test-consultation'},id:'consultation-form',action:'https://formspree.io/f/mnneobaw',
 querySelector:s=>s.includes('security-answer')?security:s==='.form-status'?status:s.includes('button')?button:null,
 appendChild(){},addEventListener:(n,cb)=>(listeners[n]??=[]).push(cb),reset(){resets++}};
 security.addEventListener=()=>{};
 const document={title:'Consultation',querySelectorAll:s=>s==='form'||s==='form[data-conversion-form]'?[form]:[],createElement:()=>({})};
 const context={window:{location:{pathname:'/contact.html'}},document,gtag:(...a)=>events.push(a),FormData:class {constructor(f){assert.equal(f,form)}},fetch:(url,opts)=>{requests.push({url,opts});return new Promise(r=>resolve=r)}};
 vm.createContext(context);
 vm.runInContext(source.slice(source.indexOf('function trackConversionEvent('),source.indexOf('function initBusinessFormContext(')),context);
 vm.runInContext(source.slice(source.indexOf('function initConversionForms('),source.indexOf('function initConversionChatBehavior(')),context);
 context.initSecurityQuestionValidation();context.initConversionForms();
 return {events,requests,security,status,button,get resets(){return resets},resolve:r=>resolve(r),submit:()=>{const e={defaultPrevented:false,preventDefault(){this.defaultPrevented=true}};return Promise.all(listeners.submit.map(fn=>fn(e)))}};
}
for(const file of ['script.js','zh/script.js']){
 test(file+': one event per accepted response; concurrent submit prevented; no PII',async()=>{
 const h=harness(file);const a=h.submit();const b=h.submit();assert.equal(h.requests.length,1);assert.equal(h.button.disabled,true);h.resolve({ok:true});await Promise.all([a,b]);
 assert.equal(h.events.filter(x=>x[1]==='generate_lead').length,1);assert.equal(h.resets,1);assert.equal(h.button.disabled,false);assert.match(h.status.className,/is-success/);
 for(const e of h.events)assert.deepEqual(Object.keys(e[2]).sort(),['form_id','page_path','page_title']);
 const c=h.submit();h.resolve({ok:true});await c;assert.equal(h.events.filter(x=>x[1]==='generate_lead').length,2);
 });
 test(file+': failed response preserves input, has no lead, permits retry',async()=>{const h=harness(file);const p=h.submit();h.resolve({ok:false});await p;assert.equal(h.resets,0);assert.equal(h.events.filter(x=>x[1]==='generate_lead').length,0);assert.match(h.status.className,/is-error/);assert.equal(h.button.disabled,false);const q=h.submit();h.resolve({ok:true});await q;assert.equal(h.events.filter(x=>x[1]==='generate_lead').length,1)});
 test(file+': invalid security answer causes neither request nor lead',async()=>{const h=harness(file);h.security.value='wrong';await h.submit();assert.equal(h.requests.length,0);assert.equal(h.events.filter(x=>x[1]==='generate_lead').length,0)});
}
for(const lang of ['', 'zh/'])for(const file of ['establishing-limited-liability-company-turkey.html','liaison-office-vs-branch-office-turkey.html','llc-or-joint-stock-company-turkey.html'])test(lang+file+': checklist event only after accepted response',()=>{const s=fs.readFileSync(path.join(root,lang,file),'utf8');assert(!s.includes("trackLeadMagnet('generate_lead'"));assert.match(s,/if \(!response\.ok\) throw new Error\([^\n]+\);\s+trackLeadMagnet\('checklist_signup'/);});
