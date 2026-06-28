# Chinoba Research Page — Editorial Template

The canonical structure for every Chinoba research page, extracted from
**Governance & Boundary Systems** (`/research/governance-boundary-systems/`),
the reference implementation. Use it for Decision Trace Model, Runtime Society,
Trust Infrastructure, Multi-Agent Systems, AI Coordination, Intelligence Field,
and every future line of inquiry.

**Principle: replace the content, never the architecture.** Two pages should
feel like two chapters of one book — same layout, typography, rhythm, and
component vocabulary; different subject.

Files:
- `index.html` — a working skeleton with `{{TOKENS}}` and inline rule-comments. Copy it.
- `TEMPLATE.md` — this document: the rules behind the skeleton.

---

## 1. How to make a new page

1. Copy `research/_template/` → `research/<your-slug>/`.
2. Create `research/<your-slug>/assets/` and drop diagrams in as `01.png`, `02.png`, …
3. Replace every `{{TOKEN}}` and every "EDITORIAL CONTENT" block.
4. Keep all **CORE** sections. Keep the **THEMATIC** sections your subject needs,
   delete the rest.
5. **Renumber** `section-label`s `01 … NN` in document order after deleting.
6. Run the checklist in §8.

Everything visual is inherited from `/assets/research.css` plus the page-specific
`<style>` block (identical on every page — do not edit it). You are only writing copy.

---

## 2. Section order (the spine)

`[CORE]` = on every page. `[THEMATIC]` = include 1–3 as the subject demands.

| # | Section | Type | Component |
|---|---------|------|-----------|
| — | Top bar | CORE | breadcrumb + `meta-id` |
| — | Hero | CORE | `hero-sub` stanza + `hero-desc` |
| — | **Explore This Theme** | CORE | unnumbered; `essays` → two `essay` cards (YouTube + Books) with `theme-links` |
| 01 | **Overview** | CORE | section-head → **face figure** → two-col |
| 02 | **The Tension** (the problem the field exists to resolve) | THEMATIC | two-col + `is-diagram` |
| 03 | **The Distinction** (a central A-vs-B reframing) | THEMATIC | two-col + `is-diagram` |
| 04 | **Why It Matters** | CORE | two-col |
| 05 | **The Architecture** (the central named construct) | THEMATIC | two-col + composition **tree** |
| 06 | **Core Structure** | CORE | `concept-grid` + **layer diagram** (`field-runtime`) |
| 07 | **The Typology** (kinds of X) | THEMATIC | `concept-grid` |
| 08 | **Related Essays** | CORE | `essays` (available + coming-soon) |
| 09 | **Related Books** | CORE | `books-list` (this inquiry + neighbors) |
| 10 | **Related OSS** | CORE | `oss-block` + `is-diagram` stack |
| 11 | **Diagrams** (Architecture Archive) | CORE | `diagrams` card grid |
| — | **Closing** | CORE | ecosystem figure → positioning ladder → blockquote |
| + | **Related Research** | CORE | `related-research` grid |
| — | Footer + Lightbox | CORE | verbatim |

The four THEMATIC sections are the *only* place a page's shape varies. Each is a
named role, not a fixed title — see §7 for how each research line fills them.

**Explore This Theme** is fixed: an unnumbered section between the hero and
Overview that lets first-time visitors enter the topic through accessible media
before the research article. Two `essay` cards inside `.essays` — **📺 Watch on
YouTube** (English / Japanese) and **📚 Related Books** (English Edition /
Japanese Edition) — each using `theme-links` / `theme-lang`, with CTA link text
ending in " →". It is a research guide, not a promotional banner: same calm,
minimal aesthetic as the rest of the page.

---

## 3. Figure placement rules

One figure per major section, **maximum**. Quality over quantity — a page with
six precise figures beats one with fifteen. Curate; do not decorate.

| Slot | Class | Max width | Placement |
|------|-------|-----------|-----------|
| Overview "face of page" | `figure figure-wide figure-main` | 920px | after section-head, before two-col |
| Embedded section figure | `figure figure-wide figure-standard` | 760px | after the lede, **or** after the section's main block |
| Closing ecosystem card | `figure figure-standard` (+ `style="margin-bottom:48px"`) | 760px | first child of `.closing`, before the ladder |
| Archive preview | `a.figure-frame` inside `.diagram-card` (no `<figure>`, no caption) | grid cell | Diagrams section only |

Every zoomable image follows this exact shape:

```html
<figure class="figure figure-wide figure-standard">
  <a class="figure-frame" href="assets/NN.png"
     data-lightbox aria-label="Open <name> diagram">
    <img src="assets/NN.png" alt="<factual description>" loading="lazy">
  </a>
  <figcaption class="figure-caption">One declarative line.</figcaption>
</figure>
```

Hard rules:
- **Lightbox is mandatory** — keep the `#lightbox` div + `<script>` at the end of
  `<body>` verbatim. Every image link carries `data-lightbox`.
- **Always** `loading="lazy"`, relative paths `assets/NN.png`, full-resolution
  originals (no thumbnails committed).
- **`alt`** = factual description of what the diagram shows. **`aria-label`** on
  the link = "Open … diagram". **`figcaption`** = one declarative sentence
  (CSS upper-cases it; write it in normal sentence case ending with a period).
- **Archive previews only diagrams not shown inline.** Never embed the same image
  twice. Concepts you have not drawn stay as `.diagram-frame` "Forthcoming".
  Keep the card count even (2-column grid): real-image cards first, then
  "Forthcoming" cards.
- **Curation policy** (when you have a folder of N candidate diagrams): for each,
  name the single concept it explains and the section it supports; insert only if
  it clearly improves comprehension; never repeat an idea or a visual structure.

---

## 4. Typography & rhythm

The page reads as a descending argument. Hold this cadence:

- **Hero.** `hero-sub` = a short stanza, **one clause per `<span>`**, opening on
  the central *tension* (not a dictionary definition). `hero-desc` = a single
  flowing paragraph stating the thesis.
- **Section head.** `section-label` "NN / Title" → `h2` → `section-lede`
  (one paragraph, 3–5 sentences, states the section's claim up front).
- **Two-col.** Left column carries **structure** — short noun-phrase `<ul>`s and
  an `is-diagram` chain. Right column carries **interpretation** and closes on a
  `<code class="quote">` aphorism (3–4 short lines). Never two `<ul>`s facing each
  other; pair a list with prose.
- **`.quote`** = monospace aphorism, 3–4 lines, the distilled claim.
- **`.quote.is-diagram`** = a *drawn* chain (renders with `white-space:pre-line`):
  - descending chain — `A` / `↓ B` / `↓ C`
  - composition tree — `Construct` / `├── Part` / `└── Part`
  - contrast — two short blocks separated by a blank line.
- **`concept-grid.cols-4`** = N cards (`i, ii, iii…`), each `h3` + 1–2 sentences.
  Reference count is 8 for Core Structure; 4–8 reads well.
- **`field-runtime`** = the layer diagram: `L1…Ln`, each with `layer-name`,
  one-sentence `layer-note`, and a monospace `layer-tag`, joined by `↓`
  `field-arrow`s. 8–13 layers. This is the page's spine — align its stages with
  the Decision Trace Model (Signal → Context → … → Trace → Audit → Feedback).
- **Closing.** `positioning` ladder, then `blockquote` of declarative `<span>`
  lines (a blank `<span>&nbsp;</span>` is a stanza break), then
  `closing-mark` "Chinoba.org".

---

## 5. Editorial voice

- Architectural, conceptual, research-oriented. **Minimal marketing language.**
  Elegant, precise, long-form but readable.
- State the claim, then support it. Prefer the declarative ("Governance is
  architecture") over the promotional ("a powerful new framework").
- **Reuse the Chinoba lexicon** so pages cross-reference cleanly: Trace, Signal,
  Boundary, Runtime, Escalation, Decision, Authority, Permission, Audit,
  Coordination, Trust. Introduce a page's own terms, but anchor them in these.
- Do not pad. Each section earns its place; if two say the same thing, cut one.

---

## 6. Positioning every page inside one ecosystem

A page must read as **one layer of one architecture**, never a standalone topic.
Three mechanisms enforce this — keep all three consistent:

1. **Closing positioning ladder** — the master chain, with *this* page's node
   marked `class="here"`:
   ```
   Decision Trace → Governance → Trust → Coordination → Runtime Society
   ```
2. **Related Books** — lead with the "This Inquiry" book, then "Neighboring
   Research — X" entries, each with a one-paragraph note naming *how* this line
   relates to that one.
3. **Related Research grid** — 5–7 neighboring inquiries (never self), with a lede
   that frames the set as one continuous inquiry.

---

## 7. Filling the THEMATIC slots per research line

The four thematic roles — **Tension**, **Distinction**, **Architecture**,
**Typology** — are how each page differs. Suggested fills (adapt freely; drop any
that do not apply):

| Research line | Tension | Distinction | Architecture | Typology |
|---|---|---|---|---|
| Governance & Boundary Systems *(reference)* | The Governance Gap | Capability vs Governability | Decision Infrastructure | Boundary Types |
| Decision Trace Model | Prediction is not decision | Output vs Decision | The Decision Trace | Trace layers |
| Runtime Society | Static rules vs live conditions | Design-time vs Runtime | The Runtime | Kinds of runtime adjustment |
| Trust Infrastructure | Trust does not scale by default | Reputation vs Verification | The Trust Layer | Trust signals |
| Multi-Agent Systems | More agents ≠ more intelligence | Multiplication vs Coordination | The Coordination Runtime | Agent roles |
| AI Coordination | Local optima vs global alignment | Competition vs Coordination | The Coordination Protocol | Coordination patterns |
| Intelligence Field | Intelligence as object vs relationship | Capability vs Relationship | The Field | Field relations |

Every page keeps the same **Core Structure** treatment: a concept grid of its
structural components plus a layer diagram that is, in effect, a Decision Trace
Model specialized to that subject.

---

## 8. Pre-publish checklist

- [ ] `<title>` ends `— Chinoba`; `meta description` is one thesis sentence.
- [ ] Page-specific `<style>` block left **unchanged**.
- [ ] **Explore This Theme** present after the hero (YouTube EN/JA + Books EN/JA; links end " →").
- [ ] `section-label`s renumber `01 … NN` with no gaps after deletions.
- [ ] Exactly one face figure (`figure-main`); embedded figures are `figure-standard`.
- [ ] Every image: `data-lightbox`, `loading="lazy"`, `alt`, link `aria-label`.
- [ ] Archive shows **only** diagrams not embedded inline; even card count.
- [ ] Lightbox div + script present at end of `<body>`.
- [ ] Closing has ecosystem figure + positioning ladder (with `.here`) + blockquote.
- [ ] Related Books leads with "This Inquiry"; neighbors carry connective notes.
- [ ] Related Research lists 5–7 inquiries and does **not** link to itself.
- [ ] Tag balance: `grep -c '<section' = grep -c '</section>'`; `<figure>`/`</figure>` match.
- [ ] Referenced `assets/NN.png` all exist; page serves locally
      (`python3 -m http.server`, check HTTP 200 for page + images).
```
