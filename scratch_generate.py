import re
import datetime

# Read the reference HTML
with open('2026-wealth-amnesty-guide.html', 'r', encoding='utf-8') as f:
    template = f.read()

# We need to replace the metadata, title, and the content inside <section class="article-content">

# HTML components
meta_title = "Türkiye Corporate Tax Changes 2026 | Communiqué No. 26"
meta_desc = "A practical guide to Türkiye’s 2026 corporate tax changes, including free zone exemptions, foreign trading income deductions, qualified service centres, manufacturing incentives and official calculation examples."
canonical_url = "https://www.turkishtradelawyers.com/turkiye-corporate-tax-changes-2026-communique-26.html"

# Markdown content converted to HTML
html_content = """
<p>Türkiye published Corporate Tax General Communiqué No. 26 in the Official Gazette dated 4 July 2026 and numbered 33300.</p>
<p>The Communiqué explains amendments introduced mainly by Laws No. 7577 and No. 7582. The changes affect companies involved in manufacturing, agricultural production, free zone operations, international goods trading, foreign trade intermediation and qualified service centre activities.</p>
<p>The Communiqué also addresses:</p>
<ul>
    <li>healthcare institutions operated by foundation universities</li>
    <li>the 95% deduction for qualifying foreign trading income</li>
    <li>the 100% deduction available under specified conditions</li>
    <li>the 12.5 percentage-point corporate tax reduction for manufacturing income</li>
    <li>the interaction between manufacturing and export incentives</li>
    <li>contract manufacturing arrangements</li>
    <li>public offering tax reductions</li>
    <li>domestic minimum corporate tax calculations</li>
</ul>
<p>The effective date differs depending on the relevant amendment. Companies should therefore assess each incentive separately rather than treating the Communiqué as a single set of rules taking effect on one date.</p>

<hr>

<h2>Changes at a Glance</h2>
<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px; font-size: 0.9rem;">
    <thead>
        <tr style="background-color: #f8fafc; text-align: left; border-bottom: 2px solid #e2e8f0;">
            <th style="padding: 10px; border: 1px solid #e2e8f0;">Area</th>
            <th style="padding: 10px; border: 1px solid #e2e8f0;">Main change</th>
            <th style="padding: 10px; border: 1px solid #e2e8f0;">Relevant period</th>
        </tr>
    </thead>
    <tbody>
        <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Foundation university healthcare institutions</td><td style="padding: 10px; border: 1px solid #e2e8f0;">Certain paid healthcare operations lose their corporate tax exemption</td><td style="padding: 10px; border: 1px solid #e2e8f0;">From 1 January 2027</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Free zone manufacturing</td><td style="padding: 10px; border: 1px solid #e2e8f0;">Exemption extended to sales within the same free zone and to other free zones</td><td style="padding: 10px; border: 1px solid #e2e8f0;">Profits earned from 1 January 2026</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Foreign goods trading</td><td style="padding: 10px; border: 1px solid #e2e8f0;">95% deduction for qualifying goods bought and sold outside Türkiye</td><td style="padding: 10px; border: 1px solid #e2e8f0;">Subject to statutory conditions</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Foreign trade intermediation</td><td style="padding: 10px; border: 1px solid #e2e8f0;">95% deduction for qualifying brokerage income</td><td style="padding: 10px; border: 1px solid #e2e8f0;">Subject to statutory conditions</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Certain industrial zones and Istanbul Financial Center</td><td style="padding: 10px; border: 1px solid #e2e8f0;">The 95% deduction may increase to 100%</td><td style="padding: 10px; border: 1px solid #e2e8f0;">Subject to status and location requirements</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Qualified service centres</td><td style="padding: 10px; border: 1px solid #e2e8f0;">95% or 100% deduction for qualifying foreign income</td><td style="padding: 10px; border: 1px solid #e2e8f0;">Maximum 20 accounting periods</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Manufacturing and agricultural production</td><td style="padding: 10px; border: 1px solid #e2e8f0;">Corporate tax rate reduction increased to 12.5 percentage points</td><td style="padding: 10px; border: 1px solid #e2e8f0;">From the 2027 accounting period</td></tr>
        <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Domestic minimum corporate tax</td><td style="padding: 10px; border: 1px solid #e2e8f0;">Certain deductions may be excluded from the minimum tax base</td><td style="padding: 10px; border: 1px solid #e2e8f0;">Under the amended rules</td></tr>
    </tbody>
</table>
</div>

<hr>

<h2>1. Foundation University Healthcare Institutions Become Corporate Taxpayers</h2>
<p>Under the previous framework, foundation universities benefited from certain tax exemptions available to higher education institutions.</p>
<p>From 1 January 2027, the exemption will no longer apply to economic enterprises operated by foundation universities that provide healthcare services for consideration.</p>
<p>The affected establishments may include:</p>
<ul>
    <li>hospitals</li>
    <li>health application and research centres</li>
    <li>polyclinics</li>
    <li>medical centres</li>
    <li>dialysis centres</li>
    <li>rehabilitation centres</li>
    <li>similar healthcare facilities providing paid services</li>
</ul>
<p>The amendment does not necessarily remove every tax exemption available to the foundation university itself. It specifically concerns healthcare activities conducted through an economic enterprise and provided in return for payment.</p>

<h3>Practical implications</h3>
<p>Foundation universities should determine:</p>
<ul>
    <li>which healthcare activities constitute an economic enterprise</li>
    <li>which revenues will become subject to corporate tax</li>
    <li>how shared expenses will be allocated</li>
    <li>whether separate accounting records are required</li>
    <li>whether related VAT, withholding and payroll consequences arise</li>
    <li>when the required corporate tax registration should be completed</li>
</ul>
<p>Implementation work should be completed before 1 January 2027.</p>

<hr>

<h2>2. Free Zone Manufacturing Exemption Is Expanded</h2>
<p>Türkiye provides a corporate tax exemption for qualifying profits earned from products manufactured in Turkish free zones.</p>
<p>The amended rules extend the exemption to profits derived from products manufactured in a free zone and sold:</p>
<ul>
    <li>outside Türkiye</li>
    <li>within the same free zone</li>
    <li>to another Turkish free zone</li>
</ul>
<p>Profits from sales into the Turkish domestic market remain outside the exemption.</p>
<p>The expanded exemption applies to qualifying profits earned from 1 January 2026.</p>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example: sales within and outside the free zone</h4>
    <p>The Communiqué provides the following example:</p>
    <p><strong>Example:</strong> (B) A.Ş., which conducts manufacturing activities in a free zone, earned the following profits during the 2026 accounting period:</p>
    <ul>
        <li>TRY 4,000,000 from sales of manufactured products into the Turkish domestic market</li>
        <li>TRY 3,000,000 from sales within the same free zone</li>
        <li>TRY 500,000 from sales to another free zone</li>
        <li>TRY 6,000,000 from sales outside Türkiye</li>
    </ul>
    <p>The TRY 3,000,000 profit from sales within the same free zone, the TRY 500,000 profit from sales to another free zone and the TRY 6,000,000 profit from foreign sales will fall within the exemption.</p>
    <p style="margin-bottom: 0;">The TRY 4,000,000 profit from sales into the Turkish domestic market will not fall within the exemption.</p>
</div>

<p>The example confirms that the destination of the manufactured goods must be identified separately. A company cannot apply the exemption to all free zone manufacturing income merely because the production took place in a free zone.</p>

<h3>Contract manufacturing in free zones</h3>
<p>The rules concerning contract manufacturing have also been amended.</p>
<p>Qualifying products manufactured through an eligible contract manufacturing arrangement may benefit where the products are sold:</p>
<ul>
    <li>outside Türkiye</li>
    <li>within the same free zone</li>
    <li>to another free zone</li>
</ul>
<p>Companies should still verify:</p>
<ul>
    <li>whether the activity qualifies as manufacturing</li>
    <li>whether the operating licence covers the activity</li>
    <li>which party bears the production risks</li>
    <li>whether income and costs can be separately identified</li>
    <li>where the products are ultimately sold</li>
</ul>

<hr>

<h2>3. The 95% Deduction for Goods Bought and Sold Outside Türkiye</h2>
<p>A Turkish corporate taxpayer may deduct 95% of qualifying net profit earned from goods purchased outside Türkiye and sold outside Türkiye without bringing those goods into Türkiye.</p>
<p>This is a deduction from the corporate tax base. It is not a complete exclusion of the transaction from the company’s accounting records.</p>
<p>The company must first include the income in its corporate earnings and then claim the deduction through the annual corporate tax return.</p>

<h3>Main conditions</h3>
<p>The deduction generally requires that:</p>
<ol>
    <li>The goods are purchased outside Türkiye.</li>
    <li>The goods are sold outside Türkiye.</li>
    <li>The goods are not brought into Türkiye before the foreign sale.</li>
    <li>The relevant profit is transferred to Türkiye by the deadline for filing the annual corporate tax return.</li>
    <li>The qualifying income, costs and expenses can be separately identified.</li>
    <li>The transaction is included in the company’s corporate income for the relevant accounting period.</li>
</ol>
<p>The deduction applies to the net profit after related costs and expenses.</p>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example 1: goods purchased in Germany and sold in France</h4>
    <p><strong>Example 1:</strong> (B) A.Ş. purchased products from a company resident in Germany and sold those products to another company resident in France without bringing the products into Türkiye.</p>
    <p>The company earned TRY 1,000,000 from this activity.</p>
    <p>Provided that the entire profit is transferred to Türkiye by the annual corporate tax return filing deadline and the other statutory conditions are satisfied, 95% of the profit, equal to TRY 950,000, may be deducted through the corporate tax return.</p>
    <p style="margin-bottom: 0;">However, if the products purchased from Germany are first brought into Türkiye and later sold to the company in France, the deduction cannot be claimed.</p>
</div>

<p>The example demonstrates that physically bringing the goods into Türkiye interrupts eligibility, even where the same goods are later exported.</p>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example 2: brokerage between an Italian seller and an Egyptian buyer</h4>
    <p><strong>Example 2:</strong> (C) A.Ş. acted as an intermediary in a goods transaction between a company resident in Italy and a company resident in Egypt.</p>
    <p>The company earned TRY 400,000 in brokerage income from the transaction.</p>
    <p>Provided that the seller and buyer of the goods are not located in Türkiye and the other statutory conditions are satisfied, 95% of the profit, equal to TRY 380,000, may be deducted from corporate income.</p>
    <p style="margin-bottom: 0;">If either the buyer or the seller is located in Türkiye, the deduction cannot be claimed.</p>
</div>

<p>The provision can therefore apply to brokerage and intermediation income even where the Turkish company never owns the underlying goods.</p>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example 3: Istanbul Financial Center participant</h4>
    <p><strong>Example 3:</strong> (Ç) A.Ş. operates in the Istanbul Financial Center under a participant certificate.</p>
    <p>The company purchased products from a company resident in Japan and sold those products to a company resident in the United Arab Emirates without bringing the products into Türkiye.</p>
    <p>It earned TRY 2,000,000 from the transaction.</p>
    <p style="margin-bottom: 0;">Provided that the entire profit is transferred to Türkiye by the annual corporate tax return filing deadline and is reported in the annual corporate tax return, the full amount of the profit may be deducted from corporate income.</p>
</div>

<p>The ordinary deduction rate is 95%. The example applies a 100% deduction because the company operates in the Istanbul Financial Center and holds the required participant certificate.</p>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example 4: goods stored in a customs-bonded warehouse</h4>
    <p><strong>Example 4:</strong> (K) A.Ş. purchased goods from a company resident in Germany and stored them in a customs-bonded warehouse in Türkiye.</p>
    <p>Without releasing the goods for free circulation and without subjecting them to any processing, the company sold the goods to a company resident in Bulgaria.</p>
    <p>It earned TRY 2,000,000 from the transaction.</p>
    <p>Provided that the entire profit is transferred to Türkiye by the annual corporate tax return filing deadline and is reported in the annual corporate tax return, 95% of the profit may be deducted from corporate income.</p>
    <p style="margin-bottom: 0;">However, if the goods stored in the customs-bonded warehouse are sold to a buyer in Türkiye or are released for free circulation, the deduction cannot be claimed.</p>
</div>

<p>The presence of goods in a customs-bonded warehouse does not, by itself, prevent the deduction. The decisive issue is whether the goods are released for free circulation or sold into the Turkish market.</p>

<hr>

<h2>4. Foreign Trade Intermediation Income</h2>
<p>The 95% deduction may also apply where a Turkish company acts as an intermediary in a goods transaction taking place outside Türkiye.</p>
<p>The conditions include:</p>
<ul>
    <li>the seller must be outside Türkiye</li>
    <li>the buyer must be outside Türkiye</li>
    <li>the goods transaction must take place outside Türkiye</li>
    <li>the relevant profit must be transferred to Türkiye by the annual return deadline</li>
    <li>the qualifying income and expenses must be separately recorded</li>
</ul>
<p>The intermediary does not necessarily need to acquire ownership of the goods.</p>
<p>The Italy and Egypt example above illustrates this structure. The deduction is unavailable where either party to the underlying sale is located in Türkiye.</p>

<hr>

<h2>5. Digital Codes, Gift Cards and Intellectual Property Rights</h2>
<p>The Communiqué addresses whether digital codes and intangible assets may qualify for the foreign trading deduction.</p>

<h3>Product-specific digital codes</h3>
<p>A deduction may be available where the relevant code represents a specific and identifiable product or service, such as:</p>
<ul>
    <li>activation codes</li>
    <li>e-pin codes</li>
    <li>game codes</li>
    <li>digital product codes</li>
    <li>licence codes</li>
    <li>subscription codes</li>
</ul>
<p>The code must generally:</p>
<ul>
    <li>be purchased outside Türkiye</li>
    <li>be sold outside Türkiye</li>
    <li>remain unchanged in nature and content</li>
    <li>not be used or made available for use in Türkiye</li>
    <li>be sold directly in the form in which it was acquired</li>
</ul>

<h3>General-purpose gift cards and stored value</h3>
<p>The deduction does not apply to cards or codes that merely represent general purchasing power.</p>
<p>Examples include:</p>
<ul>
    <li>general-purpose gift cards</li>
    <li>wallet codes</li>
    <li>stored balances</li>
    <li>credits</li>
    <li>payment codes</li>
    <li>codes that can later be used to purchase various products or services</li>
</ul>
<p>The distinction is whether the code represents a specified product or service, or merely functions as a payment instrument.</p>

<h3>Intellectual property rights</h3>
<p>Qualifying income may also arise from intellectual property rights purchased outside Türkiye and sold outside Türkiye.</p>
<p>Relevant rights may include:</p>
<ul>
    <li>copyrights</li>
    <li>trademarks</li>
    <li>patents</li>
    <li>utility models</li>
    <li>industrial designs</li>
    <li>licences</li>
    <li>publication rights</li>
</ul>
<p>The rights must be transferred without substantive alteration. Following the sale, the seller should not retain continuing ownership, control, use or disposal rights over the transferred asset.</p>

<hr>

<h2>6. When the 95% Deduction Increases to 100%</h2>
<p>The deduction may be applied at 100% for qualifying companies operating:</p>
<ul>
    <li>in industrial zones designated by the President based on foreign investment intensity</li>
    <li>in the Istanbul Financial Center under the required participant certificate</li>
</ul>
<p>The 100% deduction is not available merely because a company has an address in one of these areas.</p>
<p>The company must satisfy the applicable:</p>
<ul>
    <li>location requirements</li>
    <li>certificate requirements</li>
    <li>activity conditions</li>
    <li>income transfer conditions</li>
    <li>accounting requirements</li>
    <li>documentation requirements</li>
</ul>
<p>The Istanbul Financial Center example involving products purchased from Japan and sold to the United Arab Emirates illustrates the application of the 100% deduction.</p>

<hr>

<h2>7. Deduction for Qualified Service Centres</h2>
<p>Companies operating as qualified service centres under Türkiye’s foreign direct investment framework may deduct 95% of qualifying income earned from foreign activities.</p>
<p>The deduction may increase to 100% for qualified service centres operating:</p>
<ul>
    <li>in specified industrial zones</li>
    <li>in the Istanbul Financial Center under a participant certificate</li>
</ul>

<h3>Eligibility conditions</h3>
<p>The company must generally:</p>
<ul>
    <li>have formal qualified service centre status</li>
    <li>earn the relevant income exclusively from qualifying foreign activities</li>
    <li>transfer the relevant profit to Türkiye by the annual corporate tax return deadline</li>
    <li>separately record qualifying revenue, costs and expenses</li>
    <li>hold the relevant certificates where the 100% deduction is claimed</li>
</ul>
<p>Income arising outside the qualified service centre activities does not qualify.</p>

<h3>Maximum period: 20 accounting periods</h3>
<p>The deduction is available for a maximum of 20 accounting periods, including the accounting period in which the qualified service centre begins operating.</p>
<p>A shortened first accounting period still counts as one complete period.</p>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example: calculation of the 20-period limit</h4>
    <p><strong>Example:</strong> (A) A.Ş., operating as a qualified service centre, commenced activities on 15 October 2026.</p>
    <p style="margin-bottom: 0;">The company may benefit from the deduction only for profits earned from qualified service centre activities during the accounting periods from 2026 to 2045.</p>
</div>
<p>The example confirms that the shortened 2026 accounting period counts as the first of the 20 periods.</p>

<h3>Transfer of profits to Türkiye</h3>
<p>The profit must be transferred to Türkiye by the deadline for filing the annual corporate tax return for the accounting period in which the profit was earned.</p>
<p>A transfer made in a later accounting period does not restore eligibility for the earlier period.</p>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example: qualified service centre in the Istanbul Financial Center</h4>
    <p><strong>Example:</strong> (B) A.Ş. operates as a qualified service centre in the Istanbul Financial Center under a participant certificate.</p>
    <p>The company earned TRY 10,000,000 exclusively from its qualified foreign service centre activities.</p>
    <p style="margin-bottom: 0;">Provided that the entire profit is transferred to Türkiye by the annual corporate tax return filing deadline, the full amount of the profit may be deducted from corporate income.</p>
</div>
<p>Because the company operates in the Istanbul Financial Center and satisfies the participant certificate requirement, the deduction applies at 100%.</p>

<h3>Income outside the qualifying activity</h3>
<p>Income that does not directly arise from qualified service centre operations is generally excluded.</p>
<p>This may include:</p>
<ul>
    <li>interest income</li>
    <li>foreign exchange gains resulting from holding cash</li>
    <li>gains from the disposal of fixed assets</li>
    <li>other non-operating or extraordinary income</li>
</ul>
<p>A company cannot treat all income as qualifying merely because it holds qualified service centre status.</p>

<hr>

<h2>8. Manufacturing and Agricultural Production Tax Reduction</h2>
<p>From the 2027 accounting period, companies holding an industrial registry certificate and actually conducting manufacturing activities may apply a 12.5 percentage-point reduction to the corporate tax rate applicable to qualifying manufacturing income.</p>
<p>A corresponding reduction applies to qualifying agricultural production income.</p>
<p>Where the ordinary corporate tax rate is 25%, the qualifying income may therefore be taxed at 12.5%.</p>
<p>This is a reduction of 12.5 percentage points. It is not a deduction equal to 12.5% of the profit.</p>

<h3>Companies with special accounting periods</h3>
<p>For companies using a special accounting period, the new rate applies to special accounting periods beginning during the 2027 calendar year.</p>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example: special accounting period</h4>
    <p><strong>Example:</strong> (B) A.Ş. conducts agricultural production activities and uses a special accounting period running from 1 June to 31 May.</p>
    <p style="margin-bottom: 0;">The 12.5 percentage-point corporate tax reduction will apply to qualifying agricultural production income for the special accounting period from 1 June 2027 to 31 May 2028.</p>
</div>

<h3>Conditions for manufacturers</h3>
<p>A manufacturer must:</p>
<ul>
    <li>hold a valid industrial registry certificate</li>
    <li>actually conduct manufacturing activities</li>
    <li>earn the relevant profit from activities covered by the certificate</li>
    <li>separately determine manufacturing revenue, expenses and profit</li>
</ul>
<p>Possession of an industrial registry certificate alone is not sufficient where no actual manufacturing activity is carried out.</p>

<hr>

<h2>9. Calculation of the Reduced Manufacturing Tax Base</h2>
<p>Where a company earns both manufacturing income and other income, the reduced rate is not automatically applied to the entire corporate tax base.</p>
<p>The qualifying portion is calculated as follows:</p>
<p><strong>Tax base subject to the reduced rate = Corporate tax base × Manufacturing profit / Commercial balance sheet profit</strong></p>
<p>The amount calculated cannot exceed:</p>
<ul>
    <li>the actual profit earned from manufacturing</li>
    <li>the company’s net corporate income for the relevant period</li>
</ul>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example 1: refrigerator manufacturer</h4>
    <p><strong>Example 1:</strong> (F) A.Ş. manufactures refrigerators for sale in the domestic market and holds an industrial registry certificate.</p>
    <p>Its 2027 results are as follows:</p>
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px; font-size: 0.9rem;">
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Commercial balance sheet profit</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 2,000,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Profit from manufacturing activities</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,400,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Other income outside the reduction</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 600,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Non-deductible expenses</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 500,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Prior-year losses</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,200,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Corporate tax base</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,300,000</td></tr>
        </tbody>
    </table>
    <p>The portion of the tax base subject to the 12.5 percentage-point reduction is calculated as follows:</p>
    <p><strong>TRY 1,300,000 × (TRY 1,400,000 / TRY 2,000,000)</strong><br>
    <strong>TRY 1,300,000 × 70% = TRY 910,000</strong></p>
    <p>Accordingly:</p>
    <ul>
        <li>TRY 910,000 of the 2027 corporate tax base is subject to the 12.5 percentage-point reduction</li>
        <li>the applicable corporate tax rate on this amount is 12.5%, calculated as 25% minus 12.5 percentage points</li>
        <li>the remaining TRY 390,000 is subject to the ordinary corporate tax rate</li>
    </ul>
</div>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example 2: several manufacturing activities, including losses</h4>
    <p><strong>Example 2:</strong> (G) A.Ş. holds an industrial registry certificate.</p>
    <p>During 2027, the company:</p>
    <ul>
        <li>earned TRY 3,800,000 from the sale of agricultural machinery manufactured by the company</li>
        <li>incurred a TRY 1,200,000 loss from the sale of health products manufactured by the company</li>
        <li>incurred a TRY 1,800,000 loss from another manufacturing activity</li>
    </ul>
    <p>Its full results are as follows:</p>
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px; font-size: 0.9rem;">
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Commercial balance sheet profit</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 2,000,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Profit from agricultural machinery sales</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 3,800,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Loss from health product sales</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,200,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Loss from another manufacturing activity</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,800,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Other income outside the reduction</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,200,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Non-deductible expenses</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,000,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Prior-year losses</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 2,000,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Corporate tax base</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,000,000</td></tr>
        </tbody>
    </table>
    <p>The company’s net manufacturing profit is:</p>
    <p><strong>TRY 3,800,000 - TRY 1,200,000 - TRY 1,800,000 = TRY 800,000</strong></p>
    <p>The reduced tax base is calculated as follows:</p>
    <p><strong>TRY 1,000,000 × (TRY 800,000 / TRY 2,000,000)</strong><br>
    <strong>TRY 1,000,000 × 40% = TRY 400,000</strong></p>
    <p>Accordingly:</p>
    <ul>
        <li>TRY 400,000 is subject to the 12.5 percentage-point reduction</li>
        <li>the remaining TRY 600,000 is subject to the ordinary corporate tax rate</li>
    </ul>
    <p style="margin-bottom: 0;">If the company’s manufacturing activities had resulted in an overall loss, the reduced rate would not apply, even if the company had commercial balance sheet profit or taxable corporate income from other activities.</p>
</div>

<hr>

<h2>10. Contract Manufacturing and Economic Substance</h2>
<p>A company may still qualify for the manufacturing tax reduction where certain stages of production are outsourced to a third-party manufacturer.</p>
<p>The legal title of the agreement is not decisive. The actual allocation of functions and risks must be examined.</p>
<p>Relevant factors include whether the taxpayer:</p>
<ul>
    <li>supplies raw materials or semi-finished goods</li>
    <li>plans and controls the production process</li>
    <li>assumes production and inventory risks</li>
    <li>determines product specifications</li>
    <li>conducts quality control</li>
    <li>manages the production organisation</li>
    <li>performs a substantial part of the manufacturing process</li>
</ul>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example: outsourced cutting and painting</h4>
    <p><strong>Example:</strong> (A) A.Ş. manufactures furniture and holds an industrial registry certificate.</p>
    <p>The company outsources the cutting and painting of certain furniture components.</p>
    <p>However, the company itself performs production planning, supplies the raw materials, conducts quality control, manages the production process and completes the remaining manufacturing activities.</p>
    <p style="margin-bottom: 0;">In this case, the profit earned from the sale of the products is treated as profit derived from manufacturing activities.</p>
</div>

<p>Where the taxpayer does not assume production organisation or production risk and the manufacturing activity is effectively carried out entirely by a third party, the resulting income may not qualify as manufacturing income.</p>

<hr>

<h2>11. Manufacturing and Export Tax Reductions</h2>
<p>Türkiye also provides a five percentage-point corporate tax reduction for qualifying export income.</p>
<p>However, manufacturing and export reductions cannot be added together for the same profit.</p>
<p>A company that manufactures and exports its own products generally applies the 12.5 percentage-point manufacturing reduction. It cannot apply an additional five percentage-point export reduction to the same income.</p>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example 1: manufactured bags sold domestically and exported</h4>
    <p><strong>Example 1:</strong> (H) A.Ş. holds an industrial registry certificate and manufactures bags.</p>
    <p>During 2027, it earned:</p>
    <ul>
        <li>TRY 400,000 from domestic sales of the bags it manufactured</li>
        <li>TRY 600,000 from exports of the bags it manufactured</li>
    </ul>
    <p>The company’s total profit from these activities was TRY 1,000,000. Its commercial balance sheet profit and taxable corporate income were also TRY 1,000,000.</p>
    <p>The entire TRY 1,000,000 profit is subject to the 12.5 percentage-point manufacturing reduction.</p>
    <p style="margin-bottom: 0;">No additional five percentage-point export reduction applies to the TRY 600,000 export portion.</p>
</div>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example 2: domestic and export sales of manufactured heating systems</h4>
    <p><strong>Example 2:</strong> (I) A.Ş. holds an industrial registry certificate and manufactures heating systems. It sells some products domestically and exports the remainder.</p>
    <p>Its 2027 results are as follows:</p>
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px; font-size: 0.9rem;">
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Commercial balance sheet profit</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 3,000,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Profit from domestic sales</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 900,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Profit from exported manufactured products</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,500,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Other income outside the reduction</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 600,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Non-deductible expenses</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 200,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Prior-year losses</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,200,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Corporate tax base</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 2,000,000</td></tr>
        </tbody>
    </table>
    <p>The total profit derived from manufacturing is:</p>
    <p><strong>TRY 900,000 + TRY 1,500,000 = TRY 2,400,000</strong></p>
    <p>The portion of the tax base subject to the manufacturing reduction is:</p>
    <p><strong>TRY 2,000,000 × (TRY 2,400,000 / TRY 3,000,000)</strong><br>
    <strong>TRY 2,000,000 × 80% = TRY 1,600,000</strong></p>
    <p>Accordingly:</p>
    <ul>
        <li>TRY 1,600,000 is subject to the 12.5 percentage-point manufacturing reduction</li>
        <li>the remaining TRY 400,000 is subject to the ordinary corporate tax rate</li>
        <li>the exported products do not receive an additional five percentage-point reduction</li>
    </ul>
</div>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example 3: manufactured products and purchased goods exported together</h4>
    <p><strong>Example 3:</strong> (İ) A.Ş. holds an industrial registry certificate and manufactures construction machinery and hardware products.</p>
    <p>The company also purchases white goods from (H) Ltd. Şti. and exports those products without manufacturing them.</p>
    <p>Its 2027 results are as follows:</p>
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px; font-size: 0.9rem;">
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Commercial balance sheet profit</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 2,000,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Profit from construction machinery manufactured and sold by the company</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 800,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Loss from exports of hardware products manufactured by the company</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 400,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Profit from exports of purchased white goods</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,000,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Other income outside the reduction</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 600,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Non-deductible expenses</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 500,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Prior-year losses</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,200,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Corporate tax base</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,300,000</td></tr>
        </tbody>
    </table>
    <p>The company’s net manufacturing profit is:</p>
    <p><strong>TRY 800,000 - TRY 400,000 = TRY 400,000</strong></p>
    <p>The portion of the tax base subject to the manufacturing reduction is:</p>
    <p><strong>TRY 1,300,000 × (TRY 400,000 / TRY 2,000,000)</strong><br>
    <strong>TRY 1,300,000 × 20% = TRY 260,000</strong></p>
    <p>The portion of the tax base subject to the export reduction is:</p>
    <p><strong>TRY 1,300,000 × (TRY 1,000,000 / TRY 2,000,000)</strong><br>
    <strong>TRY 1,300,000 × 50% = TRY 650,000</strong></p>
    <p>Accordingly:</p>
    <ul>
        <li>TRY 650,000 is subject to the five percentage-point export reduction, resulting in a 20% corporate tax rate</li>
        <li>TRY 260,000 is subject to the 12.5 percentage-point manufacturing reduction, resulting in a 12.5% corporate tax rate</li>
        <li>a total of TRY 910,000 benefits from a reduced corporate tax rate</li>
        <li>the remaining TRY 390,000 is subject to the ordinary corporate tax rate</li>
    </ul>
    <p style="margin-bottom: 0;">This example is important for companies that manufacture some products but also purchase and export other products. The two income streams must be separately identified.</p>
</div>

<hr>

<h2>12. Interaction with the Public Offering Tax Reduction</h2>
<p>Companies whose shares are offered to the public for the first time through Borsa İstanbul may qualify for a two percentage-point corporate tax reduction for five accounting periods, subject to the applicable conditions.</p>
<p>Where both the public offering reduction and the manufacturing reduction apply, the public offering reduction is applied first.</p>
<p>The manufacturing reduction is then applied to the qualifying portion of the tax base.</p>

<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #2D4CC8; border-radius: 4px;">
    <h4 style="margin-top: 0; color: #2D4CC8;"><i class="fas fa-lightbulb"></i> Official example: public company engaged in manufacturing</h4>
    <p><strong>Example:</strong> In 2025, 30% of the shares of (N) A.Ş. were offered to the public for the first time through Borsa İstanbul.</p>
    <p>The company holds an industrial registry certificate and manufactures construction machinery.</p>
    <p>Its 2027 results are as follows:</p>
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px; font-size: 0.9rem;">
        <tbody>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Commercial balance sheet profit</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 2,000,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Profit from construction machinery sales</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 1,400,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Other income outside the reduction</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 600,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Non-deductible expenses</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 500,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Prior-year losses</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 2,000,000</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #e2e8f0;">Corporate tax base</td><td style="padding: 10px; border: 1px solid #e2e8f0; text-align: right;">TRY 500,000</td></tr>
        </tbody>
    </table>
    <p>Because the public offering took place on 10 February 2025, the company applies the two percentage-point public offering reduction during the relevant five-year period.</p>
    <p>The ordinary corporate tax rate of 25% is therefore first reduced to 23%.</p>
    <p>The portion of the tax base attributable to manufacturing is calculated as follows:</p>
    <p><strong>TRY 500,000 × (TRY 1,400,000 / TRY 2,000,000)</strong><br>
    <strong>TRY 500,000 × 70% = TRY 350,000</strong></p>
    <p>Accordingly:</p>
    <ul>
        <li>TRY 350,000 is taxed at 10.5%, calculated as 23% minus 12.5 percentage points</li>
        <li>the remaining TRY 150,000 is taxed at 23%</li>
    </ul>
    <p style="margin-bottom: 0;">The example confirms that the two reductions are applied sequentially rather than simply added and deducted from the original 25% rate.</p>
</div>

<hr>

<h2>13. Domestic Minimum Corporate Tax</h2>
<p>The Communiqué also addresses the treatment of certain deductions when calculating Türkiye’s domestic minimum corporate tax.</p>
<p>The following deductions may be taken into account when determining the minimum corporate tax base:</p>
<ul>
    <li>income from goods purchased and sold outside Türkiye without bringing the goods into Türkiye</li>
    <li>income from qualifying foreign goods intermediation</li>
    <li>qualifying income of qualified service centres</li>
    <li>qualifying financial service export income earned in the Istanbul Financial Center</li>
</ul>
<p>This treatment is commercially significant because the minimum corporate tax regime could otherwise reduce or eliminate the economic benefit of the relevant deductions.</p>
<p>Companies must still:</p>
<ul>
    <li>satisfy the underlying conditions</li>
    <li>maintain supporting records</li>
    <li>correctly classify the income</li>
    <li>complete the required transfers to Türkiye</li>
    <li>report the deduction in the appropriate corporate tax return sections</li>
</ul>

<hr>

<h2>What Companies Should Do</h2>

<h3>1. Separate qualifying income streams</h3>
<p>Companies should distinguish between:</p>
<ul>
    <li>manufacturing income</li>
    <li>export income</li>
    <li>foreign goods trading income</li>
    <li>brokerage income</li>
    <li>qualified service centre income</li>
    <li>non-operating income</li>
    <li>ordinary domestic commercial income</li>
</ul>

<h3>2. Establish separate accounting records</h3>
<p>Revenue, costs, expenses and losses relating to each incentive should be separately identifiable.</p>
<p>General accounting records that do not permit a reliable allocation may create a risk that the deduction or reduced rate will be rejected.</p>

<h3>3. Review profit transfer deadlines</h3>
<p>Foreign trading and qualified service centre profits must generally be transferred to Türkiye by the annual corporate tax return filing deadline.</p>
<p>A later transfer does not normally correct the failure for the relevant accounting period.</p>

<h3>4. Review contractual structures</h3>
<p>Contracts should accurately reflect:</p>
<ul>
    <li>ownership of goods</li>
    <li>location of the buyer and seller</li>
    <li>place of delivery</li>
    <li>customs status</li>
    <li>production responsibilities</li>
    <li>allocation of commercial risks</li>
    <li>intellectual property ownership</li>
    <li>service centre scope</li>
</ul>

<h3>5. Verify licences and certificates</h3>
<p>Companies should confirm the validity and scope of:</p>
<ul>
    <li>industrial registry certificates</li>
    <li>free zone operating licences</li>
    <li>qualified service centre status</li>
    <li>Istanbul Financial Center participant certificates</li>
    <li>agricultural production documents</li>
    <li>relevant operating permits</li>
</ul>

<h3>6. Prepare for 2027</h3>
<p>Manufacturers, agricultural producers and foundation university healthcare institutions should complete implementation work before the beginning of the 2027 accounting period.</p>

<hr>

<h2 id="faq">Frequently Asked Questions</h2>

<div class="faq-item">
    <h4>What is Corporate Tax Communiqué No. 26?</h4>
    <p>Corporate Tax Communiqué No. 26 explains changes to Türkiye’s corporate tax rules concerning free zones, foreign goods trading, qualified service centres, manufacturing income, agricultural production, public offering reductions and domestic minimum corporate tax.</p>
</div>

<div class="faq-item">
    <h4>When was Corporate Tax Communiqué No. 26 published?</h4>
    <p>It was published in the Official Gazette dated 4 July 2026 and numbered 33300.</p>
</div>

<div class="faq-item">
    <h4>Are sales within a Turkish free zone exempt from corporate tax?</h4>
    <p>Qualifying profits from products manufactured in a free zone may be exempt where the products are sold within the same free zone, to another free zone or outside Türkiye. Sales into the Turkish domestic market remain outside the exemption.</p>
</div>

<div class="faq-item">
    <h4>What is the 95% foreign trading income deduction?</h4>
    <p>A Turkish corporate taxpayer may deduct 95% of qualifying net profit earned from goods purchased and sold outside Türkiye without bringing the goods into Türkiye.</p>
</div>

<div class="faq-item">
    <h4>Can goods be stored in a customs-bonded warehouse in Türkiye?</h4>
    <p>Yes. Storage in a customs-bonded warehouse does not necessarily prevent the deduction, provided that the goods are not released for free circulation, are not processed and are ultimately sold outside Türkiye.</p>
</div>

<div class="faq-item">
    <h4>Must foreign trading profits be transferred to Türkiye?</h4>
    <p>Yes. The qualifying profit must generally be transferred to Türkiye by the annual corporate tax return filing deadline.</p>
</div>

<div class="faq-item">
    <h4>Does a later transfer restore the deduction?</h4>
    <p>No. A transfer made after the relevant filing deadline does not normally restore eligibility for the accounting period in which the profit was earned.</p>
</div>

<div class="faq-item">
    <h4>Can foreign brokerage income qualify?</h4>
    <p>Yes. The deduction may apply where a Turkish company intermediates a goods transaction between a foreign seller and a foreign buyer, provided that neither party is located in Türkiye and the other conditions are satisfied.</p>
</div>

<div class="faq-item">
    <h4>Do gift cards qualify?</h4>
    <p>General-purpose gift cards, wallet balances and stored-value codes generally do not qualify. Codes representing a specified product or service may qualify under the applicable conditions.</p>
</div>

<div class="faq-item">
    <h4>When can the 95% deduction increase to 100%?</h4>
    <p>The deduction may increase to 100% for qualifying companies operating in certain designated industrial zones or in the Istanbul Financial Center under the required participant certificate.</p>
</div>

<div class="faq-item">
    <h4>How long can a qualified service centre use the deduction?</h4>
    <p>The deduction is available for a maximum of 20 accounting periods, including the shortened accounting period in which the centre begins operating.</p>
</div>

<div class="faq-item">
    <h4>When does the 12.5 percentage-point manufacturing reduction apply?</h4>
    <p>The reduction applies from the 2027 accounting period. For special accounting periods, it applies to periods beginning during the 2027 calendar year.</p>
</div>

<div class="faq-item">
    <h4>Does an industrial registry certificate automatically qualify a company?</h4>
    <p>No. The company must both hold the certificate and actually conduct manufacturing activities.</p>
</div>

<div class="faq-item">
    <h4>Can a company using subcontractors qualify as a manufacturer?</h4>
    <p>Yes, in certain circumstances. The company must retain meaningful production functions and risks, such as production planning, raw material supply, quality control and management of the manufacturing process.</p>
</div>

<div class="faq-item">
    <h4>Can manufacturing and export reductions be applied to the same profit?</h4>
    <p>No. Profit from products manufactured and exported by the same company generally receives the 12.5 percentage-point manufacturing reduction without an additional five percentage-point export reduction.</p>
</div>

<div class="faq-item">
    <h4>What happens when a company exports products it did not manufacture?</h4>
    <p>Profit from purchased goods exported by the company may qualify for the five percentage-point export reduction, while separately identified manufacturing income may qualify for the 12.5 percentage-point manufacturing reduction.</p>
</div>

<div class="faq-item">
    <h4>How is the reduced manufacturing tax base calculated?</h4>
    <p>The tax base is multiplied by the ratio of manufacturing profit to commercial balance sheet profit:</p>
    <p><strong>Corporate tax base × Manufacturing profit / Commercial balance sheet profit</strong></p>
</div>

<div class="faq-item">
    <h4>What happens if the manufacturing activities generate an overall loss?</h4>
    <p>The manufacturing reduction cannot be applied where the company’s combined manufacturing activities result in an overall loss.</p>
</div>

<div class="faq-item">
    <h4>Can the public offering and manufacturing reductions be used together?</h4>
    <p>Yes, where the applicable conditions are satisfied. The public offering reduction is applied first, and the manufacturing reduction is then applied to the qualifying manufacturing portion of the tax base.</p>
</div>

<p><em>This guide provides general information and does not constitute legal or tax advice. The application of each exemption, deduction or reduced tax rate should be assessed based on the company’s activities, contracts, licences, accounting records and relevant accounting period.</em></p>
"""

# Replace tags
new_html = template

# Title
new_html = re.sub(r'<title>.*?</title>', f'<title>{meta_title}</title>', new_html)
new_html = re.sub(r'<meta property="og:title" content=".*?">', f'<meta property="og:title" content="{meta_title}">', new_html)
new_html = re.sub(r'<meta name="twitter:title" content=".*?">', f'<meta name="twitter:title" content="{meta_title}">', new_html)

# Description
new_html = re.sub(r'<meta name="description"\s*content=".*?">', f'<meta name="description"\n        content="{meta_desc}">', new_html, flags=re.DOTALL)
new_html = re.sub(r'<meta property="og:description"\s*content=".*?">', f'<meta property="og:description"\n        content="{meta_desc}">', new_html, flags=re.DOTALL)
new_html = re.sub(r'<meta name="twitter:description"\s*content=".*?">', f'<meta name="twitter:description"\n        content="{meta_desc}">', new_html, flags=re.DOTALL)

# URL
new_html = re.sub(r'<meta property="og:url" content=".*?">', f'<meta property="og:url" content="{canonical_url}">', new_html)
new_html = re.sub(r'<link rel="canonical" href=".*?">', f'<link rel="canonical" href="{canonical_url}">', new_html)

# Date
current_date = "2026-07-16"
new_html = re.sub(r'<meta property="article:published_time" content=".*?">', f'<meta property="article:published_time" content="{current_date}">', new_html)
new_html = re.sub(r'"datePublished": ".*?"', f'"datePublished": "{current_date}"', new_html)

# H1 and Breadcrumbs
new_html = re.sub(r'<span class="current">.*?</span>', f'<span class="current">Türkiye Corporate Tax Changes 2026</span>', new_html)
new_html = re.sub(r'<h1>.*?</h1>', f'<h1>{meta_title}</h1>', new_html)

# Remove the guide download box from the original template
new_html = re.sub(r'<div class="guide-download-box">.*?</div>', '', new_html, flags=re.DOTALL)
# Also remove the modal
new_html = re.sub(r'<!-- Email-gated PDF download modal -->.*?</script>', '', new_html, flags=re.DOTALL)
new_html = re.sub(r'<style>.*?</style>', '', new_html, flags=re.DOTALL)

# Now inject the new content inside the section
pattern = r'<section class="article-content">.*?</section>'
new_section = f'<section class="article-content">\n{html_content}\n</section>'
new_html = re.sub(pattern, new_section, new_html, flags=re.DOTALL)

# Update tags
new_tags = """
                <div class="article-tags">
                    <span class="tag">Corporate Tax</span>
                    <span class="tag">Tax Incentives</span>
                    <span class="tag">Free Zone</span>
                    <span class="tag">Manufacturing</span>
                    <span class="tag">Türkiye</span>
                </div>
"""
new_html = re.sub(r'<div class="article-tags">.*?</div>', new_tags, new_html, flags=re.DOTALL)

# Update CTA Section text
cta_pattern = r'<div class="article-cta">.*?</div>'
new_cta = """
                <div class="article-cta">
                    <h3>Need Assistance with the 2026 Corporate Tax Changes?</h3>
                    <p>Ensure full compliance and benefit from maximum tax advantages. Our expert team is ready to guide you through Türkiye's corporate tax landscape safely.</p>
                    <a href="index.html#contact" class="cta-btn">
                        <i class="fas fa-envelope"></i>
                        Get Expert Advice
                    </a>
                </div>
"""
new_html = re.sub(cta_pattern, new_cta, new_html, flags=re.DOTALL)


# Inject FAQ Schema
faq_schema = """
    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Corporate Tax Communiqué No. 26 in Türkiye?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Corporate Tax Communiqué No. 26 explains changes affecting Turkish free zones, foreign goods trading, qualified service centres, manufacturing income, agricultural production, public offering reductions and domestic minimum corporate tax."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 95% foreign trading income deduction in Türkiye?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Turkish corporate taxpayer may deduct 95% of qualifying net profit earned from goods purchased and sold outside Türkiye without bringing the goods into Türkiye, provided that the statutory conditions are satisfied."
          }
        },
        {
          "@type": "Question",
          "name": "Must qualifying foreign trading profits be transferred to Türkiye?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The qualifying profit must generally be transferred to Türkiye by the deadline for filing the annual corporate tax return for the relevant accounting period."
          }
        },
        {
          "@type": "Question",
          "name": "Are sales within a Turkish free zone exempt from corporate tax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Qualifying profits from products manufactured in a Turkish free zone may be exempt when the products are sold within the same free zone, to another free zone or outside Türkiye. Sales into the Turkish domestic market remain taxable."
          }
        },
        {
          "@type": "Question",
          "name": "When does the 12.5 percentage-point manufacturing tax reduction apply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 12.5 percentage-point corporate tax reduction applies from the 2027 accounting period. For companies using a special accounting period, it applies to accounting periods beginning during the 2027 calendar year."
          }
        },
        {
          "@type": "Question",
          "name": "Can manufacturing and export tax reductions be combined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The manufacturing and export reductions cannot be applied cumulatively to the same profit. Separately identified manufacturing and export income may qualify for different reductions."
          }
        },
        {
          "@type": "Question",
          "name": "How is the reduced manufacturing tax base calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The reduced manufacturing tax base is calculated by multiplying the corporate tax base by the ratio of manufacturing profit to commercial balance sheet profit."
          }
        },
        {
          "@type": "Question",
          "name": "Can contract manufacturing income qualify for the manufacturing reduction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It may qualify where the taxpayer retains substantial production functions and risks, including production planning, raw material supply, quality control and management of the production process."
          }
        }
      ]
    }
    </script>
"""

new_html = new_html.replace('</head>', faq_schema + '\n</head>')

# Article schema update
new_html = re.sub(r'"headline": ".*?"', f'"headline": "{meta_title}"', new_html)
new_html = re.sub(r'"description": ".*?"', f'"description": "{meta_desc}"', new_html)

# Breadcrumb schema update
new_html = re.sub(r'{"@type": "ListItem", "position": 3, "name": ".*?"}', f'{{"@type": "ListItem", "position": 3, "name": "{meta_title}"}}', new_html)


with open('turkiye-corporate-tax-changes-2026-communique-26.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

