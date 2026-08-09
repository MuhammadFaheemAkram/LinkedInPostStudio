import { definePost } from '../../lib/factories';

// 8/8 — Closer. `quoteHero` (unused in projects 01 and 02) so the series does
// not end on the same reflection layout the earlier projects used.
export default definePost({
  title: 'CORRECTNESS IS A FEATURE',
  highlightWord: 'CORRECTNESS',
  subtitle: 'What a finance app teaches that a feed app never will.',
  layout: 'quoteHero',
  quote: 'Users forgive a plain interface. They do not forgive a wrong number.',
  layoutData: {
    heroStatement: 'A wrong number never crashes. It just quietly destroys trust.',
    supportText:
      'Every decision in SpendWise came back to one question: can this figure ever disagree with the transactions it came from?',
    points: ['Exact types', 'One source of truth', 'Rules you can test'],
  },
  linkedInCaption: `✅ SpendWise — Correctness Is a Feature

Eight posts ago I said the screens were the easy part. Here's what I actually took away.

In most apps, a bug is visible. Something crashes, a screen is blank, a button does nothing. You notice, you fix it.

In a finance app, the worst bugs are invisible. The app runs perfectly and shows a number that is slightly wrong. Nobody gets an alert. The user just slowly stops trusting it — and there's no recovering from that.

So every meaningful decision in SpendWise traced back to one question:

Can this figure ever disagree with the transactions it came from?

That question produced the whole architecture:

→ Money is Decimal, never Double — so arithmetic is exact rather than approximately right.
→ Totals, balances and budget progress are derived, never stored — so they cannot go stale.
→ Business rules live in use cases as pure pipelines — so each one can actually be tested.
→ Recurring items are templates, not transactions — so forecasts never contaminate facts.

None of that is visible in a screenshot. All of it is the difference between an app that looks finished and one that is.

That's the real lesson from Project 03: correctness isn't a quality you add at the end with tests. It's a set of design decisions you make early, in the domain model, before a single screen exists.

Users forgive a plain interface. They don't forgive a wrong number.

That wraps Project 03 of "Modern iOS in Practice". Project 04 brings a new app and a new problem to solve.

Thanks to everyone following along. 🙏

Open source — GitHub link in the comments.

What's a domain where "quietly wrong" would be unacceptable in your work? 👇

#iOSDevelopment #Swift #SwiftUI #SoftwareArchitecture #DomainModeling #CleanArchitecture #SwiftData #OpenSource #iOSDeveloper #LearningInPublic`,
});
