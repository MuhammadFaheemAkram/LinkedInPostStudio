import { definePost } from '../../lib/factories';

// 4/8 — The signature SpendWise decision. decisionMatrix layout (unused in
// projects 01 and 02, so the series stays visually fresh too).
export default definePost({
  title: 'WHERE DO TOTALS LIVE?',
  highlightWord: 'TOTALS',
  subtitle: 'One decision that removed a whole category of bugs.',
  layout: 'decisionMatrix',
  quote: 'Never store a number you can compute from the truth.',
  layoutData: {
    question: 'Where should the dashboard total and budget progress be calculated?',
    options: [
      {
        title: 'Stored',
        pros: ['Fast to read'],
        cons: ['Goes stale', 'Two sources of truth', 'Every edit path must remember'],
      },
      { title: 'In the View', pros: ['Quickest to write'], cons: ['Logic leaks into UI', 'Cannot be unit tested'] },
      { title: 'Use Case', pros: ['One home for the rule', 'Always in sync', 'Pure and testable'], cons: ['Recomputed on change'] },
    ],
    decision: 'Derive in use cases from SwiftData. Transactions are the truth; every figure is computed from them.',
  },
  linkedInCaption: `🧮 SpendWise — Where Should Totals Live?

This is the decision that shaped SpendWise more than any feature.

Where do you calculate the dashboard balance, the budget progress, the monthly report?

Three honest options:

→ Store the totals. Fast to read. But the moment a transaction is edited or deleted, the stored total is wrong. Now you have two sources of truth, and every single edit path has to remember to update it. Miss one, and the number is wrong forever.

→ Calculate in the view. Quickest to write. But business logic ends up inside SwiftUI, where it can't be unit tested and gets duplicated the moment a second screen needs the same figure.

→ Calculate in a use case. One home for the rule. Always in sync, because it reads the transactions every time. Pure input → output, so it's trivial to test.

I went with use cases. The cost is recomputing on change — which, for a personal finance app's data volumes, is nothing.

The payoff is that an entire class of bug simply cannot happen. There is no such thing as a stale total, because there is no stored total.

This is the single-source-of-truth principle applied to arithmetic: transactions are the truth, and everything the user sees is derived from them.

It also made the app dramatically easier to test — which is the next post, in a way, because a derived figure is just a function.

Next: how a budget actually knows it's over.

Open source — GitHub link in the comments.

Do you store computed values or derive them? 👇

#iOSDevelopment #Swift #SwiftData #SoftwareArchitecture #CleanArchitecture #DomainModeling #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
