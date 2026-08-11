import type { ProjectMeta } from './project';

/** Every layout the renderer understands. */
export type PostLayout =
  | 'comparison'
  | 'architecture'
  | 'flow'
  | 'code'
  | 'timeline'
  | 'reflection'
  | 'beforeAfter'
  | 'decisionMatrix'
  | 'pyramid'
  | 'checklist'
  | 'metrics'
  | 'quoteHero'
  | 'projectHero'
  | 'techStack'
  | 'folderTree'
  | 'projectOverview'
  | 'pitfall'
  | 'dataModel'
  | 'chartShowcase'
  | 'statHighlight'
  | 'stateMachine'
  | 'sequence';

/** Languages Prism is configured to highlight. */
export type SupportedLanguage = 'swift' | 'kotlin' | 'java' | 'dart' | 'typescript';

export interface PostNumber {
  current: number;
  total: number;
}

/* ------------------------------------------------------------------ layout data */

export interface CardContent {
  title: string;
  body: string | string[];
}

export interface ComparisonLayoutData {
  left: CardContent;
  right: CardContent;
  centerLabel?: string;
  /** When true, the right card gets the accent treatment (the "winner"). */
  favorRight?: boolean;
}

export interface ArchitectureColumn {
  title: string;
  items: string[];
}

export interface ArchitectureLayoutData {
  left?: ArchitectureColumn;
  right?: ArchitectureColumn;
  center?: string;
  /** Simple single-column vertical flow (UI -> ViewModel -> …). */
  nodes?: string[];
}

export interface FlowStep {
  label: string;
  detail?: string;
}

export interface FlowLayoutData {
  steps: FlowStep[];
}

export interface CodeLayoutData {
  language: SupportedLanguage;
  code: string;
  filename?: string;
  caption?: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  body: string;
}

export interface TimelineLayoutData {
  events: TimelineEvent[];
}

export interface ReflectionLayoutData {
  statement: string;
  points: string[];
}

export interface BeforeAfterLayoutData {
  beforeTitle: string;
  beforeItems: string[];
  afterTitle: string;
  afterItems: string[];
  transitionLabel?: string;
}

export interface DecisionOption {
  title: string;
  pros: string[];
  cons?: string[];
}

export interface DecisionMatrixLayoutData {
  question: string;
  options: DecisionOption[];
  decision: string;
}

export interface PyramidLevel {
  title: string;
  description?: string;
}

export interface PyramidLayoutData {
  levels: PyramidLevel[];
}

export interface ChecklistLayoutData {
  heading?: string;
  items: string[];
}

export interface MetricItem {
  label: string;
  before: string;
  after: string;
}

export interface MetricsLayoutData {
  metrics: MetricItem[];
}

export interface QuoteHeroLayoutData {
  heroStatement: string;
  supportText?: string;
  points?: string[];
}

export interface ProjectHeroLayoutData {
  description: string;
  techStack: string[];
  features: string[];
}

export interface TechStackCategory {
  title: string;
  technologies: string[];
}

export interface TechStackLayoutData {
  categories: TechStackCategory[];
}

export interface FolderNode {
  name: string;
  children?: FolderNode[];
  highlighted?: boolean;
  note?: string;
}

export interface FolderTreeLayoutData {
  roots: FolderNode[];
}

export interface ProjectOverviewLayoutData {
  folderTree: FolderNode[];
  architectureNodes: string[];
  techSummary: string[];
  notes: string[];
}

/** One stage of a pitfall story (trap → consequence → fix). */
export interface PitfallStage {
  title: string;
  body: string;
}

/**
 * "The trap / why it breaks / the fix" — for the gotcha every project has.
 * The fix stage carries the accent; the trap is marked with a warning tone.
 */
export interface PitfallLayoutData {
  trap: PitfallStage;
  consequence: PitfallStage;
  fix: PitfallStage;
  note?: string;
}

export interface DataModelEntity {
  name: string;
  /** Field lines, rendered in mono, e.g. "amount: Money". */
  fields: string[];
  /** Highlights this entity as the centre of the model. */
  primary?: boolean;
}

export interface DataModelRelation {
  from: string;
  to: string;
  label?: string;
}

/** Entity cards + relationships + the rules that govern them. */
export interface DataModelLayoutData {
  entities: DataModelEntity[];
  relations?: DataModelRelation[];
  rules?: string[];
}

export type ChartKind = 'bar' | 'donut' | 'line';

export interface ChartPoint {
  label: string;
  value: number;
}

export interface ChartPanel {
  kind: ChartKind;
  title: string;
  caption?: string;
  /** Prefix shown before values, e.g. "$". */
  unit?: string;
  points: ChartPoint[];
}

/**
 * Small multiples of static charts (bar / donut / line).
 *
 * Series colours come from a CVD-validated categorical order (see
 * `CHART_SERIES_COLORS` in ChartShowcaseLayout) and every series is
 * direct-labelled, so identity is never carried by colour alone.
 */
export interface ChartShowcaseLayoutData {
  panels: ChartPanel[];
  note?: string;
}

export interface StatItem {
  /** Short, punchy value — this is set very large, so keep it to a few chars. */
  value: string;
  label: string;
}

/** Big headline numbers — the most legible layout at mobile feed scale. */
export interface StatHighlightLayoutData {
  stats: StatItem[];
  points?: string[];
}

export interface StateNode {
  name: string;
  detail?: string;
  /** `initial` gets a muted treatment, `active` carries the accent. */
  kind?: 'initial' | 'normal' | 'active';
}

export interface StateTransition {
  from: string;
  to: string;
  label: string;
}

/** States plus the labelled transitions between them. */
export interface StateMachineLayoutData {
  states: StateNode[];
  transitions: StateTransition[];
  note?: string;
}

export interface SequenceStep {
  /** Must match one of `actors`; decides which side the step sits on. */
  from: string;
  to: string;
  label: string;
  detail?: string;
  /** Optional timing badge, e.g. "300ms". */
  timing?: string;
}

/** Two-party choreography over time — reads like a transcript. */
export interface SequenceLayoutData {
  actors: string[];
  steps: SequenceStep[];
  note?: string;
}

/** Union of every layout's data shape (used for editor defaults). */
export type AnyLayoutData =
  | ComparisonLayoutData
  | ArchitectureLayoutData
  | FlowLayoutData
  | CodeLayoutData
  | TimelineLayoutData
  | ReflectionLayoutData
  | BeforeAfterLayoutData
  | DecisionMatrixLayoutData
  | PyramidLayoutData
  | ChecklistLayoutData
  | MetricsLayoutData
  | QuoteHeroLayoutData
  | ProjectHeroLayoutData
  | TechStackLayoutData
  | FolderTreeLayoutData
  | ProjectOverviewLayoutData
  | PitfallLayoutData
  | DataModelLayoutData
  | ChartShowcaseLayoutData
  | StatHighlightLayoutData
  | StateMachineLayoutData
  | SequenceLayoutData;

/* ------------------------------------------------------------------ post model */

interface BasePost<L extends PostLayout, D> {
  /** The eye-catching hook. Use \n for explicit line breaks. */
  title: string;
  /** One word (or phrase) inside the title rendered in the accent colour. */
  highlightWord?: string;
  subtitle?: string;
  layout: L;
  /** Always-present quote near the bottom. */
  quote: string;
  layoutData: D;
  /**
   * Ready-to-publish LinkedIn caption (plain text + hashtags). Shown in the
   * studio beside the graphic with a copy button; it is NEVER part of the
   * exported image. Keep it LinkedIn-friendly: no markdown (bold/italic/bullets)
   * — use line breaks, emojis, and arrows for structure.
   */
  linkedInCaption?: string;
}

/** Discriminated union of post *content* (no project metadata). */
export type PostContent =
  | BasePost<'comparison', ComparisonLayoutData>
  | BasePost<'architecture', ArchitectureLayoutData>
  | BasePost<'flow', FlowLayoutData>
  | BasePost<'code', CodeLayoutData>
  | BasePost<'timeline', TimelineLayoutData>
  | BasePost<'reflection', ReflectionLayoutData>
  | BasePost<'beforeAfter', BeforeAfterLayoutData>
  | BasePost<'decisionMatrix', DecisionMatrixLayoutData>
  | BasePost<'pyramid', PyramidLayoutData>
  | BasePost<'checklist', ChecklistLayoutData>
  | BasePost<'metrics', MetricsLayoutData>
  | BasePost<'quoteHero', QuoteHeroLayoutData>
  | BasePost<'projectHero', ProjectHeroLayoutData>
  | BasePost<'techStack', TechStackLayoutData>
  | BasePost<'folderTree', FolderTreeLayoutData>
  | BasePost<'projectOverview', ProjectOverviewLayoutData>
  | BasePost<'pitfall', PitfallLayoutData>
  | BasePost<'dataModel', DataModelLayoutData>
  | BasePost<'chartShowcase', ChartShowcaseLayoutData>
  | BasePost<'statHighlight', StatHighlightLayoutData>
  | BasePost<'stateMachine', StateMachineLayoutData>
  | BasePost<'sequence', SequenceLayoutData>;

/**
 * What a post file authors. Just the content — the post's number is derived
 * from its position in the project (override `postNumber` only for special
 * cases like a bridge post).
 */
export type PostDraft = PostContent & {
  id?: string;
  postNumber?: PostNumber;
};

/** Project identity injected into every post at load time. */
export interface ResolvedProjectFields {
  id: string;
  postNumber: PostNumber;
  seriesName: string;
  projectName: string;
  projectNumber: number;
  project: ProjectMeta;
}

/**
 * A fully-resolved post: content + project identity. This is what the renderer
 * and editor consume. Because it's `PostContent & (…)`, the `layout`
 * discriminant still narrows `layoutData`.
 */
export type RenderablePost = PostContent & ResolvedProjectFields;

/** A project plus its resolved posts. */
export interface Project {
  meta: ProjectMeta;
  posts: RenderablePost[];
}
