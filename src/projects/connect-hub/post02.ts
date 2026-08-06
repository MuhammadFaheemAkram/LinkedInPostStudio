import { definePost } from '../../lib/factories';

// 2/10 — Tech stack grouped by concern (real iOS choices from the codebase).
export default definePost({
  title: 'WHY THIS TECH STACK?',
  highlightWord: 'STACK',
  subtitle: 'Every technology chosen to solve a specific engineering problem.',
  layout: 'techStack',
  quote: 'A good stack is a set of responsibilities, not a pile of libraries.',
  layoutData: {
    categories: [
      { title: 'UI', technologies: ['SwiftUI', 'SF Symbols', 'NavigationStack'] },
      { title: 'State', technologies: ['@Observable', '@MainActor'] },
      { title: 'Architecture', technologies: ['MVVM', 'Repository', 'Use Cases'] },
      { title: 'Concurrency', technologies: ['async/await', 'Actors', 'Combine'] },
      { title: 'Data', technologies: ['SwiftData', '@AppStorage', 'Fake Services'] },
      { title: 'Testing', technologies: ['Swift Testing', 'Protocol Fakes'] },
    ],
  },
  linkedInCaption: `🛠️ ConnectHub — Why This Tech Stack?

When building ConnectHub, I didn't pick technologies because they're trendy.

I picked them because each one solves a specific engineering problem.

The thinking behind the stack:

→ SwiftUI → declarative UI with clear, state-driven rendering.
→ @Observable → predictable, lifecycle-aware screen state.
→ async/await → asynchronous work without callback chains.
→ Actors → thread-safe state (the chat message store is an actor).
→ Repository Pattern → separate business logic from data sources.
→ SwiftData → a single local source of truth for cached data.
→ @AppStorage → lightweight settings and the demo session.
→ Protocol DI → explicit dependencies and easy testing.
→ Fake services → production-style architecture with no real backend.
→ Swift Testing → verify logic and behavior with confidence.

The lesson: architecture isn't about using more libraries. It's about giving each layer one clear responsibility so the app stays easy to understand, maintain, and test.

Next post: how I organized the project so a growing codebase stays manageable.

Open source — GitHub link in the comments.

Which layer would you want me to go deeper on? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SoftwareArchitecture #SwiftData #Actors #OpenSource #MobileDevelopment #LearningInPublic`,
});
