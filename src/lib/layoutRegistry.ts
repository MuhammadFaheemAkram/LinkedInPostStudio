import type { PostLayout } from '../types/post';

export type LayoutCategory = 'Career' | 'Engineering' | 'Architecture' | 'Project' | 'Code' | 'Reflection';

export interface LayoutInfo {
  id: PostLayout;
  name: string;
  description: string;
  category: LayoutCategory;
}

/**
 * Central description of every layout. Powers the editor's layout picker and
 * doubles as living documentation / a future layout gallery.
 */
export const layouts: LayoutInfo[] = [
  { id: 'projectHero', name: 'Project Hero', description: 'Open a project: pitch, stack, features.', category: 'Project' },
  { id: 'projectOverview', name: 'Project Overview', description: 'Folder tree + architecture + notes in one.', category: 'Project' },
  { id: 'techStack', name: 'Tech Stack', description: 'Grouped technologies by concern.', category: 'Project' },
  { id: 'folderTree', name: 'Folder Tree', description: 'Highlight how the project is organised.', category: 'Project' },
  { id: 'architecture', name: 'Architecture', description: 'Vertical layer flow, or two columns + center.', category: 'Architecture' },
  { id: 'flow', name: 'Flow', description: 'A pipeline / unidirectional data loop.', category: 'Architecture' },
  { id: 'decisionMatrix', name: 'Decision Matrix', description: 'Weigh options, then commit to a decision.', category: 'Architecture' },
  { id: 'dataModel', name: 'Data Model', description: 'Entities, relationships, and the rules between them.', category: 'Architecture' },
  { id: 'comparison', name: 'Comparison', description: 'Two approaches side by side.', category: 'Engineering' },
  { id: 'pitfall', name: 'Pitfall', description: 'The trap, why it breaks, and the fix.', category: 'Engineering' },
  { id: 'chartShowcase', name: 'Chart Showcase', description: 'Small multiples of bar / donut / line charts.', category: 'Project' },
  { id: 'beforeAfter', name: 'Before / After', description: 'A transformation or mindset shift.', category: 'Engineering' },
  { id: 'metrics', name: 'Metrics', description: 'Before/after impact across a few axes.', category: 'Engineering' },
  { id: 'checklist', name: 'Checklist', description: 'Rules, lessons, or a practical list.', category: 'Engineering' },
  { id: 'code', name: 'Code', description: 'Syntax-highlighted snippet with a caption.', category: 'Code' },
  { id: 'timeline', name: 'Timeline', description: 'A journey across dates or milestones.', category: 'Career' },
  { id: 'pyramid', name: 'Pyramid', description: 'Layered principles from foundation to outcome.', category: 'Engineering' },
  { id: 'reflection', name: 'Reflection', description: 'A statement with three supporting points.', category: 'Reflection' },
  { id: 'quoteHero', name: 'Quote Hero', description: 'One dominant statement, lots of whitespace.', category: 'Reflection' },
];

export const layoutIds: PostLayout[] = layouts.map((layout) => layout.id);

const layoutsById = new Map<PostLayout, LayoutInfo>(layouts.map((layout) => [layout.id, layout]));

export function layoutInfo(id: PostLayout): LayoutInfo {
  const info = layoutsById.get(id);
  if (!info) {
    throw new Error(`Unknown layout: ${id}`);
  }
  return info;
}
