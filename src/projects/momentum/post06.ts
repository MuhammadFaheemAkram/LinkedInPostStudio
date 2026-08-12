import { definePost } from '../../lib/factories';

// 6/7 — NEW concept: rules as pure functions + idempotency, which is what makes
// them safe to run from a background task. Grounded in AchievementRules /
// AchievementContext / UnlockAchievementUseCase.
export default definePost({
  title: 'ACHIEVEMENTS ARE PURE FUNCTIONS',
  highlightWord: 'PURE FUNCTIONS',
  subtitle: 'The badge is data. The rule is a function. Neither knows the other exists.',
  layout: 'checklist',
  quote: 'Anything a background task runs must be safe to run twice, or a hundred times.',
  layoutData: {
    heading: 'What makes the achievement engine safe:',
    items: [
      'One context struct carries every input a rule can see',
      'Each rule is (context) → Bool, with no side effects',
      'Unknown ids return nil — never auto-unlocked by accident',
      'Unlocking is idempotent: already unlocked is a no-op',
      'So the background task can re-evaluate everything, any time',
    ],
  },
  linkedInCaption: `🏅 Momentum — Achievements Are Pure Functions

Achievements look like a small feature and turn into a mess quickly, because the natural instinct is to check them where they happen.

Complete a habit → check if that was the 100th. Streak hits 7 → check the 7-day badge. Consistency updates → check consistency master. Now unlock logic is smeared across every mutation in the app, and each one has to remember which badges it might have affected.

Momentum inverts it. There is no "check on write". There is one context and a set of pure rules:

struct AchievementContext {
    var totalCompletions: Int
    var bestLongestStreak: Int
    var consistencyScore: Double
}

...and each rule is just a question asked of that context — 7-day streak is bestLongestStreak >= 7, and so on. No side effects, no repository access, no knowledge of what triggered the check.

Three properties fall out, and the third is the one that mattered:

→ The data and the logic are separate. The store owns titles, descriptions and SF Symbols; the rules own only the condition. Adding a badge to the catalog without a rule simply means it never auto-unlocks — which is a safe default, not a crash.

→ The rules are trivially testable. Build a context, assert a Bool. No database, no clock, no async.

→ Unlocking is idempotent. Already unlocked is a no-op. That single property is what makes the whole thing safe to run from a background task — I can re-evaluate every rule on every launch and every background refresh, and nothing double-fires or re-notifies.

That's the connection back to the last post. Background execution is unreliable by design: it might run twice, or late, or not at all. The only work that's comfortable to put there is work that's safe to repeat.

Idempotency isn't a purity exercise. It's what lets you stop caring exactly when your code runs.

Open source — GitHub link in the comments.

Where do you evaluate rules like this — on write, or on read? 👇

#iOSDevelopment #Swift #SwiftUI #DomainModeling #SoftwareArchitecture #BackgroundTasks #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
