import re
import os

translations = {
    "Anonim Şirket (A.Ş.)": "",
    "Arbitration in Turkey": "Türkiye'de Tahkim",
    "Agency Agreement": "Acentelik Sözleşmesi",
    "Anti-Corruption Compliance": "Yolsuzlukla Mücadele Uyumluluğu",
    "Annual Leave Entitlement": "Yıllık İzin Hakkı",
    "Branch Office": "Şube",
    "Bill of Lading": "Konişmento",
    "Board of Directors": "Yönetim Kurulu",
    "Bilateral Investment Treaty (BIT)": "İkili Yatırım Anlaşması (İYA)",
    "Capital Increase": "Sermaye Artırımı",
    "Commercial Lease Agreement": "Ticari Kira Sözleşmesi",
    "Company Formation": "Şirket Kuruluşu",
    "Competition Law": "Rekabet Hukuku",
    "Compliance Program": "Uyum Programı",
    "Confidentiality Agreement (NDA)": "Gizlilik Sözleşmesi (NDA)",
    "Corporate Governance": "Kurumsal Yönetim",
    "Customs Procedures": "Gümrük İşlemleri",
    "Customs Valuation": "Gümrük Kıymeti",
    "Data Controller": "Veri Sorumlusu",
    "Data Processor": "Veri İşleyen",
    "Debt Collection": "Alacak Tahsili",
    "Data Processing Agreement": "Veri İşleme Sözleşmesi",
    "Distribution Agreement": "Distribütörlük Sözleşmesi",
    "Due Diligence": "Hukuki İnceleme (Due Diligence)",
    "Dispute Resolution Clause": "Uyuşmazlık Çözüm Şartı",
    "Employment Contract": "İş Sözleşmesi",
    "Enforcement of Foreign Judgments": "Yabancı Mahkeme Kararlarının Tenfizi",
    "Environmental Compliance": "Çevresel Uyumluluk",
    "Exclusive Dealing": "Münhasır Anlaşma",
    "Expropriation": "Kamulaştırma",
    "Force Majeure": "Mücbir Sebep",
    "Foreign Direct Investment": "Doğrudan Yabancı Yatırım",
    "Franchise Agreement": "Franchise Sözleşmesi",
    "Free Trade Zones": "Serbest Bölgeler",
    "General Assembly": "Genel Kurul",
    "GDPR vs KVKK": "GDPR ve KVKK Karşılaştırması",
    "Guarantee Agreement": "Garanti Sözleşmesi",
    "Hardship Clause": "Aşırı İfa Güçlüğü Şartı",
    "Holding Company": "Holding Şirketi",
    "Incoterms": "Teslim Şekilleri (Incoterms)",
    "Intellectual Property Rights": "Fikri Mülkiyet Hakları",
    "Investment Incentives": "Yatırım Teşvikleri",
    "Joint Venture": "Ortak Girişim (Joint Venture)",
    "KVKK Compliance": "KVKK Uyumluluğu",
    "Turkish Labor Law": "Türk İş Hukuku",
    "Letter of Credit": "Akreditif",
    "Liaison Office": "İrtibat Bürosu",
    "Licensing Agreement": "Lisans Sözleşmesi",
    "Limited Şirket (Ltd. Şti.)": "",
    "Litigation in Turkey": "Türkiye'de Dava Süreçleri",
    "Mediation": "Arabuluculuk",
    "Merger Control": "Birleşme ve Devralmaların Kontrolü",
    "Mergers and Acquisitions": "Birleşme ve Devralmalar (M&A)",
    "Minimum Wage": "Asgari Ücret",
    "New York Convention": "New York Sözleşmesi",
    "Non-Compete Agreement": "Rekabet Yasağı Sözleşmesi",
    "Notarization Requirements": "Noter Onay Süreçleri",
    "Overtime Pay": "Fazla Mesai Ücreti",
    "Patent Protection": "Patent Koruması",
    "Personal Data": "Kişisel Veri",
    "Power of Attorney": "Vekaletname",
    "Product Liability": "Ürün Sorumluluğu",
    "Property Transfer": "Taşınmaz Devri",
    "Repatriation of Profits": "Kâr Transferi",
    "Residency Permit": "Oturma İzni",
    "Severance Pay": "Kıdem Tazminatı",
    "Share Purchase Agreement": "Hisse Devir Sözleşmesi",
    "Shareholders Agreement": "Pay Sahipleri Sözleşmesi",
    "Social Security": "Sosyal Güvenlik",
    "Subsidiary Company": "Bağlı Ortaklık",
    "Supply Agreement": "Tedarik Sözleşmesi",
    "Turkish Investment Lawyer": "Türk Yatırım Avukatı",
    "Tariff Classification": "Tarife Sınıflandırması",
    "Tax Residency": "Vergi Mukimliği",
    "Technology Development Zones": "Teknoloji Geliştirme Bölgeleri (Teknoparklar)",
    "Employment Termination": "İş Sözleşmesinin Feshi",
    "Trade Secrets": "Ticari Sırlar",
    "Trademark Registration": "Marka Tescili",
    "Transfer Pricing": "Transfer Fiyatlandırması",
    "Turquoise Card": "Turkuaz Kart",
    "Unfair Competition": "Haksız Rekabet",
    "VAT in Turkey": "Türkiye'de KDV",
    "Vertical Agreements": "Dikey Anlaşmalar",
    "Shareholder Voting Rights": "Pay Sahiplerinin Oy Hakları",
    "Warranty Obligations": "Garanti Yükümlülükleri",
    "Withholding Tax": "Stopaj Vergisi",
    "Work Permit": "Çalışma İzni",
    "Working Hours": "Çalışma Süreleri",
    "Apostille": "Apostil Tasdiki",
    "Asset Purchase Agreement": "Malvarlığı Devir Sözleşmesi",
    "Bank Guarantee": "Banka Teminat Mektubu",
    "Commercial Representative": "Ticari Mümessil",
    "Consumer Protection": "Tüketicinin Korunması",
    "Contract Termination": "Sözleşmenin Feshi",
    "Copyright Protection": "Telif Hakkı Koruması",
    "Corporate Tax": "Kurumlar Vergisi",
    "Cross-Border Data Transfer": "Yurtdışına Veri Aktarımı",
    "Dividend Distribution": "Kâr Payı Dağıtımı",
    "Double Tax Treaty": "Çifte Vergilendirmeyi Önleme Anlaşması",
    "E-Commerce Regulations": "E-Ticaret Düzenlemeleri",
    "Electronic Signature": "Elektronik İmza",
    "Employment of Foreign Workers": "Yabancı İşçi İstihdamı",
    "Internal Audit Requirements": "İç Denetim Gereklilikleri",
    "Istanbul Arbitration Centre (ISTAC)": "İstanbul Tahkim Merkezi (ISTAC)",
    "Commercial Lease Termination": "Ticari Kira Sözleşmesinin Feshi",
    "Legal Representation in Court": "Mahkemede Hukuki Temsil",
    "Minority Shareholder Rights": "Azınlık Pay Sahibi Hakları",
    "Rules of Origin": "Menşe Kuralları",
    "Penalty Clauses": "Cezai Şart",
    "Business Permits and Licenses": "İş Yeri Açma ve Çalışma Ruhsatları",
    "Property Rights for Foreigners": "Yabancıların Mülkiyet Hakları",
    "R&D Incentives": "Ar-Ge Teşvikleri",
    "Related Party Transactions": "İlişkili Taraf İşlemleri",
    "Rent Adjustment": "Kira Bedelinin Uyarlanması",
    "Sales Contract": "Satış Sözleşmesi",
    "Sensitive Personal Data": "Özel Nitelikli Kişisel Veri",
    "Service Agreement": "Hizmet Sözleşmesi",
    "Trade Finance": "Dış Ticaretin Finansmanı",
    "Utility Models": "Faydalı Model"
}

file_path = "glossary/glossary-data.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

def replacer(match):
    full_match = match.group(0)
    term_val = match.group(1)
    
    tr_term = translations.get(term_val, "")
    if "trTerm:" in full_match:
        # Already has trTerm, don't double insert
        return full_match
    
    if tr_term:
        replacement = f'{full_match}\n        trTerm: "{tr_term}",'
        return replacement
    return full_match

new_content = re.sub(r'term:\s*"([^"]+)",', replacer, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated glossary-data.js successfully.")
