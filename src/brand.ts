import type { SupportedLanguage } from './types/post';

/**
 * Single source of truth for the studio's identity.
 *
 * Everything that is *constant across every post* lives here — the footer
 * name/role/link, the header badges, and the default series name. Individual
 * projects may override `series` in their `project.ts`.
 *
 * Changing your byline or re-branding a new series? Edit this file only.
 */
export const BRAND = {
  /** Footer author name. */
  author: 'Faheem Akram',
  /** Footer role line. */
  role: 'Senior iOS Engineer',
  /** Footer portfolio link (displayed lowercase). */
  website: 'faheem-ios.vercel.app',

  /** Permanent series name shown in the footer (a project may override it). */
  series: 'Modern iOS in Practice',

  /** Top-left pill — the standing brand for this whole body of work. */
  headerBadgePrimary: 'Engineering Portfolio',
  /** Second pill — your standing credential. */
  headerBadgeSecondary: '8 Years in Mobile Development',

  /** Default language for new Code layouts. */
  defaultLanguage: 'swift' as SupportedLanguage,
} as const;

export type Brand = typeof BRAND;
