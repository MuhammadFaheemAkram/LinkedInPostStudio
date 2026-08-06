import { definePost } from '../../lib/factories';

// 7/8 — Testing the money math (checklist).
export default definePost({
  title: 'TESTING THE APP',
  highlightWord: 'TESTING',
  subtitle: 'In a finance app, the math has to be right — so it has to be tested.',
  layout: 'checklist',
  quote: 'Clean layers turn business logic into unit tests.',
  layoutData: {
    heading: 'What I cover with Swift Testing:',
    items: [
      'Transaction rules — add, edit, validate',
      'Dashboard & budget calculations',
      'Report math — income vs expense, by category',
      'Filtering & sorting',
      'SwiftData store — in-memory container',
    ],
  },
  linkedInCaption: `🧪 SpendWise — Testing the Math

In most apps, a bug is annoying. In a finance app, a wrong number breaks trust.

So testing wasn't optional here — and clean architecture made it straightforward.

What I cover with Swift Testing (and protocol fakes):

→ Transaction rules — add, edit, and validation.
→ Dashboard & budget calculations.
→ Report math — income vs expense, spending by category.
→ Filtering and sorting.
→ SwiftData store — using an in-memory container.

Because the money logic lives in use cases (not the UI), each rule is a small, pure function that's easy to verify.

That's the real payoff of deriving figures instead of storing them: every calculation becomes a unit test instead of a mystery.

For me, testing a finance app isn't about coverage numbers. It's about trusting that the totals are correct after every change.

Next post: what I learned building SpendWise, and what I'd do differently.

Open source — GitHub link in the comments.

How do you test business-critical logic? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftTesting #Testing #MVVM #SoftwareArchitecture #SwiftData #OpenSource #LearningInPublic`,
});
