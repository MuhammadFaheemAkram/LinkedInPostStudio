import { definePost } from '../../lib/factories';

// 4/10 — Data flow overview: layers + node pipeline + rules.
export default definePost({
  title: 'DATA FLOW',
  highlightWord: 'FLOW',
  subtitle: 'Every user action follows one predictable path.',
  layout: 'projectOverview',
  quote: 'Good architecture makes every layer responsible for one thing.',
  layoutData: {
    folderTree: [
      {
        name: 'Feature',
        highlighted: true,
        children: [{ name: 'Feed' }, { name: 'Chat' }, { name: 'Profile' }],
      },
    ],
    architectureNodes: ['SwiftUI View', '@Observable ViewModel', 'Use Case', 'Repository', 'SwiftData / Fake Service'],
    techSummary: ['SwiftUI', '@Observable', 'MVVM', 'Repository', 'Actors', 'SwiftData'],
    notes: [
      'Views render state, forward intents',
      'ViewModels coordinate, never own data',
      'Repositories choose local or remote',
    ],
  },
  linkedInCaption: `🔄 ConnectHub — Understanding the Data Flow

One of the biggest mindset shifts in modern iOS is treating the UI as a consumer of state — not a place where business logic lives.

In ConnectHub, every interaction follows the same path:

SwiftUI View → @Observable ViewModel → Use Case → Repository → SwiftData / Fake Service

Each layer has a single responsibility:

→ The view renders state and forwards user intent.
→ The view model manages screen state (@Observable, @MainActor).
→ Use cases hold the business rule for one action.
→ The repository coordinates local and remote data.
→ SwiftData and the fake services provide the actual data.

Why this predictable flow helps:

→ Easier to debug — every action follows the same path.
→ Simpler to test — each layer stands alone.
→ Better scalability — responsibilities don't overlap.
→ The UI stays focused on rendering, not deciding.

Keeping this consistent made it far easier to add auth, bookmarks, chat, and notifications without constantly refactoring.

Next post: why I used fake services, and how they let me build production-style architecture with no backend.

Open source — GitHub link in the comments.

How do you keep data flow predictable in your apps? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SwiftData #RepositoryPattern #SoftwareArchitecture #OpenSource #MobileDevelopment #LearningInPublic`,
});
