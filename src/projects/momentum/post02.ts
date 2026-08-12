import { definePost } from '../../lib/factories';

// 2/7 — NEW concept: permission as a one-shot resource. Grounded in
// NotificationScheduler.requestAuthorization().
export default definePost({
  title: 'YOU ONLY GET ONE ASK',
  highlightWord: 'ONE ASK',
  subtitle: 'The permission dialog is a resource you can spend exactly once.',
  layout: 'pitfall',
  quote: 'Asking for permission is a product decision that happens to look like an API call.',
  layoutData: {
    trap: {
      title: 'Ask on first launch',
      body: 'The permission sheet appears before the user has any idea what a reminder would be for.',
    },
    consequence: {
      title: '"Don\'t Allow" is final',
      body: 'iOS will not show the sheet again. The only route back is a trip to Settings that nobody makes.',
    },
    fix: {
      title: 'Ask at the moment of value',
      body: 'Request when they switch on a reminder for a habit they just created — the one moment "yes" makes obvious sense.',
    },
    note: 'Same API call, wildly different acceptance rate. Timing is the whole feature.',
  },
  linkedInCaption: `🔔 Momentum — You Only Get One Ask

Notification permission is the strangest API I've worked with, because calling it correctly is easy and calling it at the right time is the entire problem.

The naive version — the one I've shipped before — asks on first launch. The app opens, and immediately: "Momentum would like to send you notifications."

The user has been in the app for four seconds. They have no habits. There is nothing to remind them about. So a lot of them tap "Don't Allow".

And that's it. Forever.

iOS shows that sheet once. After a decline, requestAuthorization returns false without showing anything — silently. Your only remaining path is asking the user to walk into Settings and flip a switch, which approximately nobody does. You didn't lose a dialog; you lost the feature.

So in Momentum the ask happens at the moment of value: the user has created a habit and just switched on a reminder for it. They have already told me they want to be reminded. The system sheet is now a formality confirming something they chose.

Two smaller things that came out of it:

→ The app has to work fully without permission. Reminders are a bonus, not a dependency — every habit, streak and achievement works with notifications off.
→ The request sits behind a NotificationScheduler protocol, so tests never touch UNUserNotificationCenter and previews get a no-op that just returns true.

The general lesson, which is not really about iOS: some API calls are one-shot resources. Treat them like a budget, and spend them when the user already wants what you're about to ask for.

Open source — GitHub link in the comments.

When do you ask for notification permission in your apps? 👇

#iOSDevelopment #SwiftUI #Swift #UserNotifications #UXEngineering #MobileDevelopment #OpenSource #iOSDeveloper #ProductEngineering #LearningInPublic`,
});
