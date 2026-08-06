import { definePost } from '../../lib/factories';

// 3/10 — Feature-first folder structure (matches the real ConnectHub/ tree).
export default definePost({
  title: 'PROJECT STRUCTURE',
  highlightWord: 'STRUCTURE',
  subtitle: 'A clear structure keeps a growing codebase easy to navigate.',
  layout: 'folderTree',
  quote: 'A project structure should explain ownership before you open a file.',
  layoutData: {
    roots: [
      {
        name: 'ConnectHub',
        highlighted: true,
        children: [
          { name: 'App', note: 'Root · Auth / Main flows' },
          { name: 'Core', note: 'DesignSystem · Networking · Persistence · Storage' },
          { name: 'Domain', note: 'Model · Repository · UseCase' },
          { name: 'Data', note: 'Mapper · Repository · MessageStore' },
          {
            name: 'Feature',
            highlighted: true,
            children: [
              { name: 'Auth' },
              { name: 'Feed' },
              { name: 'Chat' },
              { name: 'Search' },
              { name: 'Profile' },
              { name: 'Settings' },
            ],
          },
          { name: 'DI', note: 'AppEnvironment' },
        ],
      },
    ],
  },
  linkedInCaption: `📁 ConnectHub — Organizing a Growing iOS Project

As iOS projects grow, finding the right file often gets harder than writing it.

So I thought about organization before adding more features.

Instead of grouping by type, ConnectHub separates responsibilities into clear layers:

→ App → root, and the Auth vs Main flow switch.
→ Core → design system, networking, persistence, storage, navigation.
→ Domain → models, repository protocols, and use cases.
→ Data → mappers, repository implementations, and the actor message store.
→ Feature → self-contained features (Feed, Chat, Profile, Settings…).
→ DI → the AppEnvironment composition root.

Practical benefits:

→ New features have a predictable home.
→ Shared code lives in one place.
→ Business logic stays independent of the UI.
→ Testing is easier because responsibilities are isolated.
→ The project scales without becoming hard to navigate.

No structure is perfect, but a consistent one reduces cognitive load every time you open the project.

Next post: how data moves through ConnectHub — from the view down to SwiftData and the fake services.

Open source — GitHub link in the comments.

Do you organize by feature or by layer? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #CleanArchitecture #SoftwareArchitecture #OpenSource #MobileDevelopment #LearningInPublic`,
});
