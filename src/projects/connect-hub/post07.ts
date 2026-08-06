import { definePost } from '../../lib/factories';

// 7/10 — State-driven UI vs imperative UI.
export default definePost({
  title: 'STATE OVER EVENTS',
  highlightWord: 'STATE',
  subtitle: 'Modern iOS gets simpler when the UI observes state instead of controlling it.',
  layout: 'comparison',
  quote: 'When the UI reflects state, bugs get easier to reason about.',
  layoutData: {
    left: {
      title: 'Imperative UI',
      body: ['Update views by hand', 'Callbacks everywhere', 'State scattered', 'Hard to debug'],
    },
    right: {
      title: 'State-Driven UI',
      body: ['One @Observable state', 'View re-renders itself', 'Predictable rendering', 'Easy to test'],
    },
    centerLabel: 'VS',
    favorRight: true,
  },
  linkedInCaption: `⚡ ConnectHub — Why State-Driven UI

One of the biggest lessons from ConnectHub wasn't a new framework.

It was thinking differently about UI.

Instead of telling the screen what to update, the screen just observes state:

User Action → ViewModel → @Observable state → SwiftUI

Whenever state changes, SwiftUI re-renders the latest UI. That means:

→ The UI holds no business logic.
→ Screen state has a single source of truth.
→ Loading, success, empty, and error states are handled consistently.
→ The UI is easier to debug — every screen reflects its current state.
→ View models become much easier to unit test.

This changed how I build. Instead of asking "which view should I update?", I now ask "what should the current state look like?"

That small shift leads to simpler code and more predictable apps.

Next post: how I tested ConnectHub — and why testing each layer separately gave me the confidence to keep adding features.

Open source — GitHub link in the comments.

Imperative or state-driven — where did your team land? 👇

#iOSDevelopment #SwiftUI #Swift #StateManagement #MVVM #SoftwareArchitecture #OpenSource #MobileDevelopment #LearningInPublic`,
});
