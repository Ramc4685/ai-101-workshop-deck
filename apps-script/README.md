# Google Sheets Storage For AI 101 Worksheet

Use this Apps Script project to store `worksheet.html` submissions from the GitHub Pages deck into Google Sheets.

## Setup

1. Create a new Google Sheet for workshop submissions.
2. In the Sheet, open `Extensions -> Apps Script`.
3. Replace the default script with the contents of `Code.gs`.
4. Save the project.
5. Click `Deploy -> New deployment`.
6. Select `Web app`.
7. Set `Execute as` to `Me`.
8. Set `Who has access` to `Anyone`.
9. Deploy and copy the web app URL.
10. Paste that URL into `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/slides.js`:

```js
worksheetSubmissionUrl: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```

## Data Stored

The script creates or uses a sheet named `AI Workflow Reviews` and stores:

- submittedAt
- name
- businessName
- email
- phone
- businessType
- customerType
- repeatedTask
- businessLeak
- timeCost
- successMeans
- aiOpportunity
- humanReview
- scorecard
- source

## Notes

GitHub Pages hosts the worksheet UI. Google Apps Script receives the form submission and appends a row to Google Sheets.
