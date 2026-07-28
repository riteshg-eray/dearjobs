from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile
from xml.sax.saxutils import escape


OUTPUT = Path(__file__).resolve().parent.parent / "Sprint Lab.xlsx"

sheets = [
    ("Overview", [
        ["Field", "Value"],
        ["Program", "Dear Jobs Engineering"],
        ["Welcome", "Welcome, new SDET."],
        ["Context", "You joined a 10-person product team maintaining an existing job-search platform."],
        ["Learning goal", "Complete real sprint work: explore APIs in Postman, investigate unclear requirements, automate with Playwright, and respond to code review."],
        ["Sprint", "Sprint 01"],
        ["Day", "Day 4 of 10"],
        ["Sprint goal", "Find, filter & save jobs"],
        ["Progress", "38% complete"],
        ["Story points delivered", "4"],
    ]),
    ("Assigned Work", [
        ["Ticket", "Title", "Details", "Status"],
        ["DJ-106", "Create Postman tests for Jobs API", "Positive, negative, schema, JWT, chained requests and Newman execution.", "In progress"],
        ["DJ-109", "Explore combined job filters", "Assigned by Tech Lead; 60-minute charter; QA environment.", "Ready"],
        ["DJ-107", "Automate job-search smoke flow", "Playwright + TypeScript; starts after DJ-106 review.", "Blocked"],
    ]),
    ("Test Charter", [
        ["Field", "Value"],
        ["Tech Lead", "Maya Chen"],
        ["Charter", "Explore combinations of location, Remote, C2C, and H-1B Transfer filters."],
        ["Focus", "Invalid values; navigation persistence; empty results; UI/API inconsistencies."],
        ["Deliverables", "Capture evidence and identify automation candidates."],
    ]),
    ("Definition of Ready", [
        ["Item", "State"],
        ["Business value is clear", "Ready"],
        ["Acceptance criteria are testable", "Ready"],
        ["API contract is missing", "Gap"],
        ["Remote vs hybrid rule unresolved", "Gap"],
        ["Test data is identified", "Ready"],
        ["Performance threshold unspecified", "Gap"],
    ]),
    ("Ceremonies", [
        ["Time", "Ceremony", "Purpose"],
        ["09:15", "Daily stand-up", "Report progress, plan, blockers."],
        ["14:00", "PR review", "Senior SDET + Tech Lead."],
    ]),
]


def column_name(number):
    result = ""
    while number:
        number, remainder = divmod(number - 1, 26)
        result = chr(65 + remainder) + result
    return result


def sheet_xml(rows):
    rendered_rows = []
    for row_number, row in enumerate(rows, 1):
        cells = []
        for column_number, value in enumerate(row, 1):
            reference = f"{column_name(column_number)}{row_number}"
            style = ' s="1"' if row_number == 1 else ""
            cells.append(
                f'<c r="{reference}" t="inlineStr"{style}><is><t>{escape(str(value))}</t></is></c>'
            )
        rendered_rows.append(f'<row r="{row_number}">{"".join(cells)}</row>')
    widths = "".join(
        f'<col min="{index}" max="{index}" width="{width}" customWidth="1"/>'
        for index, width in enumerate([20, 34, 75, 18], 1)
    )
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
        '<sheetViews><sheetView workbookViewId="0">'
        '<pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>'
        '</sheetView></sheetViews>'
        f'<cols>{widths}</cols><sheetData>{"".join(rendered_rows)}</sheetData>'
        '<autoFilter ref="A1:D1"/></worksheet>'
    )


content_types = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
    '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
    '<Default Extension="xml" ContentType="application/xml"/>'
    '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
    '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'
    + "".join(
        f'<Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        for i in range(1, len(sheets) + 1)
    )
    + '</Types>'
)

workbook = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
    'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'
    + "".join(
        f'<sheet name="{escape(name)}" sheetId="{i}" r:id="rId{i}"/>'
        for i, (name, _) in enumerate(sheets, 1)
    )
    + '</sheets></workbook>'
)

workbook_rels = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
    + "".join(
        f'<Relationship Id="rId{i}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>'
        for i in range(1, len(sheets) + 1)
    )
    + f'<Relationship Id="rId{len(sheets) + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
    '</Relationships>'
)

root_rels = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
    '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>'
    '</Relationships>'
)

styles = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
    '<fonts count="2"><font><sz val="11"/><name val="Calibri"/></font>'
    '<font><b/><color rgb="FFFFFFFF"/><sz val="11"/><name val="Calibri"/></font></fonts>'
    '<fills count="3"><fill><patternFill patternType="none"/></fill>'
    '<fill><patternFill patternType="gray125"/></fill>'
    '<fill><patternFill patternType="solid"><fgColor rgb="FF246BFE"/><bgColor indexed="64"/></patternFill></fill></fills>'
    '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'
    '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'
    '<cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>'
    '<xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top"/></xf></cellXfs>'
    '</styleSheet>'
)

with ZipFile(OUTPUT, "w", ZIP_DEFLATED) as archive:
    archive.writestr("[Content_Types].xml", content_types)
    archive.writestr("_rels/.rels", root_rels)
    archive.writestr("xl/workbook.xml", workbook)
    archive.writestr("xl/_rels/workbook.xml.rels", workbook_rels)
    archive.writestr("xl/styles.xml", styles)
    for index, (_, rows) in enumerate(sheets, 1):
        archive.writestr(f"xl/worksheets/sheet{index}.xml", sheet_xml(rows))

print(OUTPUT)
