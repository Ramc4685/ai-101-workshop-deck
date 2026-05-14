const SHEET_NAME = "AI Workflow Reviews";
const SPREADSHEET_ID = "1wap9UO6h05XXiLKKRmZLph8aHYBU6E1pypRbnceDj5E";

const HEADERS = [
  "submittedAt",
  "name",
  "businessName",
  "email",
  "phone",
  "businessType",
  "customerType",
  "repeatedTask",
  "businessLeak",
  "timeCost",
  "successMeans",
  "aiOpportunity",
  "humanReview",
  "scorecard",
  "source"
];

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    const sheet = getSheet_();
    const row = HEADERS.map((header) => {
      const value = payload[header];
      return Array.isArray(value) ? value.join(", ") : value || "";
    });

    sheet.appendRow(row);

    return jsonResponse_({
      ok: true,
      message: "Worksheet saved"
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      message: error.message
    });
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeaders = firstRow.some((cell) => cell);

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
