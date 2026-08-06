import { definePost } from '../../lib/factories';

// 5/10 — Fake services behind protocols vs direct API integration.
export default definePost({
  title: 'WHY A FAKE API?',
  highlightWord: 'FAKE',
  subtitle: 'Production-style architecture without depending on a real backend.',
  layout: 'comparison',
  quote: 'A learning project should teach architecture, not API integration bugs.',
  layoutData: {
    left: {
      title: 'Direct API',
      body: ['Needs a live backend', 'Flaky responses', 'Hard to test edge cases', 'Network blocks learning'],
    },
    right: {
      title: 'Fake Service',
      body: ['Same protocol contract', 'Predictable responses', 'Easy error simulation', 'Fully offline'],
    },
    centerLabel: 'VS',
    favorRight: true,
  },
  linkedInCaption: `🌐 ConnectHub — Why I Used Fake Services

A question I get often:

"If the app is open source, why not connect a real backend?"

Simple: the goal of ConnectHub was to practice iOS architecture — not backend work.

Instead of calling a real server, I defined service protocols with fake implementations that simulate real network behavior (bundled JSON + Task.sleep delays).

The benefits:

→ The app runs completely offline.
→ Network delays are simulated consistently.
→ Error states are trivial to reproduce and test.
→ Repository logic is identical to a production app.
→ A real URLSession client could drop in later — no UI changes.

The view models and repositories don't know whether data comes from a fake service or a real server. They depend only on protocols.

That separation is one of the biggest advantages of the repository pattern.

For a learning project, it removed unnecessary complexity while still letting me practice production-inspired architecture.

Next post: how ConnectHub combines local storage and remote data for an offline-first experience.

Open source — GitHub link in the comments.

Fake services for learning — smart, or a shortcut? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #RepositoryPattern #SoftwareArchitecture #SwiftData #OpenSource #LearningInPublic`,
});
