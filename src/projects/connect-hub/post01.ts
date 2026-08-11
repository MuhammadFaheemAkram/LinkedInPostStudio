import { definePost } from '../../lib/factories';

// 1/8 — Opener. Uses statHighlight (not projectHero) so the flagship opens on
// something the earlier project didn't. Numbers are real counts from the repo.
export default definePost({
  title: 'A COMPLETE SOCIAL APP',
  highlightWord: 'COMPLETE',
  subtitle: 'Feed, chat, search, notifications, profiles — and no backend anywhere.',
  layout: 'statHighlight',
  quote: 'Small apps teach you syntax. Big ones teach you where things break.',
  layoutData: {
    stats: [
      { value: '13', label: 'Features' },
      { value: '34', label: 'Use Cases' },
      { value: '5', label: 'Fake Services' },
      { value: '22', label: 'Test Suites' },
    ],
    points: ['Runs fully offline', 'No API keys', 'One consistent architecture'],
  },
  linkedInCaption: `🚀 Project 02 — ConnectHub (iOS)

Movie Explorer was four screens. It taught me how the pieces fit.

ConnectHub is a complete social app — and it taught me what happens when there are a lot of pieces.

What's inside:

→ 13 features — feed, chat, search, bookmarks, notifications, profile, auth and more
→ 34 use cases
→ 5 fake services standing in for a backend
→ 22 test suites
→ Zero API keys. It runs entirely offline.

But the interesting part isn't the count. It's that a bigger app surfaces problems a small one never does:

→ Two things writing to the same data at the same time.
→ A button that must feel instant while the work happens behind it.
→ A screen that has to look alive when nothing real is happening.
→ Deciding, at launch, whether the user is even signed in.

Those aren't "add another screen" problems. They're the ones that make you actually think.

Over the next posts I'll go through them one at a time — concurrency and actors, session as a state machine, why the like button never waits, how a typing indicator fakes presence, and how search learns to be patient.

Open source — GitHub link in the comments.

What was the first project where scale changed how you had to build? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftConcurrency #SoftwareArchitecture #SwiftData #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
