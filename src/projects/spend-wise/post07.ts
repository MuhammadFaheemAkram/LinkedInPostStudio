import { definePost } from '../../lib/factories';

// 7/8 — NEW concept: recurring / scheduled work. `timeline` layout (unused in
// projects 01 and 02). Grounded in the real RecurringTransaction design:
// occurrences are previewed, never auto-posted.
export default definePost({
  title: 'MONEY THAT REPEATS',
  highlightWord: 'REPEATS',
  subtitle: 'A recurring transaction is a template — not a transaction.',
  layout: 'timeline',
  quote: 'A prediction should never be allowed to masquerade as a fact.',
  layoutData: {
    events: [
      {
        time: 'Template',
        title: 'Rent · $1,200 · monthly',
        body: 'Stored once. It describes intent, not something that happened.',
      },
      {
        time: 'Preview',
        title: 'Upcoming occurrences, computed',
        body: 'Next dates are derived from startDate + frequency — never written to the store.',
      },
      {
        time: 'Reminder',
        title: 'A local notification, not a write',
        body: 'UNUserNotificationCenter nudges you; you decide whether it really happened.',
      },
      {
        time: 'Actual',
        title: 'You confirm — now it is a Transaction',
        body: 'Only confirmed money reaches the store, so totals stay factual.',
      },
    ],
  },
  linkedInCaption: `🔁 SpendWise — Money That Repeats

Rent, salary, subscriptions. Most of your money is predictable, so a finance app has to handle recurring transactions.

The obvious implementation: on the 1st of each month, automatically insert a transaction.

I deliberately didn't do that — and the reason turned out to be the most interesting design decision in the app.

The problem: if the app auto-posts, it's asserting something happened that it cannot actually know. Did the rent clear? Did the subscription get cancelled? Was the salary the same this month?

Auto-posting means your "actual spending" quietly fills up with predictions. And once a prediction is stored next to a fact, nothing downstream can tell them apart. Your totals, budgets, and reports are all computed from that data.

So in SpendWise, a recurring transaction is a template, not a transaction:

→ The template is stored once — amount, category, frequency, start date.
→ Upcoming occurrences are computed from startDate + frequency, purely for preview. Nothing is written.
→ A local notification reminds you when one is due.
→ Only when you confirm does it become a real Transaction in the store.

The principle: the store holds facts, not forecasts. Predictions get computed and shown, never persisted alongside reality.

It's the same instinct as deriving totals instead of storing them — keep the stored model small and factual, and compute everything else.

Next post wraps the series.

Open source — GitHub link in the comments.

Auto-post or confirm-first — which would you expect as a user? 👇

#iOSDevelopment #Swift #SwiftUI #SwiftData #DomainModeling #SoftwareArchitecture #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
