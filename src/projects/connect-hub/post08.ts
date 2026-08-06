import { definePost } from '../../lib/factories';

// 8/10 — Testing strategy (checklist; Android used a 2nd tech-stack grid — checklist reads better).
export default definePost({
  title: 'TESTING THE APP',
  highlightWord: 'TESTING',
  subtitle: 'Swift Testing with protocol fakes across every architectural layer.',
  layout: 'checklist',
  quote: 'Good tests protect your architecture as the app grows.',
  layoutData: {
    heading: 'What I cover with Swift Testing:',
    items: [
      'View models — Feed, Login, Search, Comments',
      'Use cases — like, bookmark, create post',
      'The actor-backed message store (concurrent sends)',
      'Repositories & fake services',
      'SwiftData cache — in-memory container',
    ],
  },
  linkedInCaption: `🧪 ConnectHub — My Testing Strategy

Writing features is satisfying. Keeping them working as the project grows is where testing earns its place.

With ConnectHub, I wanted tests to reflect the architecture — not just chase coverage.

What I cover with Swift Testing (and protocol fakes):

→ View models — Feed, Login, Search, Comments, Bookmarks…
→ Use cases — like, bookmark, create post, add comment.
→ The actor-backed message store — concurrent sends stay consistent.
→ Repositories and fake services.
→ SwiftData cache — using an in-memory container.

Each layer answers a different question:

→ Does the business logic work?
→ Does state update correctly?
→ Is local data stored as expected?
→ Can users complete the important flows?

Testing each layer independently made refactoring far less scary — the tests catch regressions early instead of me finding them in the simulator.

For me, testing isn't about 100% coverage. It's about enough confidence to keep improving the architecture without fear.

Next posts: what I learned, and what I'd change if this became a production app.

Open source — GitHub link in the comments.

What do you test first in a new app? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftTesting #Testing #Actors #MVVM #SoftwareArchitecture #OpenSource #LearningInPublic`,
});
