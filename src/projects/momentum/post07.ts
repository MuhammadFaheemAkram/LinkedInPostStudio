import { definePost } from '../../lib/factories';

// 7/7 — Closer. quoteHero (last used in P03) rather than reflection, so it does
// not echo P04's "FOUR PROJECTS IN" closer in both layout and shape.
export default definePost({
  title: 'THE EDGES YOU DONT OWN',
  highlightWord: 'DONT OWN',
  subtitle: 'Every hard problem in this project lived outside my own code.',
  layout: 'quoteHero',
  quote: 'Inside your app you control everything. That is exactly why it teaches you the least.',
  layoutData: {
    heroStatement: 'The platform is a collaborator, not a library.',
    supportText:
      'It grants permission once, holds your reminders, wakes you when it chooses, and lets the user act without ever opening you. The only sane response is a protocol at every edge.',
    points: ['Ask at the right moment', 'Reconcile, never patch', 'Assume it may never run'],
  },
  linkedInCaption: `✅ Momentum — The Edges You Don't Own

Six posts ago I said this was the first project that leaves my sandbox. Here's what that actually taught me.

In the first four projects, every bug was mine. Wrong state, wrong layer, wrong number — but reproducible, because I owned every line involved.

Momentum's hard problems all lived at the boundary:

→ Permission — a resource you spend once. Ask before the user understands why, and the feature is gone permanently. The fix wasn't code, it was timing.

→ The notification centre — a store you can write but not really read. Patching it incrementally guarantees drift, so I cancel everything and rebuild from the habits. Notification state became derived rather than maintained.

→ Notifications as input — Complete and Skip actions run the same use case the in-app button does. There is no separate path, so the two can't diverge.

→ Background execution — you submit a request; iOS decides. So anything the user is promised runs as a notification, and the background task only does work that's fine to skip.

→ Idempotent rules — the only kind of work that's comfortable when you don't control when it runs.

The thread through all of it: put a protocol at every platform edge. Features and tests never touch UNUserNotificationCenter or BGTaskScheduler. Production gets the real implementation; tests get a fake that records what was asked; previews get a no-op. That one habit made unreliable, un-runnable-in-a-test platform code straightforwardly testable.

The bigger shift in how I think: the platform isn't a library I call. It's a collaborator with its own priorities — battery, privacy, the user's attention — and my job is to make the app degrade gracefully when it says no.

That wraps Project 05 of "Modern iOS in Practice".

Thanks to everyone following along. 🙏

Open source — GitHub link in the comments.

What's the platform constraint that most changed how you design? 👇

#iOSDevelopment #Swift #SwiftUI #UserNotifications #BackgroundTasks #SoftwareArchitecture #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
