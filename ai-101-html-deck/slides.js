window.deckConfig = {
  workshopTitle: "AI 101 for Small Business Owners",
  presenter: "RamC Venkatasamy",
  consultationLabel: "Get your first AI workflow reviewed",
  formUrl: "worksheet.html",
  formProvider: "Google Sheets",
  worksheetSubmissionUrl: "https://script.google.com/macros/s/AKfycbywbgI7c0wNengSQxSLLXcJwd5IvPvQjc-wdelJiKwb2eSK1pbpbwSxYr2bKx9wqjOt/exec"
};

window.deckSlides = [
  {
    kicker: "Opening",
    title: "Why I Teach This",
    type: "intro",
    icon: "user",
    bullets: [
      "RamC Venkatasamy",
      "Technology leader and AI architect",
      "Owner of RoboThink Central Illinois",
      "Owner of Marvy Technologies",
      "I run a real local business",
      "I use AI for leads, marketing, follow-up, and operations"
    ],
    bottom: "Practical AI for real business work.",
    notes: "I am not here to show fancy AI tricks. I am here to show where AI helps business owners. The goal is saving time and improving execution."
  },
  {
    kicker: "Roadmap",
    title: "What We Will Cover Today",
    type: "agenda",
    icon: "map",
    bullets: [
      "What AI is",
      "What AI can and cannot do",
      "How to use AI safely",
      "Basic prompting techniques",
      "Live business examples",
      "Pick one AI use case",
      "Q/A and next steps"
    ],
    notes: "Set expectations early. They should leave with one useful business problem. That problem can become their first AI workflow."
  },
  {
    kicker: "Why now",
    title: "Small businesses are paying attention because daily expectations changed.",
    type: "split",
    icon: "clock",
    bullets: [
      "Customers expect faster replies",
      "Follow-up is often inconsistent",
      "Admin work steals selling time",
      "Marketing takes constant effort",
      "AI can support daily business tasks"
    ],
    bottom: "AI is becoming a daily business tool.",
    notes: "Frame AI as business support. Do not frame it as a future trend. Owners need immediate, practical value."
  },
  {
    kicker: "Revenue leaks",
    title: "Revenue often slips away through small missed actions.",
    type: "leaks",
    icon: "alert",
    bullets: [
      "Unanswered leads",
      "Slow customer replies",
      "Weak follow-ups",
      "Delayed quotes",
      "Missed invoices",
      "Repeated admin work"
    ],
    bottom: "Revenue often leaks through missed small actions.",
    notes: "Pause after the bottom line. This is a core message. Many owners lose revenue quietly."
  },
  {
    kicker: "Business first",
    title: "Better execution is the goal, not more tools.",
    type: "outcomes",
    icon: "target",
    bullets: [
      "Faster replies",
      "Better follow-ups",
      "Cleaner marketing",
      "Less manual work",
      "Better customer experience",
      "More consistent operations"
    ],
    bottom: "Do not start with tools. Start with bottlenecks.",
    notes: "This keeps the session business-first. The tool is secondary. The business problem comes first."
  },
  {
    kicker: "AI basics",
    title: "AI can help a business owner draft, organize, and improve everyday work.",
    type: "capabilities",
    icon: "spark",
    bullets: [
      "Understand language",
      "Draft messages",
      "Summarize information",
      "Rewrite content",
      "Organize ideas",
      "Suggest next steps"
    ],
    bottom: "AI is like a smart assistant. It still needs direction.",
    notes: "Keep this simple. Do not over-explain models. Use business language only."
  },
  {
    kicker: "Simple model",
    title: "AI quality depends on the quality of your instructions.",
    type: "process",
    icon: "workflow",
    bullets: [
      "You give instructions",
      "AI uses context",
      "AI predicts useful responses",
      "Better input improves output",
      "Human review is still required"
    ],
    bottom: "AI quality depends on instruction quality.",
    notes: "Use the assistant analogy. A vague request gives vague work. A clear request gives useful work."
  },
  {
    kicker: "First wins",
    title: "Start with repeatable, text-heavy tasks that are easy to review.",
    type: "grid",
    icon: "bolt",
    bullets: [
      "Customer replies",
      "Sales follow-ups",
      "Social media posts",
      "Email newsletters",
      "Review requests",
      "Checklists",
      "SOPs",
      "Meeting notes"
    ],
    bottom: "Start with repeatable, text-heavy tasks.",
    notes: "These are safe first wins. They are easy to review. They show fast value."
  },
  {
    kicker: "Limits",
    title: "AI is useful, but it does not replace judgment.",
    type: "warning",
    icon: "x",
    bullets: [
      "Guarantee truth",
      "Know your full business",
      "Replace final review",
      "Handle sensitive data carelessly",
      "Make legal decisions alone",
      "Fix broken processes by itself"
    ],
    bottom: "AI makes bad processes faster.",
    notes: "This builds trust. Do not oversell AI. Owners respect honest limits."
  },
  {
    kicker: "Safety rule",
    title: "Use AI Safely",
    type: "statement",
    icon: "shield",
    statement: "AI drafts. You decide.",
    bullets: [
      "Remove sensitive customer details",
      "Verify facts before sending",
      "Review tone and accuracy",
      "Never paste passwords",
      "Avoid private financial details",
      "Keep human approval"
    ],
    notes: "This is a trust-building slide. Keep it firm and clear. AI supports judgment. It does not replace it."
  },
  {
    kicker: "Tool choice",
    title: "Start with one tool and build confidence first.",
    type: "table",
    icon: "tool",
    rows: [
      ["ChatGPT", "General business tasks"],
      ["Claude", "Writing and documents"],
      ["Perplexity", "Research and sources"],
      ["Gemini", "Google workspace tasks"]
    ],
    bottom: "Start with one tool. Build confidence first.",
    notes: "Do not make this a tool war. Each tool can help. The workflow matters more."
  },
  {
    kicker: "Prompting",
    title: "A good prompt gives AI the same direction you would give an assistant.",
    type: "formula",
    icon: "message",
    formula: ["Role", "Task", "Context", "Constraints", "Output", "Tone"],
    example: "Act as my customer support assistant. Write a short reply to a parent asking about pricing. Keep it friendly and clear. Ask one follow-up question. End with a booking CTA.",
    notes: "Walk through each part. Explain why each improves output."
  },
  {
    kicker: "Before / after",
    title: "Context changes the output.",
    type: "compare",
    icon: "compare",
    leftLabel: "Weak prompt",
    left: "Write a marketing post.",
    rightLabel: "Strong prompt",
    right: "Act as a local marketing assistant. Write a Facebook post for parents. Promote a kids robotics class for ages 7-14. Keep it warm and exciting. End with a registration CTA.",
    bottom: "Better instructions create better outputs.",
    notes: "Show both outputs if possible. Let attendees see the difference."
  },
  {
    kicker: "Rules",
    title: "Prompting is a conversation, not a one-shot request.",
    type: "numbered",
    icon: "list",
    bullets: [
      "Give AI a role",
      "Add business context",
      "Ask for a format",
      "Use clear constraints",
      "Improve through follow-up"
    ],
    bottom: "Prompting is a conversation.",
    notes: "Teach them not to stop early. The first answer is only a draft. Follow-up prompts improve quality."
  },
  {
    kicker: "Technique 1",
    title: "Give AI a job title.",
    type: "roles",
    icon: "briefcase",
    bullets: [
      "Sales assistant",
      "Marketing manager",
      "Customer support agent",
      "Proposal writer",
      "Operations manager",
      "Business coach"
    ],
    example: "Act as my sales assistant.",
    notes: "Roles focus the response. A role tells AI how to think."
  },
  {
    kicker: "Technique 2",
    title: "Give business context so the answer stops sounding generic.",
    type: "context",
    icon: "building",
    bullets: [
      "Business type",
      "Customer type",
      "Offer",
      "Price",
      "Location",
      "Goal",
      "Deadline",
      "Platform"
    ],
    example: "I run a local fitness studio. My customers are busy parents.",
    notes: "Context removes generic output. Specific context creates usable output."
  },
  {
    kicker: "Technique 3",
    title: "Ask for the output format before AI starts writing.",
    type: "format",
    icon: "layout",
    bullets: [
      "Email",
      "Text message",
      "Bullet list",
      "Checklist",
      "Table",
      "Script",
      "Social caption",
      "Three options"
    ],
    bottom: "Format saves editing time.",
    notes: "Business owners need usable output. Format makes output easier to apply."
  },
  {
    kicker: "Demo 1",
    title: "Faster customer replies reduce delay and missed interest.",
    type: "demo",
    icon: "reply",
    scenario: "A customer asks: How much does your service cost?",
    prompt: "Act as my customer support assistant. Draft a friendly reply. Explain pricing clearly. Ask one follow-up question. End with a booking CTA.",
    bottom: "AI helps you respond faster.",
    notes: "Show how the same prompt works across businesses. Use examples like fitness, cleaning, coaching, tutoring."
  },
  {
    kicker: "Demo 2",
    title: "Better follow-up creates revenue from leads you already earned.",
    type: "demo",
    icon: "follow",
    scenario: "A lead showed interest. They did not respond.",
    prompt: "Write a short follow-up message. The customer asked about availability. Keep it polite, not pushy. Offer two next steps.",
    bottom: "Follow-up creates revenue from existing leads.",
    notes: "This should connect to Session 2. Make the business value obvious."
  },
  {
    kicker: "Demo 3",
    title: "Simple marketing prompts help owners show up consistently.",
    type: "demo",
    icon: "megaphone",
    scenario: "Promote a weekend workshop.",
    prompt: "Create a Facebook post. Target local families. Promote a weekend workshop. Make it exciting but not salesy. End with a registration CTA.",
    bottom: "AI helps create consistent marketing.",
    notes: "Connect this to Session 3. Marketing consistency is hard for owners."
  },
  {
    kicker: "Demo 4",
    title: "AI can turn repeated knowledge into a simple process.",
    type: "demo",
    icon: "checklist",
    scenario: "A business repeats the same task weekly.",
    prompt: "Create a checklist for onboarding a new customer. Include steps before, during, and after service. Keep it simple and practical.",
    bottom: "AI can turn messy knowledge into process.",
    notes: "Connect this to Session 4. Operations improve when steps are documented."
  },
  {
    kicker: "Workshop",
    title: "Start with one repeated task.",
    type: "questions",
    icon: "search",
    bullets: [
      "What task repeats every week?",
      "What message do you write often?",
      "What causes missed revenue?",
      "What process lives in your head?",
      "What could AI draft or organize?"
    ],
    bottom: "Pick one simple workflow first.",
    notes: "Move attendees into self-diagnosis. They should think about their business now."
  },
  {
    kicker: "Scorecard",
    title: "The best first AI use case is frequent, low risk, and easy to review.",
    type: "checklist",
    icon: "clipboard",
    bullets: [
      "Happens often",
      "Takes time",
      "Uses text",
      "Has clear steps",
      "Needs consistency",
      "Can be reviewed",
      "Saves time or money"
    ],
    bottom: "High repetition. Low risk. Easy review.",
    notes: "Tell them to score their idea. The best first use case is not complex."
  },
  {
    kicker: "Worksheet",
    title: "My First AI Workflow",
    type: "worksheet",
    icon: "edit",
    fields: [
      "My business is:",
      "My customer is:",
      "My repeated task is:",
      "This task currently takes:",
      "The main problem is:",
      "AI can help by:",
      "Human review needed:",
      "Success means:"
    ],
    notes: "Use this as workshop activity. Also use it as lead capture. Collect it with permission."
  },
  {
    kicker: "Support",
    title: "You do not need more tools. You need better workflows.",
    type: "support",
    icon: "hands",
    bullets: [
      "Identify the right AI use cases",
      "Improve prompts for real workflows",
      "Build repeatable business processes",
      "Strengthen follow-up systems",
      "Reduce manual work",
      "Add simple automations over time"
    ],
    bottom: "You do not need more tools. You need better workflows.",
    notes: "This is the soft pitch. Do not oversell. Show implementation support."
  },
  {
    kicker: "Program",
    title: "Each session builds one practical business layer.",
    type: "roadmap",
    icon: "calendar",
    bullets: [
      "Session 1: AI basics",
      "Session 2: Leads, sales, and follow-ups",
      "Session 3: Marketing and social media",
      "Session 4: Automation and operations"
    ],
    bottom: "Each session builds one business layer.",
    notes: "This helps attendees see the full program. Session 1 creates foundation. The next sessions build revenue and operations."
  },
  {
    kicker: "Next step",
    title: "Get Your First AI Workflow Reviewed",
    type: "cta",
    icon: "qr",
    bullets: [
      "Submit your worksheet",
      "Share one repeated business task",
      "Get your first AI opportunity reviewed",
      "Leave with one clear next step"
    ],
    cta: "Submit one repeated task. I will review the workflow and send one practical AI next step.",
    formTitle: "Get Your First AI Workflow Reviewed",
    formFields: [
      "Name",
      "Business name",
      "Email",
      "Phone",
      "Business type",
      "Biggest repeated task",
      "Biggest missed opportunity",
      "Interested in workflow review?",
      "Interested in implementation help?"
    ],
    success: "Thanks. I will review your AI use case. You will get one recommended next step.",
    notes: "Keep only one CTA. Do not confuse attendees. Use QR code or worksheet submission."
  },
  {
    kicker: "Q/A",
    title: "Questions And Business Problems",
    type: "qa",
    icon: "question",
    bullets: [
      "Lead process",
      "Follow-up process",
      "Marketing workflow",
      "Admin bottlenecks",
      "First AI use case"
    ],
    bottom: "One repeated task can become your first AI workflow.",
    notes: "End with practical questions. Invite real examples from the room."
  }
];

window.deckTiming = [
  ["0-10 min", "About RamC and agenda"],
  ["10-25 min", "Why AI matters"],
  ["25-40 min", "What AI is"],
  ["40-55 min", "What AI can and cannot do"],
  ["55-70 min", "Safe AI usage"],
  ["70-90 min", "Prompting basics"],
  ["90-110 min", "Live demos"],
  ["110-115 min", "Worksheet activity"],
  ["115-120 min", "CTA and Q/A"]
];
