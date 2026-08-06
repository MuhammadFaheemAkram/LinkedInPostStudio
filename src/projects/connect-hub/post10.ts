import { definePost } from '../../lib/factories';

// 10/10 — Project complete. Closes the series (mirrors the Android wrap-up).
export default definePost({
  title: 'PROJECT COMPLETE',
  highlightWord: 'COMPLETE',
  subtitle: 'ConnectHub became a practical exercise in modern iOS engineering.',
  layout: 'projectHero',
  quote: 'Projects end; the lessons they teach become the foundation for the next.',
  layoutData: {
    description:
      'A production-inspired iOS social app built to practice scalable SwiftUI architecture, state management, offline persistence, actor-based concurrency, and testing.',
    techStack: ['SwiftUI', '@Observable', 'Actors', 'SwiftData', 'async/await', 'Swift Testing'],
    features: ['Social Feed', 'Fake Auth', 'Actor Chat', 'Offline Cache', 'Tests', 'Open Source'],
  },
  linkedInCaption: `🎉 ConnectHub — Project Complete

Over 10 posts, I've shared the engineering decisions behind ConnectHub.

The goal was never to build another social app. It was to show how a modern iOS app can be structured with current best practices.

Across the project I explored:

→ SwiftUI
→ MVVM + Use Cases
→ @Observable state
→ async/await + Actors
→ Repository Pattern
→ Protocol-based DI
→ SwiftData (offline cache)
→ Fake service protocols
→ Offline-first thinking
→ Swift Testing

More importantly, I learned how these work together — not as isolated concepts.

Building projects from scratch is still one of the best ways for me to understand architecture, sharpen engineering decisions, and prepare for real production work.

ConnectHub is fully open source — GitHub link in the comments if you'd like to explore the code.

This is only Project 02 in my "Modern iOS in Practice" series. Next, I'll build another iOS app around a different real-world problem and a new architectural challenge.

Thanks to everyone following along. 🙏

What should Project 03 be? I'm listening. 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SoftwareArchitecture #SwiftData #Actors #OpenSource #LearningInPublic #MobileDevelopment`,
});
