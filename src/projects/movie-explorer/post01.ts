import { definePost } from '../../lib/factories';

// 1/8 — Project hero. Mirrors the Android "Movie Explorer" opener, iOS stack.
export default definePost({
  title: 'MOVIE EXPLORER',
  highlightWord: 'EXPLORER',
  subtitle: 'A production-inspired SwiftUI app built to practice modern iOS architecture.',
  layout: 'projectHero',
  quote: 'The best learning projects teach engineering, not just implementation.',
  layoutData: {
    description:
      'Movie Explorer is an offline-capable iOS app — trending movies, search, favorites, details, and settings — on a clean, layered SwiftUI architecture with a swappable networking layer.',
    techStack: ['SwiftUI', '@Observable', 'async/await', 'SwiftData', 'Swift Testing'],
    features: ['Trending & Search', 'Movie Details', 'Offline Favorites', 'Light & Dark', 'Fake API', 'Unit Tests'],
  },
  linkedInCaption: `🚀 Project 01 — Movie Explorer (iOS)

After wrapping up my 20-day iOS comeback series, I wanted to put those concepts to work in a real project.

So I built Movie Explorer — a production-inspired iOS app made to practice modern iOS development, not just ship another movie app.

The focus wasn't on complex features. It was on clean, layered architecture and understanding how each layer works together.

Some of the concepts explored in this project:

✅ SwiftUI
✅ @Observable (Observation framework)
✅ MVVM architecture
✅ Protocol-based Dependency Injection
✅ Repository Pattern
✅ SwiftData persistence
✅ async/await concurrency
✅ Type-safe NavigationStack
✅ Fake API layer for realistic architecture
✅ Swift Testing

Over the next few posts, I'll break down this project and the decisions behind it — from folder structure and data flow to testing and offline support.

I hope these help anyone learning modern iOS development.

🔗 Source code: GitHub (link in the comments)

What should I cover first — architecture, testing, or state management? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SoftwareArchitecture #SwiftData #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
