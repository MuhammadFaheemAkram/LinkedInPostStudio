import { definePost } from '../../lib/factories';

// 2/8 — NEW concept: representing money. Uses the new `pitfall` layout.
export default definePost({
  title: 'MONEY IS NOT A DOUBLE',
  highlightWord: 'DOUBLE',
  subtitle: 'The bug that never crashes — it just quietly makes your totals wrong.',
  layout: 'pitfall',
  quote: 'Some bugs crash. The expensive ones just return a slightly wrong number.',
  layoutData: {
    trap: {
      title: 'amount: Double',
      body: 'The obvious choice for a currency amount — and the one almost every finance app regrets.',
    },
    consequence: {
      title: '0.1 + 0.2 ≠ 0.3',
      body: 'Binary floating point cannot represent most decimal fractions. The error is tiny, then it compounds across every sum.',
    },
    fix: {
      title: 'Decimal, behind Money',
      body: 'Exact base-10 arithmetic wrapped in one value type that always carries its currency code.',
    },
    note: 'One deliberate exception: Money exposes a lossy doubleValue — used only to plot charts, never for arithmetic.',
  },
  linkedInCaption: `💸 SpendWise — Money Is Not a Double

Here's a bug that never shows up in a crash report.

You build a finance app. You store amounts as Double, because that's what you reach for. Everything looks fine.

Then someone adds up a few hundred transactions and the total is off by a cent. Then another cent.

The cause is not your code. It's the type.

Binary floating point can't exactly represent most decimal fractions. The classic demo:

0.1 + 0.2 == 0.30000000000000004

For a progress bar, irrelevant. For someone's money, unacceptable — and the error compounds with every sum.

The fix in SpendWise: amounts are Decimal, never Double. Decimal does exact base-10 arithmetic, which is precisely what currency needs.

But I went one step further and wrapped it in a Money value type that carries both the amount and its currency code. That does two things:

→ It makes a bare, currency-less number impossible to pass around.
→ It gives arithmetic and formatting one home instead of scattering them across the app.

There is exactly one deliberate exception. Money exposes a lossy doubleValue — used only to plot points in Swift Charts, never for arithmetic. It's documented right in the type, because an undocumented exception is how the original bug comes back.

The lesson: choosing a type IS a design decision. The compiler won't warn you here. The domain model has to.

Open source — GitHub link in the comments.

What's a "silent" bug that cost you the most time? 👇

#iOSDevelopment #Swift #SwiftUI #DomainModeling #SoftwareEngineering #CleanCode #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
