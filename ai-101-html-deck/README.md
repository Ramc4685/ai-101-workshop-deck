# AI 101 for Small Business Owners - HTML Deck

Open `index.html` in a browser to present the deck.

Files:

- `index.html` - self-contained HTML presentation shell
- `slides.js` - editable slide content and speaker notes
- `speaker-notes.html` - printable speaker notes and timing plan
- `worksheet.html` - editable lead-capture worksheet that can submit to Google Sheets through Apps Script
- `assets/worksheet-qr.svg` - QR code for the published worksheet URL

Controls:

- Right arrow / space - next slide
- Left arrow - previous slide
- `N` - toggle speaker notes
- `F` - enter fullscreen when supported

Before publishing, update `worksheetSubmissionUrl` in `slides.js` with the deployed Google Apps Script web app URL. The deck CTA QR points to the GitHub Pages worksheet URL.
