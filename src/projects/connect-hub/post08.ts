import { definePost } from '../../lib/factories';

// 8/8 — Closer. projectHero is used as an *opener* in the other two projects,
// so using it to close here keeps ConnectHub's own opener (statHighlight) fresh.
export default definePost({
  title: 'WHAT SCALE TEACHES',
  highlightWord: 'SCALE',
  subtitle: 'The problems that only appear once an app gets big enough.',
  layout: 'projectHero',
  quote: 'A small app teaches you the language. A big one teaches you the trade-offs.',
  layoutData: {
    description:
      'ConnectHub is 13 features sharing one architecture, running entirely offline. Every hard part came from size — concurrent writes, perceived latency, session routing, doing less work — not from any single screen.',
    techStack: ['Actors', 'State Machines', 'Local-first Writes', 'Debouncing', 'Paging', 'Swift Testing'],
    features: ['Feed', 'Chat', 'Search', 'Bookmarks', 'Notifications', 'Profile'],
  },
  linkedInCaption: `✅ ConnectHub — What Scale Teaches

Eight posts ago I said a bigger app surfaces problems a small one never does. Here's what that actually meant.

Every hard problem in ConnectHub came from size, not from any individual screen:

→ Concurrency. Chat was the first place two things genuinely wrote at once. An actor made the data race impossible to express instead of something I had to remember to avoid.

→ Session. With 13 features, "is the user signed in?" can't be answered in 13 places. One state machine at the root owns it, and everything else just follows.

→ Perceived speed. The like button, the cached feed, the typing indicator — none are performance optimisations. They're decisions about what the user should never have to wait for.

→ Doing less. The best fix in the whole app was a debounce: six keystrokes, one search.

None of these show up when you're building four screens. They're what you learn by building something big enough to break.

The other thing I'd say: I built this with fake services and no backend, and it made the architecture more honest, not less. With nothing to blame on the network, every problem left was a design problem.

That wraps Project 02 of "Modern iOS in Practice". Next up: SpendWise — where the challenge stops being concurrency and starts being correctness.

Thanks to everyone following along. 🙏

Open source — GitHub link in the comments.

What problem did you only discover once your app got big? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftConcurrency #Actors #SoftwareArchitecture #SwiftData #OpenSource #iOSDeveloper #LearningInPublic`,
});
