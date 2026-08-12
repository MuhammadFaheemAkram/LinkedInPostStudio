import { definePost } from '../../lib/factories';

// 1/7 — Opener. Angle: an app that ships WITH content, unlike the empty-shell
// apps in projects 01–03. Avoids re-treading stack/structure/architecture.
export default definePost({
  title: 'DEV JOURNEY',
  highlightWord: 'JOURNEY',
  subtitle: 'Most apps launch empty. This one arrives already knowing what to teach you.',
  layout: 'projectHero',
  quote: 'An empty app puts the hard work on the user. Content is a feature.',
  layoutData: {
    description:
      'DevJourney is an offline learning hub — roadmaps, topics, notes, goals, challenges and analytics. The engineering interest is not the screens: it is derived read models, time you can test, and progress that rolls up a tree.',
    techStack: ['Read Models', 'Testable Clock', 'Derived Progress', 'Global Search', 'SwiftData', 'Swift Charts'],
    features: ['4 Learning Tracks', 'Roadmaps & Topics', 'Notes & Goals', 'Challenges', 'Analytics', 'Fully Offline'],
  },
  linkedInCaption: `🚀 Project 04 — DevJourney (iOS)

Every app I've built so far started empty. You open it, and you're the one who has to put something in.

DevJourney is the opposite. It's a developer learning hub, and it ships already knowing what to teach — four curated tracks (iOS, Backend, AI Engineering, System Design), broken into sections and topics, seeded on first launch.

That one decision changed the engineering.

When your app ships with content, you stop building CRUD screens and start building a system that has to *interpret* data:

→ What does "62% complete" mean when progress lives on individual topics?
→ What actually counts as a learning streak — and what breaks it?
→ How do you search across five completely different kinds of thing at once?
→ Who decides which topic you should do next?

None of those are storage problems. They're all questions about deriving meaning from data you already have.

So this series isn't another architecture tour — projects 01 to 03 covered that ground. It's about the layer above storage: read models, testable time, hierarchical aggregation, and where product policy belongs in a codebase.

Over the next posts: what counts as a streak, why time had to become a dependency, how progress rolls up a tree, one query across five stores, and who gets to decide what you learn next.

Open source — GitHub link in the comments.

Would you rather an app that starts empty, or one with opinions? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftData #SoftwareArchitecture #DomainModeling #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
