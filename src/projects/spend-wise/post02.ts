import { definePost } from '../../lib/factories';

// 2/8 — Tech stack grouped by concern (real iOS choices incl. Swift Charts).
export default definePost({
  title: 'WHY THIS TECH STACK?',
  highlightWord: 'STACK',
  subtitle: 'Every technology chosen to solve a specific engineering problem.',
  layout: 'techStack',
  quote: 'A good stack gives every tool one clear responsibility.',
  layoutData: {
    categories: [
      { title: 'UI', technologies: ['SwiftUI', 'SF Symbols', 'Swift Charts'] },
      { title: 'State', technologies: ['@Observable', '@MainActor'] },
      { title: 'Architecture', technologies: ['MVVM', 'Repository', 'Use Cases'] },
      { title: 'Data', technologies: ['SwiftData', '@AppStorage'] },
      { title: 'Concurrency', technologies: ['async/await', 'BGTaskScheduler'] },
      { title: 'Testing', technologies: ['Swift Testing', 'Protocol Fakes'] },
    ],
  },
  linkedInCaption: `🛠️ SpendWise — Why This Tech Stack?

A finance app lives or dies on correctness. So I chose tools that make the logic clear and testable — not just trendy.

The stack, by responsibility:

→ SwiftUI → declarative, state-driven UI.
→ @Observable → predictable screen state.
→ Swift Charts → native income/expense and category visuals.
→ SwiftData → the single local source of truth.
→ MVVM + Use Cases → business rules in one place.
→ Repository Pattern → data access behind protocols.
→ async/await → clean asynchronous work.
→ @AppStorage → currency and appearance settings.
→ Protocol DI → explicit, testable dependencies.
→ Swift Testing → verify every money calculation.

The theme: every figure the user sees is derived from stored transactions — nothing important is duplicated. That decision shaped the whole architecture.

Next post: how the project is organized so a growing finance app stays navigable.

Open source — GitHub link in the comments.

Which layer would you want me to go deeper on? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftData #SwiftCharts #MVVM #SoftwareArchitecture #OpenSource #MobileDevelopment #LearningInPublic`,
});
