import { definePost } from '../../lib/factories';

// 1/8 — Project hero. Mirrors the Android SpendWise opener, iOS stack.
export default definePost({
  title: 'SPEND WISE',
  highlightWord: 'WISE',
  subtitle: 'A production-inspired finance tracker built to practice business logic and clean iOS architecture.',
  layout: 'projectHero',
  quote: "Great software isn't defined by its screens — it's defined by the problems it solves.",
  layoutData: {
    description:
      'SpendWise is an offline-first personal finance tracker — transactions, budgets, accounts, reports, and recurring payments — built to practice real business logic on a clean SwiftUI + SwiftData architecture.',
    techStack: ['SwiftUI', '@Observable', 'SwiftData', 'Swift Charts', 'async/await', 'Swift Testing'],
    features: ['Finance Dashboard', 'Budget Tracking', 'Reports & Charts', 'Recurring Payments', 'Offline Storage', 'Unit Tests'],
  },
  linkedInCaption: `🚀 Project 03 — SpendWise (iOS)

For my third open-source iOS project, I wanted to move past architecture-for-its-own-sake and focus on something every production app eventually faces: business logic.

SpendWise is a personal finance tracker built to explore how complex domain rules stay clean, testable, and maintainable.

What it does:

→ Dashboard with financial summaries
→ Income & expense tracking
→ Budgets with progress and over-budget warnings
→ Reports & analytics with Swift Charts
→ Accounts and categories
→ Recurring transactions
→ Fully offline (SwiftData)

While building it, I practiced:

→ SwiftUI + @Observable
→ MVVM + Use Cases
→ SwiftData as the single source of truth
→ Swift Charts for reports
→ Derived figures (compute, don't duplicate)
→ Protocol-based Dependency Injection
→ async/await concurrency
→ Swift Testing

Over the next posts, I'll share the engineering decisions — modeling money, deriving totals, visualizing data, and testing the math.

Rather than iOS basics, this series is about solving real product problems with clean architecture.

Open source — GitHub link in the comments.

What do you think is the hardest part of building a finance app? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SwiftData #SwiftCharts #SoftwareArchitecture #OpenSource #MobileDevelopment #LearningInPublic`,
});
