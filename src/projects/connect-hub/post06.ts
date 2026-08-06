import { definePost } from '../../lib/factories';

// 6/10 — Offline-first: remote + local coordinated by the repository (+ actor chat).
export default definePost({
  title: 'OFFLINE FIRST',
  highlightWord: 'OFFLINE',
  subtitle: 'Local storage and the network work together, not against each other.',
  layout: 'architecture',
  quote: 'The best network request is the one your user never has to wait for.',
  layoutData: {
    left: {
      title: 'Remote',
      items: ['Fake Service', 'DTOs', 'Simulated Delay', 'Error Handling'],
    },
    right: {
      title: 'Local',
      items: ['SwiftData', '@AppStorage', 'Cached Feed', 'Session'],
    },
    center:
      'The Repository coordinates both and decides what the UI sees. Chat messages are held by a thread-safe actor.',
  },
  linkedInCaption: `📦 ConnectHub — Building Offline-First

A lesson from ConnectHub: users shouldn't have to think about where their data comes from.

So instead of choosing between local storage and a remote source, I made both work together.

How responsibilities split:

→ Fake services provide fresh data and simulate the network.
→ SwiftData stores what should stay available offline.
→ @AppStorage persists lightweight preferences and the session.
→ The Repository coordinates both and decides what the UI receives.

And chat gets special treatment: messages are held by a thread-safe actor (MessageStore), so concurrent sends and the simulated reply stay consistent without hand-written locks.

Why it matters:

→ The UI doesn't care where data comes from.
→ Cached content stays available with no network.
→ Business logic lives in the repository, not scattered across the app.
→ Swapping fakes for a real backend would take minimal changes.

Separating responsibilities this way keeps the project maintainable and close to how production iOS apps are structured.

Next post: how @Observable keeps the UI reactive with a single source of truth.

Open source — GitHub link in the comments.

How do you handle offline in your apps? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftData #Actors #MVVM #OfflineFirst #SoftwareArchitecture #OpenSource #LearningInPublic`,
});
