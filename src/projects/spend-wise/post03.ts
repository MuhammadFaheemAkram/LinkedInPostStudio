import { definePost } from '../../lib/factories';

// 3/8 — Feature-first folder structure (matches the real SpendWise/ tree).
export default definePost({
  title: 'PROJECT STRUCTURE',
  highlightWord: 'STRUCTURE',
  subtitle: 'A clear structure keeps a detail-heavy finance app easy to navigate.',
  layout: 'folderTree',
  quote: 'A project structure should explain ownership before you open a file.',
  layoutData: {
    roots: [
      {
        name: 'SpendWise',
        highlighted: true,
        children: [
          { name: 'App', note: 'Root · Navigation' },
          { name: 'Core', note: 'DesignSystem · Networking · Persistence · Storage' },
          { name: 'Domain', note: 'Model · Repository · UseCase' },
          { name: 'Data', note: 'Mapper · Repository' },
          {
            name: 'Feature',
            highlighted: true,
            children: [
              { name: 'Dashboard' },
              { name: 'Transactions' },
              { name: 'Budgets' },
              { name: 'Reports' },
              { name: 'Recurring' },
              { name: 'Settings' },
            ],
          },
          { name: 'DI', note: 'AppEnvironment' },
        ],
      },
    ],
  },
  linkedInCaption: `📁 SpendWise — Organizing a Finance App

A finance app has a lot of moving parts — transactions, budgets, categories, accounts, reports, recurring payments.

Without structure, that turns into chaos fast.

So SpendWise separates responsibilities into clear layers:

→ App → root and navigation setup.
→ Core → design system, networking, persistence, storage.
→ Domain → models, repository protocols, and use cases (the money rules).
→ Data → mappers and repository implementations.
→ Feature → self-contained screens (Dashboard, Transactions, Budgets, Reports…).
→ DI → the AppEnvironment composition root.

Why it helps:

→ Every feature has a predictable home.
→ Business rules live in the domain, not the UI.
→ New features slot in without touching unrelated code.
→ The math is isolated, so it's easy to test.

For a domain as detail-heavy as personal finance, a consistent structure is what keeps it maintainable.

Next post: how data flows through the app, from the view down to SwiftData.

Open source — GitHub link in the comments.

Feature-first or layer-first — how do you organize? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #CleanArchitecture #SoftwareArchitecture #SwiftData #OpenSource #LearningInPublic`,
});
