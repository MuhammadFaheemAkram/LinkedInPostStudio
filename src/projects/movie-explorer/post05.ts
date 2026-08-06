import { definePost } from '../../lib/factories';

// 5/8 — Unidirectional data flow: Presentation → Use Case → Data, state back up.
export default definePost({
  title: 'DATA FLOW',
  highlightWord: 'FLOW',
  subtitle: 'Every user action follows one predictable path.',
  layout: 'architecture',
  quote: 'When data flows in one direction, debugging gets simple.',
  layoutData: {
    left: { title: 'Presentation', items: ['SwiftUI View', '@Observable ViewModel'] },
    right: { title: 'Data', items: ['Repository', 'Fake Service', 'SwiftData'] },
    center:
      'A Use Case bridges them. Favorites are observed from SwiftData as an AsyncStream — the single source of truth.',
  },
  linkedInCaption: `Project 01 • Post 5/8 — Movie Explorer (iOS)

Every user action in Movie Explorer follows one predictable path.

The data flows in a single direction:

SwiftUI View → @Observable ViewModel → Use Case → Repository → Fake Service / SwiftData

…and state flows right back up to the view.

Two things keep this clean:

→ A Use Case sits between the view model and the repository, so screen logic stays thin.
→ Favorites are observed from SwiftData as an AsyncStream — so the local store is the single source of truth, and the UI updates live when it changes.

The payoff: when data only flows one way, debugging stops being a guessing game. You trace any bug straight down the pipeline.

Next post: why I built the whole thing on a fake API — and how the repository made that a strength, not a shortcut.

🔗 GitHub link in the comments.

Unidirectional data flow — how does your stack handle it? 👇

#iOSDevelopment #SwiftUI #Swift #StructuredConcurrency #SoftwareArchitecture #SwiftData #iOSDeveloper #MVVM #OpenSource #LearningInPublic`,
});
