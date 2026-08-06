import { definePost } from '../../lib/factories';

// 3/8 — Architecture overview: layers, node flow, and the rules that hold it together.
export default definePost({
  title: 'THE ARCHITECTURE',
  highlightWord: 'ARCHITECTURE',
  subtitle: 'A layered architecture where every layer has one responsibility.',
  layout: 'projectOverview',
  quote: "Good architecture makes tomorrow's change easy, not today's code longer.",
  layoutData: {
    folderTree: [
      {
        name: 'Feature',
        highlighted: true,
        children: [
          { name: 'Home' },
          { name: 'Search' },
          { name: 'Favorites' },
          { name: 'Details' },
          { name: 'Settings' },
        ],
      },
    ],
    architectureNodes: ['SwiftUI View', 'ViewModel', 'Use Case', 'Repository', 'Fake Service', 'SwiftData'],
    techSummary: ['SwiftUI', '@Observable', 'MVVM', 'Repository', 'Protocol DI', 'SwiftData'],
    notes: [
      'Views only observe state',
      'Repository hides every data source',
      'Business logic stays out of views',
    ],
  },
  linkedInCaption: `Project 01 • Post 3/8 — Movie Explorer (iOS)

Before writing features, I wanted a project structure that would still make sense after the app grows.

Movie Explorer follows a layered architecture where every layer has one responsibility:

→ SwiftUI views render state.
→ @Observable view models manage UI state.
→ Use Cases hold business actions.
→ Repositories coordinate data.
→ A fake service simulates a real backend.
→ SwiftData provides offline persistence.

The biggest lesson: architecture is less about adding layers and more about defining clear ownership.

When every type has a single responsibility, the project gets easier to test, maintain, and extend.

Next post: how I organized the folders so new features slot in without turning the project into a mess.

🔗 GitHub link in the comments.

How do you decide where a piece of logic belongs? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SoftwareArchitecture #SwiftData #iOSDeveloper #CleanArchitecture #OpenSource #LearningInPublic`,
});
