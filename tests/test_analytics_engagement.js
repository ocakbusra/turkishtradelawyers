const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

const script = readFileSync(join(__dirname, '..', 'script.js'), 'utf8');
const analytics = script.slice(0, script.indexOf('function enableClarity()'));

function visit({ visible = true, focused = true } = {}) {
    let now = 0;
    let nextTimer = 0;
    const timers = new Map();
    const listeners = { window: new Map(), document: new Map() };
    const calls = [];
    const scripts = [];
    const listen = target => (name, callback) => {
        const callbacks = listeners[target].get(name) || [];
        callbacks.push(callback);
        listeners[target].set(name, callbacks);
    };
    const window = {
        gtag: (...args) => calls.push(args),
        addEventListener: listen('window'),
        setTimeout(callback, delay) {
            const id = ++nextTimer;
            timers.set(id, { callback, deadline: now + delay });
            return id;
        },
        clearTimeout: id => timers.delete(id)
    };
    const document = {
        readyState: 'loading',
        visibilityState: visible ? 'visible' : 'hidden',
        hasFocus: () => focused,
        addEventListener: listen('document'),
        querySelector: () => null,
        createElement: () => ({ setAttribute() {} }),
        head: { appendChild: element => scripts.push(element) }
    };
    const context = vm.createContext({ window, document, performance: { now: () => now } });
    vm.runInContext(analytics, context);
    const dispatch = (target, name) => {
        for (const callback of listeners[target].get(name) || []) callback();
    };
    return {
        calls, scripts, context, timers,
        checkpoints: () => calls.filter(call => call[0] === 'event'),
        tick(duration) {
            const end = now + duration;
            while (true) {
                const due = [...timers].filter(([, timer]) => timer.deadline <= end)
                    .sort((a, b) => a[1].deadline - b[1].deadline)[0];
                if (!due) break;
                now = due[1].deadline;
                timers.delete(due[0]);
                due[1].callback();
            }
            now = end;
        },
        visibility(value) {
            document.visibilityState = value ? 'visible' : 'hidden';
            dispatch('document', 'visibilitychange');
        },
        focus(value) {
            focused = value;
            dispatch('window', value ? 'focus' : 'blur');
        },
        pagehide: () => dispatch('window', 'pagehide'),
        pageshow: () => dispatch('window', 'pageshow')
    };
}

test('starts one Google tag before load without initializing Clarity', () => {
    const page = visit();
    assert.equal(page.scripts.length, 1);
    assert.match(page.scripts[0].src, /gtag\/js\?id=G-9FX7T07VPM$/);
    assert.deepEqual(page.calls.map(call => call.slice(0, 2)), [
        ['js', page.calls[0][1]], ['config', 'G-9FX7T07VPM'], ['config', 'AW-18437766591']
    ]);
    vm.runInContext('enableAnalytics(); initEngagementTracking();', page.context);
    assert.equal(page.scripts.length, 1);
    assert.equal(page.calls.length, 3);
    assert.equal(page.timers.size, 1);
});

test('a 30-second no-click visit checkpoints twice and flushes only the remaining tail', () => {
    const page = visit();
    page.tick(34000);
    assert.equal(page.checkpoints().length, 2);
    page.focus(false);
    page.visibility(false);
    page.pagehide();
    assert.equal(page.checkpoints().length, 3);
    assert.equal(page.timers.size, 0);
    page.tick(120000);
    assert.equal(page.checkpoints().length, 3);
    for (const [, name, parameters] of page.checkpoints()) {
        assert.equal(name, 'engagement_checkpoint');
        assert.equal(parameters.send_to, 'G-9FX7T07VPM');
        assert.equal(parameters.engagement_time_msec, undefined);
        assert.equal(parameters.value, undefined);
    }
});

test('short visits flush once at page exit without duplicate visibility or blur events', () => {
    const page = visit();
    page.tick(4200);
    page.pagehide();
    page.visibility(false);
    page.focus(false);
    assert.equal(page.checkpoints().length, 1);
    assert.equal(page.checkpoints()[0][2].checkpoint_reason, 'page_exit');
    assert.equal(page.timers.size, 0);
});

test('hidden or unfocused time never creates periodic checkpoints', () => {
    const page = visit({ visible: false, focused: false });
    page.tick(60000);
    assert.equal(page.checkpoints().length, 0);
    page.visibility(true);
    page.tick(60000);
    assert.equal(page.checkpoints().length, 0);
    page.focus(true);
    page.tick(15000);
    assert.equal(page.checkpoints().length, 1);
    page.focus(false);
    page.tick(60000);
    assert.equal(page.checkpoints().length, 1);
    page.focus(true);
    page.tick(15000);
    assert.equal(page.checkpoints().length, 2);
});

test('restoring a page resumes one timer, and sub-second visits remain unmeasured', () => {
    const page = visit();
    page.tick(400);
    page.pagehide();
    assert.equal(page.checkpoints().length, 0);
    page.pageshow();
    page.pageshow();
    assert.equal(page.timers.size, 1);
    page.tick(15000);
    assert.equal(page.checkpoints().length, 1);
});
