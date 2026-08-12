import { definePost } from '../../lib/factories';

// 2/7 — NEW concept: encoding a product rule about dates. Uses the new
// calendarHeat layout. Rules come straight from StreakCalculator.swift.
export default definePost({
  title: 'WHAT COUNTS AS A STREAK?',
  highlightWord: 'STREAK',
  subtitle: 'A number everyone understands, until you have to define it in code.',
  layout: 'calendarHeat',
  quote: 'Every streak counter is a product decision wearing a number.',
  layoutData: {
    streakValue: '4',
    streakLabel: 'day streak',
    days: [
      { label: 'M', state: 'done' },
      { label: 'T', state: 'done' },
      { label: 'W', state: 'missed' },
      { label: 'T', state: 'done' },
      { label: 'F', state: 'done' },
      { label: 'S', state: 'done' },
      { label: 'S', state: 'today' },
    ],
    rules: [
      'One completed topic is enough to mark the day',
      'A streak that ended yesterday still counts — today is not over',
      'Two consecutive missed days resets it to zero',
      'Days are compared at startOfDay, so the time you studied is irrelevant',
    ],
  },
  linkedInCaption: `🔥 DevJourney — What Counts as a Streak?

"4 day streak." Everyone understands it instantly.

Then you try to implement it, and discover it's four product decisions in disguise.

Here's what I had to decide:

→ What marks a day as done? One completed topic is enough. Requiring more would punish light days and make the number discouraging rather than motivating.

→ If I haven't studied today yet, is my streak broken? No. A streak that ran up to yesterday still counts — today isn't over. Zeroing it at midnight would be technically defensible and emotionally wrong.

→ When does it actually break? Two consecutive missed days. One gap forgives; two resets.

→ Does the time of day matter? No. Dates are compared at startOfDay, so 11:58pm and 6am on the same date are the same day.

That last one matters more than it looks. Comparing raw Date values means "yesterday" is really "24 hours ago", which is not the same thing at all — study at 9am then 8am the next day and a naive check breaks your streak even though you didn't miss a day.

The implementation ended up small: normalise every completion to its start-of-day, walk backwards one day at a time, stop at the first gap.

But writing it forced me to be explicit about rules I'd only ever felt as a user. That's the part I keep taking with me — a "simple counter" is usually a policy, and policy should be written down in one place rather than scattered across whoever needed it.

Next post: why this logic was untestable until I made time a dependency.

Open source — GitHub link in the comments.

Should a streak break at midnight, or forgive the current day? 👇

#iOSDevelopment #Swift #SwiftUI #DomainModeling #ProductEngineering #SoftwareArchitecture #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
