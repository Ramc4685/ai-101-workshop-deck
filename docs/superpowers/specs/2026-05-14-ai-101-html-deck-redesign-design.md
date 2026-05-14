# AI 101 HTML Deck Redesign Design

Date: 2026-05-14

## Goal

Redesign `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck` into a professional static presentation package for small business AI workshops. The deck should feel like it was created by an AI workflow architect: structured, credible, visually rich, and practical.

## Source Of Truth

The canonical content is the existing plain HTML deck:

- `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/index.html`
- `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/slides.js`
- `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/speaker-notes.html`
- `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/worksheet.html`

The React deck is not the implementation target for this redesign.

## Audience

Primary audience: small business owners attending an AI 101 workshop.

Secondary audience: prospects evaluating RamC as a practical AI consultant who can review workflows, improve follow-up systems, and help implement AI-supported operations.

The deck should avoid a beginner tutorial feel. It should make AI understandable without making the presenter look basic.

## Design Direction

Use the approved **Architect's field guide** direction:

- Dark charcoal and off-white working surfaces.
- Blueprint-inspired dividers, diagrams, grids, and measured annotations.
- Warm brass/gold accent for key takeaways and calls to action.
- Muted red only for risk, leakage, or warning states.
- Typography that feels editorial and precise rather than generic browser default.
- Dense but readable slide layouts that fill the canvas.
- Icons as a consistent professional system, not decorative clip art.

The deck should feel like a practical operating manual for business workflows.

## Content Strategy

Keep the current slide sequence and workshop message, but improve how the material is expressed visually.

Convert repetitive bullet-heavy slides into stronger teaching artifacts:

- Revenue leak slides become diagnostic maps.
- Prompting slides become formulas, frameworks, and before/after panels.
- Safety slides become decision rules and guardrails.
- Demo slides become scenario/prompt/result layouts.
- Worksheet slides become structured activity canvases.
- CTA slides become lead-capture pages with a clear free consultation offer.

Use the existing bottom-line statements as high-emphasis architectural takeaways.

## Icon System

Add or refine an inline SVG icon system in the HTML deck. Icons should be clean, consistent, and suited to business operations.

Required icon concepts:

- Presenter/profile
- Roadmap/map
- Time/clock
- Alert/revenue leak
- Target/outcome
- Spark/AI capability
- Workflow/process
- Shield/safety
- Tool selection
- Message/prompt
- Compare/before-after
- Checklist/scorecard
- Building/business context
- Calendar/program
- QR/CTA
- Question/Q&A

Icons must share the same stroke weight, bounding box, and visual tone.

## Slide System

The redesigned `index.html` should support the current slide types in `slides.js` and improve them visually:

- `intro`: presenter credibility with business architecture framing.
- `agenda`: roadmap timeline, not a plain list.
- `split`: strong statement plus diagnostic or visual panel.
- `leaks`: revenue leak stack with warning icons and sequence numbering.
- `outcomes`: business results grid.
- `capabilities`: AI assistant capability matrix.
- `process`: step-by-step workflow line.
- `grid`: practical first-win cards.
- `warning`: honest limits and risk framing.
- `statement`: large memorable rule with supporting guardrails.
- `table`: clean tool comparison.
- `formula`: prompt formula with example callout.
- `compare`: weak vs strong prompt contrast.
- `numbered`: prompting rules with numbered panels.
- `roles`, `context`, `format`: compact technique systems.
- `demo`: scenario, prompt, and teaching point layout.
- `questions`: workshop self-diagnosis.
- `checklist`: first-use-case scorecard.
- `worksheet`: structured participant activity.
- `support`: consulting support offer.
- `roadmap`: four-session program architecture.
- `cta`: free consultation or workflow review conversion slide.
- `qa`: strong closing question slide.

If a slide type is not currently handled cleanly, add a layout branch rather than forcing it into a generic bullet view.

## GitHub Pages

The deliverable must remain static HTML/CSS/JS so it can be published through GitHub Pages.

GitHub Pages can publish static files such as HTML, CSS, and JavaScript. It should not be treated as a backend for storing form submissions. The deck should include a clear form link or embedded form from a public-friendly form provider.

Reference:

- GitHub Pages static publishing: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Lead Capture

Use an editable GitHub Pages worksheet as the recommended capture path. The form must not require attendees to have a GitHub account.

Preferred storage: Google Sheets through a Google Apps Script web app.

Rationale:

- Attendees can submit without GitHub.
- It works well with a static GitHub Pages site.
- The worksheet can keep the same professional visual design as the deck.
- Responses are easy to review, filter, and export in Google Sheets.

Fallback provider: Tally or Google Forms, if the user prefers externally hosted form UI.

The existing GitHub Issue Form may remain as a technical fallback, but it should not be the primary CTA for workshop attendees.

Reference:

- Google Apps Script web apps: https://developers.google.com/apps-script/guides/web
- GitHub issue forms: https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms

## CTA Requirements

The CTA should use one clear offer:

**Get your first AI workflow reviewed**

CTA copy should be specific and low-pressure:

- Submit one repeated business task.
- Share where follow-up, admin, or marketing slows you down.
- Get one practical recommended AI next step.

The deck should support a configurable worksheet submission URL in one place, so the user can replace it with the deployed Google Apps Script web app URL.

## Accessibility And Presentation Behavior

Keep or improve current controls:

- Right arrow / space: next slide.
- Left arrow: previous slide.
- `N`: speaker notes.
- `F`: fullscreen.

Required quality improvements:

- Responsive slide scaling for projector and laptop screens.
- Strong focus states for controls.
- Sufficient text contrast.
- Meaningful alt text if external or bitmap images are added.
- Avoid layouts where text overlaps on smaller screens.

## Speaker Notes And Worksheet

Restyle `speaker-notes.html` and `worksheet.html` so they feel like part of the same professional workshop system.

Speaker notes should remain printable and easy to scan.

Worksheet should become a polished lead-capture and workshop artifact:

- Business identity.
- Customer type.
- Repeated task.
- Current time cost.
- Revenue or operational leak.
- AI draft/organize/review opportunity.
- Human approval needed.
- Success definition.
- Consultation CTA and Google Sheets submission setup state.

## Out Of Scope

This redesign will not:

- Move the deck into React.
- Build a custom paid backend.
- Store form responses directly in GitHub Pages.
- Require paid software.
- Rewrite the workshop topic from scratch.

## Acceptance Criteria

The work is successful when:

- `/Users/ramc/Documents/Code/AI-Workshop/ai-101-html-deck/index.html` looks professional and architect-led.
- Existing slide content from `slides.js` still renders.
- Slides are fuller and more visually structured than the current beginner-style deck.
- Icons are consistent and high quality.
- CTA and worksheet point to a configurable Google Apps Script URL.
- `speaker-notes.html` and `worksheet.html` visually match the deck.
- The result can be opened locally as static HTML and published to GitHub Pages.
- Keyboard navigation still works.

## Self-Review Notes

This spec intentionally targets the HTML deck only. It does not depend on the React deck, a backend, or a paid form product. The only user-supplied value still needed before final publishing is the real external form URL.
