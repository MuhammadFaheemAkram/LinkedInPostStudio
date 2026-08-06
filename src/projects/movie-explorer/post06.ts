import { definePost } from '../../lib/factories';

// 6/8 — Fake service behind a protocol: real architecture, no backend required.
export default definePost({
  title: 'FAKE API, REAL DESIGN',
  highlightWord: 'REAL',
  subtitle: 'A fake backend let me perfect the architecture before any real networking.',
  layout: 'comparison',
  quote: 'Build the architecture first. Swap the data source later.',
  layoutData: {
    left: {
      title: 'Fake Service',
      body: ['Bundled JSON', 'Simulated latency', 'Error toggle', 'No API key'],
    },
    right: {
      title: 'MovieService Protocol',
      body: ['One data contract', 'URLSession drops in', 'Callers never change', 'Maps DTO → domain'],
    },
    centerLabel: '→',
    favorRight: true,
  },
  linkedInCaption: `Project 01 • Post 6/8 — Movie Explorer (iOS)

Early on, I decided to build Movie Explorer with a fake API instead of a real movie service.

At first that sounds like a shortcut. It wasn't.

The goal was to learn iOS architecture — not to spend time on API keys, rate limits, and backend availability.

A protocol made it work:

→ The views don't know where data comes from.
→ The view models talk only to a repository.
→ The repository decides between the fake service and SwiftData.
→ FakeMovieService hides behind a MovieService protocol — so a real URLSession client can drop in later with zero changes to callers.

It also made loading, latency, and error states trivial to simulate — no flaky network required.

Sometimes the best way to learn production architecture is to remove production complexity.

In the last two posts: how I tested the app, and the biggest lessons from building it.

🔗 GitHub link in the comments.

Fake API for learning — smart move or shortcut? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #RepositoryPattern #SoftwareArchitecture #SwiftData #iOSDeveloper #OpenSource #LearningInPublic`,
});
