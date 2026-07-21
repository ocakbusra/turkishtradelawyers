from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "turkey-entity-selection-checklist-2026.pdf"
LOGO = ROOT / "logo.png"

NAVY = colors.HexColor("#14213D")
BLUE = colors.HexColor("#2D4CC8")
TEAL = colors.HexColor("#43C6B9")
LIGHT_BLUE = colors.HexColor("#EEF2FF")
LIGHT_TEAL = colors.HexColor("#EAFBF8")
LIGHT_GREY = colors.HexColor("#F6F8FC")
MID_GREY = colors.HexColor("#667085")
DARK = colors.HexColor("#101828")
BORDER = colors.HexColor("#D9E0EC")


pdfmetrics.registerFont(TTFont("TTL-Regular", "/System/Library/Fonts/Supplemental/Arial.ttf"))
pdfmetrics.registerFont(TTFont("TTL-Bold", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"))
pdfmetrics.registerFont(TTFont("TTL-Italic", "/System/Library/Fonts/Supplemental/Arial Italic.ttf"))


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="CoverEyebrow",
    fontName="TTL-Bold",
    fontSize=10,
    leading=13,
    textColor=TEAL,
    alignment=TA_CENTER,
    spaceAfter=7 * mm,
    uppercase=True,
))
styles.add(ParagraphStyle(
    name="CoverTitle",
    fontName="TTL-Bold",
    fontSize=29,
    leading=34,
    textColor=colors.white,
    alignment=TA_CENTER,
    spaceAfter=7 * mm,
))
styles.add(ParagraphStyle(
    name="CoverSubtitle",
    fontName="TTL-Regular",
    fontSize=13,
    leading=19,
    textColor=colors.HexColor("#DDE5F5"),
    alignment=TA_CENTER,
))
styles.add(ParagraphStyle(
    name="SectionTitle",
    fontName="TTL-Bold",
    fontSize=20,
    leading=24,
    textColor=NAVY,
    spaceAfter=4 * mm,
))
styles.add(ParagraphStyle(
    name="SectionIntro",
    fontName="TTL-Regular",
    fontSize=10.5,
    leading=16,
    textColor=MID_GREY,
    spaceAfter=6 * mm,
))
styles.add(ParagraphStyle(
    name="BodyTTL",
    fontName="TTL-Regular",
    fontSize=9.5,
    leading=14,
    textColor=DARK,
))
styles.add(ParagraphStyle(
    name="BodySmallTTL",
    fontName="TTL-Regular",
    fontSize=8.4,
    leading=12,
    textColor=DARK,
))
styles.add(ParagraphStyle(
    name="CardTitle",
    fontName="TTL-Bold",
    fontSize=11,
    leading=14,
    textColor=BLUE,
    spaceAfter=2 * mm,
))
styles.add(ParagraphStyle(
    name="Checklist",
    fontName="TTL-Regular",
    fontSize=9.5,
    leading=15,
    textColor=DARK,
    leftIndent=2 * mm,
    firstLineIndent=-2 * mm,
    spaceAfter=2.2 * mm,
))
styles.add(ParagraphStyle(
    name="FooterTTL",
    fontName="TTL-Regular",
    fontSize=7.5,
    leading=9,
    textColor=MID_GREY,
))
styles.add(ParagraphStyle(
    name="CoverMetaLabel",
    fontName="TTL-Regular",
    fontSize=7.5,
    leading=9,
    textColor=colors.HexColor("#AEBAD2"),
))
styles.add(ParagraphStyle(
    name="CoverMetaValue",
    fontName="TTL-Regular",
    fontSize=9.5,
    leading=13,
    textColor=colors.white,
))
styles.add(ParagraphStyle(
    name="ContactTitle",
    fontName="TTL-Bold",
    fontSize=11,
    leading=14,
    textColor=TEAL,
    alignment=TA_CENTER,
))
styles.add(ParagraphStyle(
    name="ContactBody",
    fontName="TTL-Regular",
    fontSize=9.5,
    leading=14,
    textColor=colors.white,
    alignment=TA_CENTER,
))


def p(text, style="BodyTTL"):
    return Paragraph(text, styles[style])


def checkbox(text):
    return p(f"&#9633;&nbsp;&nbsp;{text}", "Checklist")


def draw_page(canvas, doc):
    canvas.saveState()
    width, height = A4
    if doc.page > 1:
        canvas.setStrokeColor(BORDER)
        canvas.setLineWidth(0.5)
        canvas.line(18 * mm, height - 15 * mm, width - 18 * mm, height - 15 * mm)
        canvas.setFont("TTL-Bold", 8)
        canvas.setFillColor(NAVY)
        canvas.drawString(18 * mm, height - 11.5 * mm, "TURKISH TRADE LAWYERS")
        canvas.setFont("TTL-Regular", 8)
        canvas.setFillColor(MID_GREY)
        canvas.drawRightString(width - 18 * mm, height - 11.5 * mm, "Turkey Entity Selection Checklist 2026")

        canvas.setStrokeColor(BORDER)
        canvas.line(18 * mm, 15 * mm, width - 18 * mm, 15 * mm)
        canvas.setFont("TTL-Regular", 7.5)
        canvas.setFillColor(MID_GREY)
        canvas.drawString(18 * mm, 10.5 * mm, "turkishtradelawyers.com  |  hi@turkishtradelawyers.com")
        canvas.drawRightString(width - 18 * mm, 10.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def cover_page(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, 0, width, height, fill=1, stroke=0)
    canvas.setFillColor(BLUE)
    canvas.circle(width - 22 * mm, height - 18 * mm, 55 * mm, fill=1, stroke=0)
    canvas.setFillColor(TEAL)
    canvas.circle(13 * mm, 18 * mm, 37 * mm, fill=1, stroke=0)
    canvas.restoreState()


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=22 * mm,
        bottomMargin=20 * mm,
        title="Turkey Entity Selection Checklist 2026",
        author="Turkish Trade Lawyers",
        subject="A practical checklist for foreign investors comparing Turkish company and office structures.",
    )
    normal_frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    cover_frame = Frame(24 * mm, 32 * mm, A4[0] - 48 * mm, A4[1] - 64 * mm, id="cover")
    doc.addPageTemplates([
        PageTemplate(id="Cover", frames=[cover_frame], onPage=cover_page),
        PageTemplate(id="Normal", frames=[normal_frame], onPage=draw_page),
    ])

    story = [
        Spacer(1, 37 * mm),
        p("2026 FOREIGN INVESTOR RESOURCE", "CoverEyebrow"),
        p("Turkey Entity Selection Checklist", "CoverTitle"),
        p("Compare a Limited Şirket, Anonim Şirket, liaison office, and branch before committing to a market-entry structure.", "CoverSubtitle"),
        Spacer(1, 42 * mm),
        Table([[p("Prepared by", "CoverMetaLabel"), p("Turkish Trade Lawyers", "CoverMetaValue")],
               [p("Contact", "CoverMetaLabel"), p("hi@turkishtradelawyers.com", "CoverMetaValue")],
               [p("Updated", "CoverMetaLabel"), p("July 2026", "CoverMetaValue")]],
              colWidths=[28 * mm, 92 * mm],
              style=TableStyle([
                  ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#1D2B4F")),
                  ("TEXTCOLOR", (0, 0), (-1, -1), colors.white),
                  ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#516184")),
                  ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#516184")),
                  ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                  ("LEFTPADDING", (0, 0), (-1, -1), 8),
                  ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                  ("TOPPADDING", (0, 0), (-1, -1), 7),
                  ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
              ])),
        PageBreak(),
    ]
    doc.handle_nextPageTemplate("Normal")

    story.extend([
        p("1. Rapid structure comparison", "SectionTitle"),
        p("Use this page to narrow the initial options. Sector-specific licensing, tax, employment, and foreign investment rules may change the outcome.", "SectionIntro"),
    ])

    comparison_data = [
        [p("Structure", "CardTitle"), p("Best suited to", "CardTitle"), p("Key constraint", "CardTitle"), p("2026 starting point", "CardTitle")],
        [p("Limited Şirket", "BodySmallTTL"), p("Operating subsidiaries, SMEs, closely held ventures", "BodySmallTTL"), p("Share transfers and public-debt exposure require careful structuring", "BodySmallTTL"), p("Minimum capital: TRY 50,000", "BodySmallTTL")],
        [p("Anonim Şirket", "BodySmallTTL"), p("Investment, scalable governance, fundraising and exits", "BodySmallTTL"), p("More formal board, capital and governance requirements", "BodySmallTTL"), p("Minimum capital: TRY 250,000", "BodySmallTTL")],
        [p("Liaison office", "BodySmallTTL"), p("Market research, coordination, promotion and representation", "BodySmallTTL"), p("Commercial activity and revenue generation are prohibited", "BodySmallTTL"), p("Ministry permission; temporary authorization", "BodySmallTTL")],
        [p("Branch office", "BodySmallTTL"), p("Direct Turkish operations under the foreign parent", "BodySmallTTL"), p("Parent remains responsible; Turkish tax and accounting apply", "BodySmallTTL"), p("Trade registry establishment and capital allocation", "BodySmallTTL")],
    ]
    comparison = Table(comparison_data, colWidths=[31 * mm, 49 * mm, 54 * mm, 40 * mm], repeatRows=1)
    comparison.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("BACKGROUND", (0, 1), (-1, -1), colors.white),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, LIGHT_GREY]),
        ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.extend([comparison, Spacer(1, 7 * mm)])

    decision_cards = [
        [p("If you will invoice customers in Turkey", "CardTitle"), p("A liaison office is generally not appropriate. Compare a Turkish company and a branch.", "BodyTTL")],
        [p("If fundraising or share transfers matter", "CardTitle"), p("An Anonim Şirket commonly offers the more flexible long-term framework.", "BodyTTL")],
        [p("If you are testing the market only", "CardTitle"), p("A liaison office may work if every planned activity remains strictly non-commercial.", "BodyTTL")],
    ]
    decision_table = Table(decision_cards, colWidths=[63 * mm, 111 * mm])
    decision_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT_BLUE),
        ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#C7D2FE")),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#C7D2FE")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.extend([decision_table, PageBreak()])

    story.extend([
        p("2. Formation readiness checklist", "SectionTitle"),
        p("Mark what is already known. Unchecked items identify the questions to resolve before filing or applying for permission.", "SectionIntro"),
    ])

    readiness_sections = [
        ("Ownership and governance", [
            "Founders or parent company identified",
            "Individual and corporate ownership percentages mapped",
            "Managers, directors, or branch representative identified",
            "Signing and representation powers decided",
            "Future investor, transfer, or exit expectations considered",
        ]),
        ("Business model", [
            "Primary Turkish business activity described",
            "Need to invoice or earn revenue in Turkey confirmed",
            "Customers, suppliers, and contracting entity identified",
            "Employee and work-permit requirements estimated",
            "Regulated-sector permits or licenses checked",
        ]),
        ("Documents and timing", [
            "Passports and address documents available",
            "Foreign parent-company documents available",
            "Apostille, legalization, and sworn translation needs checked",
            "Registered office plan identified",
            "Target establishment date and operational launch date separated",
        ]),
        ("Tax, banking, and compliance", [
            "Expected Turkish revenue and costs estimated",
            "Bank account and KYC requirements considered",
            "Corporate tax, VAT, payroll, and social security reviewed",
            "Accounting support arranged",
            "Data protection and employment compliance considered",
        ]),
    ]

    for title, items in readiness_sections:
        block = [p(title, "CardTitle")] + [checkbox(item) for item in items]
        card = Table([[block]], colWidths=[174 * mm])
        card.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), LIGHT_GREY),
            ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
            ("LEFTPADDING", (0, 0), (-1, -1), 10),
            ("RIGHTPADDING", (0, 0), (-1, -1), 10),
            ("TOPPADDING", (0, 0), (-1, -1), 9),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ]))
        story.extend([KeepTogether(card), Spacer(1, 4 * mm)])

    story.append(PageBreak())
    story.extend([
        p("3. Questions that determine the right route", "SectionTitle"),
        p("Prepare short answers before speaking with counsel. These points usually affect the recommended structure and establishment sequence.", "SectionIntro"),
    ])

    questions = [
        "What activity will be carried out in Turkey, and will it generate revenue?",
        "Will the investor be an individual, a foreign company, or several shareholders?",
        "Is limited liability at Turkish-entity level important, or can the parent remain directly responsible?",
        "Will the business seek investors, issue different share rights, or plan an exit?",
        "How many employees are expected, and will foreign work permits be needed?",
        "Does the business need sector-specific licensing before it can operate?",
        "What is the intended launch date, and which foreign documents are already available?",
        "Will the Turkish operation import, export, hold inventory, or contract locally?",
    ]
    for index, question in enumerate(questions, 1):
        q_table = Table([
            [p(str(index), "CardTitle"), p(question, "BodyTTL")],
            ["", ""],
        ], colWidths=[12 * mm, 162 * mm], rowHeights=[None, 12 * mm])
        q_table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (0, 0), BLUE),
            ("TEXTCOLOR", (0, 0), (0, 0), colors.white),
            ("ALIGN", (0, 0), (0, 0), "CENTER"),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
            ("SPAN", (0, 1), (1, 1)),
            ("LINEBELOW", (0, 1), (1, 1), 0.6, BORDER),
            ("LEFTPADDING", (0, 0), (-1, -1), 8),
            ("RIGHTPADDING", (0, 0), (-1, -1), 8),
            ("TOPPADDING", (0, 0), (-1, 0), 7),
            ("BOTTOMPADDING", (0, 0), (-1, 0), 7),
        ]))
        story.extend([q_table, Spacer(1, 3 * mm)])

    story.append(PageBreak())
    story.extend([
        p("4. Your practical next step", "SectionTitle"),
        p("A structure should be selected only after the planned Turkish activities, ownership, tax exposure, governance, and licensing requirements are reviewed together.", "SectionIntro"),
    ])

    next_step = Table([
        [p("Send us", "CardTitle"), p("Your intended activity, shareholder or parent-company details, preferred structure if any, and target timeline.", "BodyTTL")],
        [p("We review", "CardTitle"), p("Whether a Limited Şirket, Anonim Şirket, liaison office, branch, or another route fits the proposed operation.", "BodyTTL")],
        [p("You receive", "CardTitle"), p("The recommended next practical step and the initial document path for the proposed structure.", "BodyTTL")],
    ], colWidths=[42 * mm, 132 * mm])
    next_step.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT_TEAL),
        ("BOX", (0, 0), (-1, -1), 0.7, colors.HexColor("#A7E8DF")),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#A7E8DF")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))
    story.extend([next_step, Spacer(1, 10 * mm)])

    contact_box = Table([[p("Request structure guidance", "ContactTitle")],
                         [p("www.turkishtradelawyers.com/setup-a-business-in-turkey.html", "ContactBody")],
                         [p("hi@turkishtradelawyers.com  |  +90 501 635 94 65", "ContactBody")]],
                        colWidths=[174 * mm])
    contact_box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, -1), colors.white),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("LEFTPADDING", (0, 0), (-1, -1), 14),
        ("RIGHTPADDING", (0, 0), (-1, -1), 14),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.extend([contact_box, Spacer(1, 16 * mm)])
    story.append(p(
        "Important: This checklist provides general information only and does not constitute legal, tax, or accounting advice. Requirements depend on the investor, sector, activity, documentation, and applicable law at the time of establishment.",
        "FooterTTL",
    ))

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build_pdf()
