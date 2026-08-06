import { definePost } from '../../lib/factories';

// 8/8 — Lessons learned. Closes the series (mirrors the Android reflection post).
export default definePost({
  title: 'LESSONS LEARNED',
  highlightWord: 'LEARNED',
  subtitle: 'Building this changed how I think about iOS architecture.',
  layout: 'reflection',
  quote: 'Every project should improve how you build the next one.',
  layoutData: {
    statement: 'Good architecture is about clear responsibilities, not more layers.',
    points: [
      'Design boundaries before features',
      'Views only observe state',
      'One protocol hides every data source',
      'SwiftData is the single source of truth',
      'Clean layers make testing fall out',
    ],
  },
  linkedInCaption: `Project 01 • Post 8/8 — Movie Explorer (iOS)

Movie Explorer started as a learning project. It ended up changing how I think about iOS development.

The biggest lessons:

→ Architecture should make tomorrow's change easier, not today's code longer.
→ View models work best when they expose state instead of driving the UI.
→ One protocol hiding every data source means you can swap data sources without touching the rest of the app.
→ SwiftData as the single source of truth keeps the UI honest.
→ Clean layers make testing fall out almost for free.

This project wasn't about the most feature-rich movie app. It was about understanding how modern iOS apps are structured — and why those decisions matter.

The complete source code is on GitHub (link in the comments).

That wraps Project 01. Next project, I'll take on a different iOS challenge and apply the same engineering principles in a new context.

Thanks to everyone following along. 🙏

What should Project 02 be? I'm listening. 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SoftwareArchitecture #SwiftData #OpenSource #iOSDeveloper #LearningInPublic #SwiftTesting`,
});
