import { definePost } from '../../lib/factories';

// 8/8 — Lessons learned. Closes the SpendWise series.
export default definePost({
  title: 'LESSONS LEARNED',
  highlightWord: 'LEARNED',
  subtitle: 'The hardest part of a finance app is never the UI.',
  layout: 'reflection',
  quote: 'UI is learnable; business logic is where engineering judgment shows.',
  layoutData: {
    statement: 'SpendWise taught me that the hard part of an app is usually the business logic, not the screens.',
    points: [
      'Model the money domain carefully',
      'Derive figures, never duplicate them',
      'Keep the rules in use cases',
      'Charts turn data into decisions',
      'Clean layers make math testable',
    ],
  },
  linkedInCaption: `💡 SpendWise — Lessons Learned

SpendWise started as a finance tracker. It ended up being my best lesson in business logic.

The biggest takeaways:

→ Model the money domain carefully — a Decimal-based Money type beats floating-point every time.
→ Derive figures, never duplicate them — transactions are the single source of truth.
→ Keep the rules in use cases — the UI should never do math.
→ Charts turn data into decisions — Swift Charts made reports feel native.
→ Clean layers make the math testable — and in finance, that's everything.

The hardest part of this app was never the screens. It was the domain: budgets, categories, recurring payments, derived summaries — the rules that make the numbers correct.

That's exactly why I built it. UI is learnable; business logic is where real engineering judgment shows.

This wraps Project 03 in my "Modern iOS in Practice" series. Next, a new app and a new challenge.

Thanks to everyone following along. 🙏

What should Project 04 be? I'm listening. 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SwiftData #SwiftCharts #SoftwareArchitecture #OpenSource #LearningInPublic #MobileDevelopment`,
});
