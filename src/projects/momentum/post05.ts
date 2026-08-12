import { definePost } from '../../lib/factories';

// 5/7 — NEW concept: you request background time, you don't schedule it.
// Grounded in MomentumBackgroundCoordinator (BGAppRefreshTaskRequest,
// earliestBeginDate, expirationHandler, Info.plist identifiers, simulator throw).
export default definePost({
  title: 'YOU DONT SCHEDULE BACKGROUND WORK',
  highlightWord: 'DONT SCHEDULE',
  subtitle: 'You submit a request. iOS decides if, and when, it feels like running it.',
  layout: 'decisionMatrix',
  quote: 'Any work that must happen at a specific time cannot live in a background task.',
  layoutData: {
    question: 'Where should the daily summary and achievement checks run?',
    options: [
      {
        title: 'A timer',
        pros: ['Exact'],
        cons: ['Dies with the app', 'Never fires when it matters'],
      },
      {
        title: 'BGTask alone',
        pros: ['Runs while closed'],
        cons: ['earliestBeginDate is a hint', 'May never run at all'],
      },
      {
        title: 'Notification + BGTask',
        pros: ['User-facing part is guaranteed', 'Background is a bonus'],
        cons: ['Two mechanisms to reason about'],
      },
    ],
    decision: 'Schedule the user-visible summary as a notification. Let the background task do the optional catch-up work.',
  },
  linkedInCaption: `⏳ Momentum — You Don't Schedule Background Work

The API is called BGTaskScheduler, which is a slightly generous name. You are not scheduling anything. You are submitting a request and hoping.

Here's what submitting actually looks like:

let request = BGAppRefreshTaskRequest(identifier: refreshIdentifier)
request.earliestBeginDate = Date(timeIntervalSinceNow: 4 * 3600)
try BGTaskScheduler.shared.submit(request)

Read that property name again. earliestBeginDate. Not "runAt". You are saying "no sooner than four hours from now" — and iOS decides the rest based on battery, charging state, network, and how often the user actually opens your app. A rarely-opened app gets background time rarely. It may get none.

Three things I had to internalise:

→ The identifier must also be listed in Info.plist under BGTaskSchedulerPermittedIdentifiers. Miss it and registration fails at launch, loudly.
→ The task must reschedule itself. Submitting once buys you at most one run.
→ You get an expirationHandler, and you must honour it. iOS can reclaim the time mid-flight, so my handler cancels the running Task rather than pretending it'll finish.

And the design consequence, which matters more than any of the API details:

Anything the user is promised at a specific time cannot depend on a background task. So the daily summary the user actually sees is a scheduled notification — the system guarantees delivery. The background task does the optional work: recomputing the summary, running achievement checks, simulating a sync. If it runs, things are fresher. If it never runs, nothing is broken.

That split — guaranteed user-facing mechanism, best-effort background work — is the thing I'd carry to any platform.

(Small practical note: submit() throws on the Simulator, which is expected and worth catching so the app runs normally while you develop.)

Open source — GitHub link in the comments.

Have you shipped a feature that depends on background execution? How did it go? 👇

#iOSDevelopment #Swift #SwiftUI #BackgroundTasks #BGTaskScheduler #SoftwareArchitecture #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
