import type { ProjectMeta } from '../../types/project';

export const connectHubMeta: ProjectMeta = {
  id: 'connect-hub',
  name: 'ConnectHub',
  number: 2,
  tagline: 'A production-inspired SwiftUI social app exploring scalable architecture.',
  description:
    'An open-source iOS social app — fake auth, offline-first feed, comments, search, bookmarks, notifications, and actor-backed chat — built to practice scalable SwiftUI architecture.',
  github: 'https://github.com/faheemakram/ConnectHub',
  website: 'faheem-ios.vercel.app',
  difficulty: 'Advanced',
  platform: 'iOS',
  concepts: ['SwiftUI', '@Observable', 'Actors', 'SwiftData', 'Protocol DI', 'Swift Testing'],
};
