import { definePost } from '../../lib/factories';

// 1/7 — Opener. Angle: this is the project where the app stops being
// self-contained. Avoids every concept spent in P01–P04.
export default definePost({
  title: 'MOMENTUM',
  highlightWord: 'MOMENTUM',
  subtitle: 'The first project where the hard part happens while the app is closed.',
  layout: 'projectHero',
  quote: 'Everything you own is easy. The interesting bugs live at the edges you do not control.',
  layoutData: {
    description:
      'A habit tracker on the surface. Underneath, it is about the parts of iOS the app does not own — permission you get to ask for once, reminders the system holds, notifications the user can act on without opening you, and background time the OS grants when it feels like it.',
    techStack: ['UserNotifications', 'BGTaskScheduler', 'Protocol Isolation', 'SwiftData', 'Swift Testing'],
    features: ['Habits & Routines', 'Reminders', 'Actionable Alerts', 'Achievements', 'Background Refresh', 'Fully Offline'],
  },
  linkedInCaption: `🚀 Project 05 — Momentum (iOS)

The first four projects were entirely mine. Whatever went wrong, I had written it.

Momentum is the first one that leaves my sandbox — and that changes the kind of problem you get.

On the surface it's a habit tracker: habits, streaks, routines, goals, achievements. Underneath, almost every hard decision was about something iOS owns and I don't:

→ Permission you effectively get to ask for once. Get the timing wrong and the feature is dead — permanently.
→ Reminders that live in the notification centre, not in my database. A second store I can write to but can't really read.
→ Notifications the user can act on without ever opening the app. Suddenly a notification is an input, not an output.
→ Background time the OS grants on its own schedule. You don't schedule work; you ask, and hope.

That's a different discipline from anything in the first four projects. In-app, a bug is reproducible — you run it again. At the platform edge, the system decides when your code runs, whether it runs at all, and whether the user ever sees it.

The engineering answer turned out to be the same one every time: put a protocol between my code and the platform, so features and tests never touch UNUserNotificationCenter or BGTaskScheduler directly.

Over the next posts: the one-shot permission ask, notifications as input, why I cancel every reminder and reschedule from scratch, why you can't schedule background work, and achievements as pure functions.

Open source — GitHub link in the comments.

What's the platform integration that's bitten you hardest? 👇

#iOSDevelopment #SwiftUI #Swift #UserNotifications #BackgroundTasks #SoftwareArchitecture #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
