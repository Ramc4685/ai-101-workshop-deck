# AI 101 HTML Deck Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck` into a professional architect-led static HTML workshop deck with matching speaker notes, editable worksheet, icons, and Google Sheets-backed consultation CTA.

**Architecture:** Keep the current static HTML/CSS/JS structure and `slides.js` content model. Replace the visual system and renderer branches in `index.html`, then restyle `speaker-notes.html` and turn `worksheet.html` into an editable form. Store submissions in Google Sheets through a Google Apps Script web app endpoint.

**Tech Stack:** Plain HTML, CSS, vanilla JavaScript, inline SVG icons, static GitHub Pages-compatible files, Google Apps Script, Google Sheets.

---

### Task 1: Add configurable workshop metadata and form URL

**Files:**
- Modify: `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/slides.js`

**Step 1: Add deck config**

Add a small global config before `window.deckSlides`:

```js
window.deckConfig = {
  workshopTitle: "AI 101 for Small Business Owners",
  presenter: "RamC Venkatasamy",
  consultationLabel: "Get your first AI workflow reviewed",
  formUrl: "https://tally.so/r/REPLACE_WITH_YOUR_FORM",
  formProvider: "Tally"
};
```

**Step 2: Keep slide content intact**

Do not rewrite the workshop sequence. Only adjust CTA fields if needed so the primary offer reads:

```text
Get your first AI workflow reviewed
```

**Step 3: Verify**

Run:

```bash
node -e "global.window={}; require('./ai-101-html-deck/slides.js'); console.log(window.deckSlides.length, window.deckConfig.consultationLabel)"
```

Expected: prints slide count and the consultation label.

---

### Task 2: Rebuild the main deck visual system

**Files:**
- Modify: `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/index.html`

**Step 1: Replace theme variables**

Use an architect-led palette:

```css
:root {
  --charcoal: #101713;
  --charcoal-2: #17221d;
  --panel: #1d2a24;
  --paper: #f3eee4;
  --paper-2: #e6ded0;
  --ink: #f8f1e7;
  --muted: #a8b7ad;
  --line: rgba(214, 198, 166, .24);
  --brass: #d0a34a;
  --red: #c66a5c;
  --green: #87a892;
  --shadow: 0 30px 90px rgba(3, 7, 5, .45);
}
```

Use `Georgia` or another available serif for large architectural headlines and system sans for body text. Do not import external fonts unless needed.

**Step 2: Add background and slide frame**

Create a dark full-screen presentation shell with subtle grid/blueprint texture. Keep 16:9 slide scaling and projector-safe spacing.

**Step 3: Upgrade typography**

Large headings should be confident and balanced. Body copy should be readable from a room. Kicker labels should be crisp, small, and not overused.

**Step 4: Verify**

Open:

```bash
open /Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/index.html
```

Expected: deck opens locally and slide 1 renders in the new dark architectural frame.

---

### Task 3: Build a stronger icon and visual component system

**Files:**
- Modify: `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/index.html`

**Step 1: Normalize icon rendering**

Keep the existing inline SVG path map but improve icon containers, stroke width, and contextual use.

**Step 2: Add reusable renderer helpers**

Add helper functions:

```js
function metricCard(label, value, iconName) { ... }
function artifactCard(label, text, iconName) { ... }
function systemPanel(title, items, iconName) { ... }
function ctaLink() { ... }
```

**Step 3: Remove inline style fragments**

Move renderer styling into CSS classes wherever practical.

**Step 4: Verify**

Run a quick icon coverage check:

```bash
node -e "global.window={}; require('./ai-101-html-deck/slides.js'); const iconNames=new Set(window.deckSlides.map(s=>s.icon).filter(Boolean)); console.log([...iconNames].sort().join('\\n'))"
```

Expected: every listed icon exists in the `icons` map.

---

### Task 4: Upgrade slide renderer branches

**Files:**
- Modify: `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/index.html`

**Step 1: Create dedicated layouts**

Implement polished branches for:

- `intro`
- `agenda`
- `split`
- `leaks`
- `outcomes`
- `capabilities`
- `process`
- `grid`
- `warning`
- `statement`
- `table`
- `formula`
- `compare`
- `numbered`
- `roles`
- `context`
- `format`
- `demo`
- `questions`
- `checklist`
- `worksheet`
- `support`
- `roadmap`
- `cta`
- `qa`

**Step 2: Fill slides with diagrams**

Use workflow tracks, side panels, diagnostic grids, and prompt architecture panels instead of plain bullet stacks.

**Step 3: Add CTA link**

CTA slide must include an actual link button:

```html
<a class="cta-button" href="..." target="_blank" rel="noreferrer">Open workflow review form</a>
```

If the form URL still contains `REPLACE_WITH_YOUR_FORM`, display it as a placeholder state.

**Step 4: Verify**

Open the deck and click through every slide. Expected: no blank slides, no obvious overflow, and keyboard navigation still works.

---

### Task 5: Restyle speaker notes

**Files:**
- Modify: `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/speaker-notes.html`

**Step 1: Match visual system**

Use the same charcoal/brass/paper theme. Keep notes print-friendly.

**Step 2: Improve scan structure**

Show slide number, kicker, title, and notes. Add timing plan as a professional run-of-show table.

**Step 3: Verify**

Open:

```bash
open /Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/speaker-notes.html
```

Expected: notes render from `slides.js`, print button remains available.

---

### Task 6: Restyle worksheet and lead-capture page

**Files:**
- Modify: `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/worksheet.html`

**Step 1: Match visual system**

Use the same design language while keeping the page printable.

**Step 2: Add consultation CTA**

Use `window.deckConfig.formUrl` from `slides.js` so the worksheet and deck share the same form destination.

**Step 3: Improve worksheet structure**

Include:

- Business identity
- Customer type
- Repeated task
- Current time cost
- Revenue/operation leak
- AI opportunity
- Human review
- Success definition
- Use-case scorecard

**Step 4: Verify**

Open:

```bash
open /Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/worksheet.html
```

Expected: worksheet renders as a polished one-page printout with matching CTA.

---

### Task 7: Add static validation and browser review

**Files:**
- Modify only if needed: `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/index.html`
- Modify only if needed: `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/speaker-notes.html`
- Modify only if needed: `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/worksheet.html`

**Step 1: Syntax smoke test**

Run:

```bash
node -e "global.window={}; require('./ai-101-html-deck/slides.js'); if(!window.deckSlides.length) throw new Error('no slides'); console.log('slides ok:', window.deckSlides.length)"
```

Expected: `slides ok: 27`.

**Step 2: Local static server**

Run:

```bash
python3 -m http.server 4173 --directory ai-101-html-deck
```

Expected: server starts at `http://localhost:4173`.

**Step 3: Browser review**

Open `http://localhost:4173` and verify:

- Slide 1 renders.
- Arrow keys work.
- Notes toggle works.
- CTA link is visible.
- Worksheet and speaker notes links work.

**Step 4: Final cleanup**

Remove debug artifacts and leave `.superpowers/brainstorm` untouched unless the user asks to clean it.
