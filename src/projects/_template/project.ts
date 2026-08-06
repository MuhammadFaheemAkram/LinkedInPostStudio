import type { ProjectMeta } from '../../types/project';

/**
 * Project metadata — defined once, merged into every post automatically.
 * `series` is optional; leave it out to inherit BRAND.series ("Modern iOS in Practice").
 */
export const templateProjectMeta: ProjectMeta = {
  id: 'template-project', // URL slug — used by ?project=<id>
  name: 'Template Project', // shown in the top-right project badge
  number: 99, // Project 99 — set your real portfolio number
  tagline: 'One line describing what this project is.',
  description: 'A longer summary used as the default projectHero description.',
  github: 'https://github.com/faheemakram/your-repo',
  website: 'faheem-ios.vercel.app',
  difficulty: 'Intermediate',
  platform: 'iOS',
  concepts: ['SwiftUI', 'MVVM'],
};
