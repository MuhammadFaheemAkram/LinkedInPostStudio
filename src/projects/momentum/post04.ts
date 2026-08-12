import { definePost } from '../../lib/factories';

// 4/7 — NEW concept: the notification centre as a second store you can't read.
// Grounded in SyncNotificationsUseCase — cancelAll() then reschedule.
export default definePost({
  title: 'RESCHEDULE, DONT PATCH',
  highlightWord: 'DONT PATCH',
  subtitle: 'The notification centre is a second database you can write but never really read.',
  layout: 'beforeAfter',
  quote: 'When you cannot read a store reliably, stop trying to patch it. Rebuild it.',
  layoutData: {
    beforeTitle: 'Incremental edits',
    beforeItems: [
      'Habit renamed → update its request',
      'Reminder off → remember to cancel',
      'Habit deleted → hope nothing is orphaned',
      'One missed path = a ghost reminder forever',
    ],
    afterTitle: 'Reconcile from truth',
    afterItems: [
      'cancelAll() on every relevant change',
      'Re-schedule from the current habits',
      'Notification state is derived, not maintained',
      'One code path, impossible to desync',
    ],
    transitionLabel: 'One use case',
  },
  linkedInCaption: `🔄 Momentum — Reschedule, Don't Patch

Here's the thing about scheduled notifications that took me a while to properly respect:

The notification centre is a second database. It lives outside your app, it survives launches, and you can write to it — but you can't meaningfully read it back. Pending requests are queryable in principle and awkward to reason about in practice.

Which makes the obvious approach a trap. Every place that changes a habit also has to remember to update its reminder:

→ Rename a habit → update the request body
→ Turn a reminder off → cancel that specific request
→ Delete a habit → cancel it, and hope nothing was orphaned
→ Change the daily-summary time → find and replace that one

Miss a single path and the user gets a ghost reminder for a habit that no longer exists. There's no crash, no log, and it happens on their phone at 8am — the least debuggable place in the world.

So Momentum doesn't patch. It reconciles.

One use case — SyncNotificationsUseCase — cancels every pending request and reschedules from scratch based on current settings and current habits. Anything that could invalidate the schedule just calls it.

That means notification state is derived from app state, not maintained alongside it. The same instinct as not storing a total you can compute: if one store is the truth, everything else should be rebuildable from it.

Is cancelling and rebuilding a few dozen requests wasteful? Technically. It's also instant, and it makes an entire category of "why am I getting this reminder" bug structurally impossible.

Cheap and correct beats clever and drifting.

Open source — GitHub link in the comments.

Incremental sync or full reconcile — which do you default to? 👇

#iOSDevelopment #SwiftUI #Swift #UserNotifications #SoftwareArchitecture #DomainModeling #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
