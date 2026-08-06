import { BRAND } from '../brand';
import type { AnyLayoutData, PostDraft, PostLayout, Project, RenderablePost } from '../types/post';
import type { ProjectMeta } from '../types/project';

/**
 * Identity helper for authoring a post. Using it gives you full type-checking
 * and autocompletion on the discriminated union while keeping post files tidy:
 *
 *   export default definePost({ layout: 'code', title: '…', quote: '…', layoutData: { … } });
 */
export function definePost(draft: PostDraft): PostDraft {
  return draft;
}

function padNumber(value: number): string {
  return String(value).padStart(2, '0');
}

/**
 * Merge a project's metadata into its posts.
 *
 * - `postNumber.current` defaults to the post's position (1-based).
 * - `postNumber.total` defaults to the number of posts in the project.
 * - `seriesName` falls back to the project's `series`, then to BRAND.series.
 *
 * Post files therefore never repeat series/project info or manual numbering.
 */
export function defineProject(meta: ProjectMeta, drafts: PostDraft[]): Project {
  const total = drafts.length;

  const posts: RenderablePost[] = drafts.map((draft, index) => {
    const current = draft.postNumber?.current ?? index + 1;
    const resolvedTotal = draft.postNumber?.total ?? total;

    return {
      ...draft,
      id: draft.id ?? `${meta.id}-${padNumber(current)}`,
      postNumber: { current, total: resolvedTotal },
      seriesName: meta.series ?? BRAND.series,
      projectName: meta.name,
      projectNumber: meta.number,
      project: meta,
    } as RenderablePost;
  });

  return { meta, posts };
}

/**
 * Sensible starter content for each layout, used by the editor when you switch
 * a post's layout. Defaults lean iOS/Swift to match the studio's identity.
 */
export function createDefaultLayoutData(layout: PostLayout): AnyLayoutData {
  switch (layout) {
    case 'comparison':
      return {
        left: { title: 'UIKit', body: ['Imperative updates', 'Manual view wiring', 'More boilerplate'] },
        right: { title: 'SwiftUI', body: ['Declarative state', 'Automatic updates', 'Less code'] },
        centerLabel: 'VS',
        favorRight: true,
      };
    case 'architecture':
      return { nodes: ['View', 'ViewModel', 'Repository', 'Service'] };
    case 'flow':
      return {
        steps: [
          { label: 'State' },
          { label: 'View' },
          { label: 'User Action' },
          { label: 'Intent' },
          { label: 'State' },
        ],
      };
    case 'code':
      return {
        language: 'swift',
        filename: 'CounterView.swift',
        code: [
          'struct CounterView: View {',
          '    @State private var count = 0',
          '',
          '    var body: some View {',
          '        Button("Count: \\(count)") {',
          '            count += 1',
          '        }',
          '    }',
          '}',
        ].join('\n'),
        caption: 'State drives the view. No manual refresh.',
      };
    case 'timeline':
      return {
        events: [
          { time: '2018', title: 'Started with UIKit', body: 'Storyboards, delegates, view controllers.' },
          { time: '2026', title: 'All-in on SwiftUI', body: 'Declarative UI with a clean state layer.' },
          { time: 'Next', title: 'Shipping in public', body: 'Real projects, documented end to end.' },
        ],
      };
    case 'reflection':
      return {
        statement: 'The code is only clean when the next change is easier.',
        points: ['Own the state', 'Name the boundary', 'Protect the view'],
      };
    case 'beforeAfter':
      return {
        beforeTitle: 'Before',
        beforeItems: ['Find view', 'Mutate view', 'Reload manually'],
        afterTitle: 'After',
        afterItems: ['Describe state', 'Render view', 'Let SwiftUI update'],
        transitionLabel: 'Mindset Shift',
      };
    case 'decisionMatrix':
      return {
        question: 'Where should loading logic live?',
        options: [
          { title: 'View', pros: ['Quick to start'], cons: ['Hard to test', 'Couples UI + logic'] },
          { title: 'ViewModel', pros: ['Owns screen state', 'Testable'], cons: ['Can grow large'] },
          { title: 'Repository', pros: ['Owns data access'], cons: ['Should not know UI state'] },
        ],
        decision: 'ViewModel owns screen state. Repository owns data access.',
      };
    case 'pyramid':
      return {
        levels: [
          { title: 'Fundamentals', description: 'Language, platform, lifecycle' },
          { title: 'Architecture', description: 'Boundaries and trade-offs' },
          { title: 'Judgment', description: 'Choosing what scales' },
        ],
      };
    case 'checklist':
      return {
        heading: 'Before I call a ViewModel clean:',
        items: [
          'It exposes UI state',
          'It handles user intent',
          'It does not touch views',
          'It delegates data work',
          'It is easy to test',
        ],
      };
    case 'metrics':
      return {
        metrics: [
          { label: 'Testing', before: 'Difficult', after: 'Focused' },
          { label: 'UI Changes', before: 'Risky', after: 'Isolated' },
          { label: 'Data Logic', before: 'Scattered', after: 'Centralized' },
        ],
      };
    case 'quoteHero':
      return {
        heroStatement: 'Being a beginner again is not a weakness.',
        supportText: 'It is a skill senior engineers keep practicing.',
        points: ['Curiosity', 'Humility', 'Consistency'],
      };
    case 'projectHero':
      return {
        description:
          'A production-inspired iOS project built to make modern app architecture visible.',
        techStack: ['SwiftUI', 'MVVM', 'Swift Concurrency', 'Combine'],
        features: ['Clear state ownership', 'Offline-first data', 'Focused test seams'],
      };
    case 'techStack':
      return {
        categories: [
          { title: 'UI', technologies: ['SwiftUI', 'SF Symbols', 'Navigation'] },
          { title: 'Architecture', technologies: ['MVVM', 'Repository', 'DI'] },
          { title: 'Data', technologies: ['async/await', 'URLSession', 'SwiftData'] },
        ],
      };
    case 'folderTree':
      return {
        roots: [
          {
            name: 'Sources',
            children: [{ name: 'Features', highlighted: true }, { name: 'Core' }, { name: 'DesignSystem' }],
          },
        ],
      };
    case 'projectOverview':
      return {
        folderTree: [{ name: 'Features', highlighted: true, children: [{ name: 'Home' }, { name: 'Details' }] }],
        architectureNodes: ['View', 'ViewModel', 'Use Case', 'Repository', 'Service'],
        techSummary: ['SwiftUI', 'MVVM', 'async/await', 'Repository', 'DI', 'SwiftData'],
        notes: ['Views only observe state', 'Repository coordinates data', 'Logic stays out of views'],
      };
    default:
      return layout satisfies never;
  }
}
