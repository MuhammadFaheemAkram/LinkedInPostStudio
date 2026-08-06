import type { ProjectMeta } from '../../types/project';

export const movieExplorerMeta: ProjectMeta = {
  id: 'movie-explorer',
  name: 'Movie Explorer',
  number: 1,
  tagline: 'A production-style SwiftUI app for browsing trending films.',
  description:
    'An offline-capable iOS app featuring trending movies, search, favorites, and details — built on a clean MVVM architecture with a swappable networking layer.',
  github: 'https://github.com/faheemakram/movie-explorer',
  website: 'faheem-ios.vercel.app',
  difficulty: 'Intermediate',
  platform: 'iOS',
  concepts: ['SwiftUI', '@Observable', 'async/await', 'SwiftData', 'Protocol DI', 'Swift Testing'],
};
