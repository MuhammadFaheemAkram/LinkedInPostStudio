import { definePost } from '../../lib/factories';

// 4/8 — Data flow overview: layers + pipeline + the "derive, don't store" rule.
export default definePost({
  title: 'DATA FLOW',
  highlightWord: 'FLOW',
  subtitle: 'In a finance app, every number has to be predictable.',
  layout: 'projectOverview',
  quote: 'The safest number is the one you never store twice.',
  layoutData: {
    folderTree: [
      {
        name: 'Feature',
        highlighted: true,
        children: [{ name: 'Dashboard' }, { name: 'Transactions' }, { name: 'Reports' }],
      },
    ],
    architectureNodes: ['SwiftUI View', '@Observable ViewModel', 'Use Case', 'Repository', 'SwiftData'],
    techSummary: ['SwiftUI', '@Observable', 'MVVM', 'Use Cases', 'SwiftData', 'Swift Charts'],
    notes: [
      'Views render state, forward intents',
      'Use cases hold the money rules',
      'Totals are derived, never stored',
    ],
  },
  linkedInCaption: `🔄 SpendWise — Understanding the Data Flow

In a finance app, one wrong number breaks trust instantly. So I made the flow of data completely predictable.

Every interaction follows the same path:

SwiftUI View → @Observable ViewModel → Use Case → Repository → SwiftData

Each layer owns one job:

→ The view renders state and forwards user intent.
→ The view model manages screen state (@Observable, @MainActor).
→ Use cases hold the business rules — the money math.
→ The repository coordinates data access.
→ SwiftData stores the transactions — the single source of truth.

The key decision: the dashboard total, spending-by-category, and budget progress are never stored. They're derived from transactions by use cases, every time.

Why:

→ The numbers can never drift out of sync.
→ Editing a transaction updates everything automatically.
→ Each calculation is a small, testable unit.

Next post: where those totals should actually be calculated — and why "store the total" is a trap.

Open source — GitHub link in the comments.

How do you keep derived data in sync? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SwiftData #SoftwareArchitecture #OpenSource #MobileDevelopment #LearningInPublic`,
});
