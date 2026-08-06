export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Platform = 'iOS' | 'Android' | 'Cross-platform';

/**
 * Metadata that describes one portfolio project. Defined once per project in
 * `projects/<slug>/project.ts` and merged into every post of that project, so
 * post files never repeat series/project information.
 */
export interface ProjectMeta {
  /** Stable slug, e.g. "movie-explorer". Used in deep links (?project=). */
  id: string;
  /** Display name, shown in the top-right project badge, e.g. "Movie Explorer". */
  name: string;
  /** Project sequence number in your portfolio (Project 01, 02, …). */
  number: number;

  /** Overrides the global series name (BRAND.series) for this project's footer. */
  series?: string;
  /** One-line hook used by the studio's project picker and docs. */
  tagline?: string;
  /** Longer summary — handy for the projectHero layout default. */
  description?: string;

  /** Public links (rendered by project layouts when present). */
  github?: string;
  website?: string;

  /** Optional classification used for filtering / future galleries. */
  difficulty?: Difficulty;
  platform?: Platform;
  concepts?: string[];
}
