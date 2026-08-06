import { definePost } from '../../lib/factories';

// 1/10 — Project hero. Mirrors the Android ConnectHub opener, iOS stack.
export default definePost({
  title: 'CONNECT HUB',
  highlightWord: 'HUB',
  subtitle: 'A production-inspired SwiftUI social app built to explore scalable architecture.',
  layout: 'projectHero',
  quote: 'Architecture is what lets features grow without growing complexity.',
  layoutData: {
    description:
      'ConnectHub is an open-source iOS app that simulates a modern social platform — auth, feed, chat, notifications — while demonstrating scalable SwiftUI architecture, offline-first data, and production-inspired engineering.',
    techStack: ['SwiftUI', '@Observable', 'async/await', 'Actors', 'SwiftData', 'Swift Testing'],
    features: ['Fake Auth & Session', 'Social Feed', 'Offline-first', 'Actor-based Chat', 'Notifications', 'Unit Tests'],
  },
  linkedInCaption: `🚀 Project 02 — ConnectHub (iOS)

Movie Explorer taught me how to build a modern iOS app.

ConnectHub pushed me to think beyond individual screens — how a larger app stays maintainable as it grows.

Instead of another demo, I wanted to simulate the architecture of a production-style social platform.

It has auth, a social feed, chat, notifications, bookmarks, offline caching, and settings — but those features were never the real goal.

The real objective was learning to organize a growing codebase with:

→ SwiftUI
→ MVVM + Use Cases
→ Repository Pattern
→ Protocol-based Dependency Injection
→ SwiftData (offline cache)
→ async/await + Actors
→ Fake service protocols
→ Swift Testing

Over the next posts, I'll share the engineering decisions behind it — project structure, state management, offline-first data, the actor-backed chat, testing, and scalability.

The project is open source — GitHub link in the comments.

If you were building a production iOS app today, which topic would you want to explore first? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SoftwareArchitecture #SwiftData #Actors #OpenSource #MobileDevelopment #LearningInPublic`,
});
