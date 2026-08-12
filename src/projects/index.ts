import type { Project } from '../types/post';
import { movieExplorer } from './movie-explorer';
import { connectHub } from './connect-hub';
import { spendWise } from './spend-wise';
import { devJourney } from './dev-journey';
import { momentum } from './momentum';

/**
 * The project registry — the single list the studio renders from.
 *
 * To add a project:
 *   1. Copy `src/projects/_template` to `src/projects/<your-slug>`.
 *   2. Fill in `project.ts` and the post files.
 *   3. Import its `index.ts` here and add it to the array below.
 *
 * Projects appear in the picker in the order listed here.
 */
export const projects: Project[] = [
  movieExplorer,
  connectHub,
  spendWise,
  devJourney,
  momentum,
  // import { yourProject } from './your-project'; then add it here.
];

export const projectsById = new Map(projects.map((project) => [project.meta.id, project]));
