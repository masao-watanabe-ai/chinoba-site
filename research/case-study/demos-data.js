/*
 * Interactive System Demonstrations — single source of truth.
 *
 * Videos are hosted on YouTube. To publish a demo, set `status: 'published'`
 * and fill in `youtube.en` / `youtube.ja` with the YouTube video IDs.
 * Nothing else needs to change. `poster` is a 16:9 still in ./media/.
 * Local MP4 copies are NOT used by the page.
 */
window.CS_DEMOS = [
  {
    slug: 'asterion-deal-desk',
    title: 'Asterion Deal Desk',
    description: 'A decision-trace demonstration for discount, commercial-term, and contract-exception approvals.',
    tags: ['Decision Trace', 'Commercial Decisions', 'Approval Authority'],
    poster: 'media/deal-desk-coming-soon-en.jpg',
    status: 'coming_soon',
    youtube: { en: null, ja: null }
  },
  {
    slug: 'asterion-plant-assurance-desk',
    title: 'Asterion Plant Assurance Desk',
    description: 'Connects inspection evidence, open punch items, approval authority, and commissioning conditions in one traceable decision on whether a unit may begin cold commissioning.',
    tags: ['Decision Trace', 'Operations', 'Commissioning'],
    poster: 'media/plant-assurance-coming-soon-en.jpg',
    status: 'coming_soon',
    youtube: { en: null, ja: null }
  },
  {
    slug: 'semantic-digital-twin',
    title: 'System Twin: From Field Signals to Evidence',
    description: 'Shows how machine, material, and zone nodes contribute time-stamped evidence to a System Twin, so teams see what an anomaly may affect and what people should verify next.',
    tags: ['Physical AI', 'Manufacturing', 'Knowledge Flow'],
    poster: 'media/system-twin-en.jpg',
    status: 'published',
    youtube: { en: 'Zp4dzG47dCg', ja: '6sURN1W_i-Q' }
  },
  {
    slug: 'evidence-grounded-operations-ai',
    title: 'Evidence-Grounded Operations AI',
    description: 'Answers equipment and quality inquiries from cited documents, hands high-risk cases to the designated approver, and records each inquiry and outcome in a Decision Trace.',
    tags: ['Manufacturing', 'Operations', 'Decision Trace'],
    poster: 'media/evidence-grounded-ops-en.jpg',
    status: 'coming_soon',
    youtube: { en: null, ja: null }
  },
  {
    slug: 'rapid-prototyping-system',
    title: 'Rapid Prototyping System',
    description: 'Walks through turning an operational question into a testable workflow, a working prototype, and a field review, from fictional Practice Mode to a team’s own operational data.',
    tags: ['Rapid Prototyping', 'Operations'],
    poster: 'media/rapid-prototyping-en.jpg',
    posters: { en: 'media/rapid-prototyping-en.jpg', ja: 'media/rapid-prototyping-ja.jpg' },
    status: 'published',
    youtube: { en: 'yLptbPVsqb0', ja: 'BTVtRwZOnhI' }
  },
  {
    slug: 'ransomware-containment',
    title: 'Trust Infrastructure: Ransomware Containment',
    description: 'Shows why AI risk detection alone cannot authorize action: a trust envelope, delegated authority, and human approval gate containment, and every step is kept as one Decision Trace.',
    tags: ['Trust Infrastructure', 'Security', 'Decision Trace'],
    poster: 'media/ransomware-containment-en.jpg',
    status: 'published',
    youtube: { en: 'NTBeWuOVEYs', ja: 'xQacI-FQvJk' }
  },
  {
    slug: 'retail-decision-studio',
    title: 'Retail Decision Studio',
    description: 'Compares store actions across placement, replenishment, waste prevention, and promotion within guardrails. Out-of-policy actions require Human Review; missing data stays Unknown; human-approved outcomes return to Decision Trace learning.',
    tags: ['Retail', 'Decision Trace', 'Human Decision'],
    poster: 'media/retail-decision-studio-en.jpg',
    status: 'coming_soon',
    youtube: { en: null, ja: null }
  },
  {
    slug: 'enterprise-hr-decision-support-studio',
    title: 'Enterprise HR Decision Support Studio',
    description: 'AI proposes hypotheses—not scores—for HR decisions; Unknown is never positive. HR reviews questions, Human Review gates consequential decisions, and anonymized outcomes inform learning.',
    tags: ['Enterprise HR', 'Decision Trace', 'Human Decision'],
    poster: 'media/enterprise-hr-decision-support-en.jpg',
    status: 'coming_soon',
    youtube: { en: null, ja: null }
  }
];
