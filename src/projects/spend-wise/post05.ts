import { definePost } from '../../lib/factories';

// 5/8 — The signature SpendWise decision: derive totals vs store them (decisionMatrix layout).
export default definePost({
  title: 'WHERE DO TOTALS LIVE?',
  highlightWord: 'TOTALS',
  subtitle: 'The single decision that shaped the whole architecture.',
  layout: 'decisionMatrix',
  quote: 'Never store a number you can compute from the truth.',
  layoutData: {
    question: 'Where should the dashboard total and budget progress be calculated?',
    options: [
      { title: 'Stored', pros: ['Fast to read'], cons: ['Goes stale', 'Two sources of truth', 'A bug on every edit'] },
      { title: 'In the View', pros: ['Simple at first'], cons: ['Logic leaks into UI', 'Impossible to test'] },
      { title: 'Use Case', pros: ['One place for the rule', 'Always in sync', 'Easy to test'], cons: ['Recomputed on change'] },
    ],
    decision: 'Derive totals in use cases from SwiftData. Transactions are the truth; every figure is computed from them.',
  },
  linkedInCaption: `🧮 SpendWise — Where Should Totals Live?

Here's a decision that shaped SpendWise more than any feature:

Where do you calculate the dashboard total and budget progress?

I weighed three options:

→ Store the totals → fast to read, but they go stale the moment a transaction changes. Now you have two sources of truth and a bug on every edit.

→ Calculate in the view → simple at first, but business logic leaks into the UI and becomes impossible to test.

→ Calculate in a use case → one place for the rule, always in sync, and trivial to unit test. The only cost is recomputing on change — which is cheap.

The decision: derive totals in use cases from SwiftData. Never store a number you can compute.

This is the single-source-of-truth principle applied to money: transactions are the truth, and every figure the user sees is derived from them.

It made the app more correct AND easier to test.

Next post: turning those numbers into insight with Swift Charts.

Open source — GitHub link in the comments.

Do you store computed values or derive them? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SwiftData #SoftwareArchitecture #CleanArchitecture #OpenSource #LearningInPublic`,
});
