import { definePost } from '../../lib/factories';

// 3/7 — NEW concept: injecting the clock. Grounded in the real DateProvider /
// SystemDateProvider / FixedDateProvider trio.
export default definePost({
  title: 'TIME IS A DEPENDENCY',
  highlightWord: 'DEPENDENCY',
  subtitle: 'You cannot unit test "yesterday" while your code asks the system what day it is.',
  layout: 'pitfall',
  quote: 'Anything you cannot control in a test is a dependency, whether you injected it or not.',
  layoutData: {
    trap: {
      title: 'Date() inside the logic',
      body: 'The streak calculation reads the system clock directly. It feels harmless — it is one line.',
    },
    consequence: {
      title: 'The test owns nothing',
      body: 'You cannot test a 30-day streak, a missed day, or a year boundary without waiting for real time to pass.',
    },
    fix: {
      title: 'A DateProvider protocol',
      body: 'SystemDateProvider ships in the app; FixedDateProvider pins "now" in tests. The logic never asks the clock itself.',
    },
    note: 'Same idea as hiding a network behind a protocol — the clock is just another uncontrollable input.',
  },
  linkedInCaption: `⏰ DevJourney — Time Is a Dependency

I wrote the streak calculator, then sat down to test it and hit a wall.

The logic called Date() internally. One harmless-looking line — and it made the whole thing untestable.

Think about what you'd actually want to verify:

→ A 30-day streak
→ A streak broken by exactly one missed day
→ A streak that ends yesterday and should still count
→ Behaviour across a month or year boundary

You cannot test any of those if your code asks the operating system what day it is. Your only options are waiting for real time to pass, or changing the device clock. Neither is a test.

The fix was to treat time as what it actually is: an input the code doesn't control.

→ A DateProvider protocol with a single "now" property.
→ SystemDateProvider — the real clock, used in the app.
→ FixedDateProvider — pins "now" to an exact date, used in tests.

The streak calculator now receives "now" instead of fetching it. Suddenly every scenario above is a two-line test, and they run instantly.

The realisation that stuck with me: I already knew to hide the network behind a protocol. The clock is the same category of thing — a global, uncontrollable input. It just doesn't feel like a dependency because it's built into the language.

A decent rule of thumb: if a test can't control it, it's a dependency. Date(), UUID(), random numbers, the file system, the locale. Injecting them costs almost nothing and buys you the ability to test the interesting cases.

Next post: how progress rolls up a tree.

Open source — GitHub link in the comments.

What's something you only realised was a dependency when you tried to test it? 👇

#iOSDevelopment #Swift #SwiftUI #Testing #SwiftTesting #DependencyInjection #SoftwareArchitecture #OpenSource #iOSDeveloper #LearningInPublic`,
});
