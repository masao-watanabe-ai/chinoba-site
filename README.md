# Chinoba

Intelligence as Relationship

---

## Research Areas

- Decision Trace Model
- Runtime Society
- AI Coordination
- Trust Infrastructure
- Multi-Agent Systems
- Governance
- Knowledge Flow

---

## Research Prototypes

### Runtime Chat (Experimental)

Not a chatbot.
A structured decision environment.

Runtime Chat is an experimental prototype for exploring:

- Decision Trace
- Runtime-based reasoning
- Weak Signal handling
- Boundary evaluation
- Human Gate escalation

This prototype explores how AI systems may evolve from conversational interfaces into structured runtime environments for decision-making under uncertainty.

- Live Demo: https://masao-watanabe-ai.github.io/runtime-chat-experimental/
- GitHub: https://github.com/masao-watanabe-ai/runtime-chat-experimental

---

## Case Study video delivery

The Case Study page uses YouTube as its video delivery platform.

### Published demonstrations

Only the following bilingual demonstration pairs are currently published and playable from the Case Study page:

- System Twin: From Field Signals to Evidence
- Trust Infrastructure: Ransomware Containment

Each published card supports English and Japanese selection and creates a privacy-enhanced YouTube embed only after the visitor selects `Watch demo`.

### Coming soon demonstrations

The following demonstrations are displayed with a poster image and description only. They do not contain a video link, YouTube iframe, local MP4 reference, or playable control until their bilingual YouTube versions are available.

- Asterion Deal Desk
- Asterion Plant Assurance Desk
- Evidence-Grounded Operations AI
- Rapid Prototyping System

### Verification status

- Verified with jsdom: six cards render; no YouTube iframe is created on initial page load; only the two published cards can create an embed.
- Verified in headless Chromium (Playwright, desktop 1280px and mobile 390px viewports): six cards render in two columns on desktop and one column on mobile without horizontal overflow; zero iframes and no YouTube or MP4 requests on initial load; `Watch demo` is enabled only on the two published cards; English / Japanese switching changes the embed to the correct video ID and updates the `Watch on YouTube` link; no `autoplay` parameter is present; the four coming-soon cards contain no links, iframes, buttons, or MP4 references.
- Not yet verified: actual YouTube playback (the sandbox could not render the embedded player), rendering on physical mobile devices and other browsers (Safari, Firefox).
- YouTube visibility and embedding permissions must be confirmed for each newly added video pair.

## Links

- Blog
- GitHub
- Books
- LinkedIn
