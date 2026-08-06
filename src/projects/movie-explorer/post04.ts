import { definePost } from '../../lib/factories';

// 4/8 — Feature-first folder structure (matches the real MovieExplorer/ tree).
export default definePost({
  title: 'PROJECT STRUCTURE',
  highlightWord: 'STRUCTURE',
  subtitle: 'A feature-first layout that keeps responsibilities clear as the app grows.',
  layout: 'folderTree',
  quote: 'A well-organized project explains itself before you read the code.',
  layoutData: {
    roots: [
      {
        name: 'MovieExplorer',
        highlighted: true,
        children: [
          { name: 'App', note: '@main · RootView' },
          {
            name: 'Feature',
            highlighted: true,
            children: [
              { name: 'Home', note: 'Trending grid' },
              { name: 'Search', note: 'Debounced search' },
              { name: 'Favorites', note: 'Offline library' },
              { name: 'Details', note: 'Movie details' },
              { name: 'Settings', note: 'Preferences' },
            ],
          },
          { name: 'Domain', note: 'Model · Repository · UseCase' },
          { name: 'Data', note: 'Mapper · Repository' },
          { name: 'Core', note: 'DesignSystem · Networking · Persistence' },
          { name: 'DI', note: 'AppEnvironment' },
        ],
      },
    ],
  },
  linkedInCaption: `Project 01 • Post 4/8 — Movie Explorer (iOS)

One of the biggest improvements while building Movie Explorer wasn't a feature — it was organizing the project properly.

Instead of grouping files by type, I split the app into clear layers and feature modules:

→ Feature → screens and UI logic (Home, Search, Favorites, Details, Settings)
→ Domain → models, repository protocols, use cases
→ Data → repository implementations and mappers
→ Core → design system, networking, persistence, navigation
→ DI → the AppEnvironment composition root

This makes code easy to locate, responsibilities obvious, and new features safe to add without touching unrelated parts.

As an app grows, clear boundaries matter far more than a small folder tree.

Next post: the repository pattern — how it coordinates data between the fake service, SwiftData, and the UI.

🔗 GitHub link in the comments.

Do you organize by feature or by layer? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #CleanArchitecture #SoftwareArchitecture #iOSDeveloper #OpenSource #LearningInPublic #SwiftData`,
});
