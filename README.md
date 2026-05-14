# AI 101 Workshop Deck

Static HTML workshop deck for publishing to GitHub Pages.

## Pages

- `ai-101-html-deck/index.html` - presentation deck
- `ai-101-html-deck/worksheet.html` - editable AI workflow review worksheet
- `ai-101-html-deck/speaker-notes.html` - speaker notes and timing plan

## Worksheet Storage

Worksheet submissions are designed to save to Google Sheets through Google Apps Script.

1. Create a Google Sheet.
2. Open `Extensions -> Apps Script`.
3. Paste `apps-script/Code.gs`.
4. Deploy it as a web app.
5. Paste the deployed URL into `worksheetSubmissionUrl` in `ai-101-html-deck/slides.js`.

Until the Apps Script URL is configured, the worksheet remains editable and printable, but online submission is disabled.
