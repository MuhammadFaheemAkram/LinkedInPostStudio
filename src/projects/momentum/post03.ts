import { definePost } from '../../lib/factories';

// 3/7 — NEW concept: the notification as an INPUT. Grounded in
// NotificationActionHandler (UNUserNotificationCenterDelegate) wiring
// Complete/Skip actions straight into CompleteHabitUseCase / SkipHabitUseCase.
export default definePost({
  title: 'THE NOTIFICATION IS AN INPUT',
  highlightWord: 'AN INPUT',
  subtitle: 'The best habit interaction never opens the app at all.',
  layout: 'sequence',
  quote: 'A notification you can act on is a feature. One you can only read is an interruption.',
  layoutData: {
    actors: ['System', 'App'],
    steps: [
      { from: 'System', to: 'App', label: 'Reminder fires at 8:00', detail: 'Scheduled days ago; the app is not running.' },
      { from: 'System', to: 'App', label: 'User long-presses, taps "Complete"', timing: 'no launch' },
      {
        from: 'App',
        to: 'System',
        label: 'The delegate wakes and maps the action',
        detail: 'Habit id parsed from the request identifier; action routed to a use case.',
      },
      {
        from: 'App',
        to: 'System',
        label: 'CompleteHabitUseCase runs',
        detail: 'A real domain mutation — the streak moves before any screen appears.',
      },
    ],
    note: 'The notification is a surface of the app, not a message about it.',
  },
  linkedInCaption: `⚡ Momentum — The Notification Is an Input

Most apps treat a notification as an outbox: something you send, and the user reads.

The best habit interaction is the opposite. It's 8am, the reminder appears, the user long-presses it and taps Complete. The habit is done, the streak moves — and the app never opened.

That reframes the notification from a message about the app into a surface of the app.

How it works in Momentum:

→ The reminder is registered with a notification category that carries two actions: Complete and Skip.
→ A UNUserNotificationCenterDelegate receives the response when the user taps one.
→ The habit id is parsed out of the notification's request identifier — which is why identifiers are structured data, not random UUIDs.
→ The action is routed to the same CompleteHabitUseCase the button inside the app calls.

That last point is the one I'd underline. There is no special "notification path" through the code. The action handler is just another caller of the same use case. If completing a habit ever changes — streak rules, achievement checks, whatever — both entry points change together, because there is only one implementation.

The thing that made this pleasant to build was the boundary. The delegate belongs to UIKit's world and knows about UNNotificationResponse; my domain doesn't. The handler's whole job is translating one into the other and then getting out of the way.

Two practical notes: identifiers need to encode what you'll need later (I use a habit-id scheme, not a UUID), and the delegate has to be set before the system might deliver a response — meaning at launch, not when a screen appears.

Open source — GitHub link in the comments.

Do your notifications carry actions, or just open the app? 👇

#iOSDevelopment #SwiftUI #Swift #UserNotifications #UXEngineering #SoftwareArchitecture #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
