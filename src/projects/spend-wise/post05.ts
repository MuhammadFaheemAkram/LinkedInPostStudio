import { definePost } from '../../lib/factories';

// 5/8 — NEW concept: a business rule expressed as a pipeline. `flow` layout
// (unused in projects 01 and 02).
export default definePost({
  title: 'HOW A BUDGET KNOWS',
  highlightWord: 'KNOWS',
  subtitle: 'A business rule is just a pipeline you can test one step at a time.',
  layout: 'flow',
  quote: 'A rule you can draw as a pipeline is a rule you can test.',
  layoutData: {
    steps: [
      { label: 'All Transactions', detail: 'the stored truth' },
      { label: 'Filter: category + month', detail: 'yyyy-MM key' },
      { label: 'Sum expenses', detail: 'exact Decimal arithmetic' },
      { label: 'Compare to limit', detail: 'spent ÷ limit' },
      { label: 'safe · warning · over', detail: 'the state the UI renders' },
    ],
  },
  linkedInCaption: `📊 SpendWise — How a Budget Knows It's Over

"You're over budget on Food this month."

Sounds like a feature. It's really a business rule — and writing it as a pipeline made it obvious and testable.

The rule, step by step:

1. Start with all transactions — the stored truth.
2. Filter to one category, in one month (stored as a simple "yyyy-MM" key).
3. Sum the expenses, using exact Decimal arithmetic.
4. Compare that sum to the budget's limit.
5. Produce a state: safe, warning, or over budget.

Every step is a pure transformation. Nothing is stored along the way, and nothing depends on the UI.

Two things I liked about modelling it this way:

→ The output is a state, not a boolean. The UI doesn't compute anything or decide what "close to the limit" means — it just renders safe, warning, or over. All the judgement lives in one place.

→ Each step is independently testable. Wrong total? Test the sum. Wrong month? Test the filter. You're never debugging "the budget screen" — you're debugging one function.

The wider lesson: when a rule feels complicated, try drawing it as a pipeline. Most business logic is a sequence of small transformations wearing a scary name.

Next post: turning all these numbers into something you can actually read.

Open source — GitHub link in the comments.

How do you keep business rules out of your UI? 👇

#iOSDevelopment #Swift #SwiftUI #SoftwareArchitecture #DomainModeling #CleanArchitecture #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
