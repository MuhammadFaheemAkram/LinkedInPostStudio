import { ArrowDownTrayIcon, RectangleStackIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { createDefaultLayoutData } from '../lib/factories';
import { layouts as layoutRegistry } from '../lib/layoutRegistry';
import type {
  AnyLayoutData,
  ArchitectureLayoutData,
  BeforeAfterLayoutData,
  ChartKind,
  ChartPanel,
  ChartShowcaseLayoutData,
  DataModelEntity,
  DataModelLayoutData,
  DataModelRelation,
  PitfallLayoutData,
  SequenceLayoutData,
  SequenceStep,
  StateMachineLayoutData,
  StateNode,
  StateTransition,
  StatHighlightLayoutData,
  StatItem,
  ChecklistLayoutData,
  CodeLayoutData,
  ComparisonLayoutData,
  DecisionMatrixLayoutData,
  DecisionOption,
  FlowLayoutData,
  FolderNode,
  MetricsLayoutData,
  PostLayout,
  Project,
  ProjectHeroLayoutData,
  ProjectOverviewLayoutData,
  PyramidLayoutData,
  QuoteHeroLayoutData,
  ReflectionLayoutData,
  RenderablePost,
  SupportedLanguage,
  TechStackLayoutData,
  TimelineLayoutData,
} from '../types/post';

const languages: SupportedLanguage[] = ['swift', 'kotlin', 'java', 'dart', 'typescript'];

const layoutCategories = Array.from(new Set(layoutRegistry.map((layout) => layout.category)));

interface EditorPanelProps {
  projects: Project[];
  projectIndex: number;
  postIndex: number;
  post: RenderablePost;
  onSelectProject: (index: number) => void;
  onSelectPost: (index: number) => void;
  onPostChange: (post: RenderablePost) => void;
  onExport: () => void;
  onExportAll: () => void;
  exportStatus: string;
}

/* --------------------------------------------------------------- text helpers */

function linesToText(lines: string[]) {
  return lines.join('\n');
}

function textToLines(value: string) {
  return value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function splitListCell(value: string) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function cardBodyToText(body: string | string[]) {
  return Array.isArray(body) ? linesToText(body) : body;
}

function parseTimeline(value: string): TimelineLayoutData['events'] {
  return textToLines(value).map((line) => {
    const [time = '', title = '', body = ''] = line.split('|').map((part) => part.trim());
    return { time, title, body };
  });
}

function formatTimeline(events: TimelineLayoutData['events']) {
  return events.map((event) => `${event.time} | ${event.title} | ${event.body}`).join('\n');
}

function parseDecisionOptions(value: string): DecisionOption[] {
  return textToLines(value).map((line) => {
    const [title = '', pros = '', cons = ''] = line.split('|').map((part) => part.trim());
    return { title, pros: splitListCell(pros), cons: splitListCell(cons) };
  });
}

function formatDecisionOptions(options: DecisionOption[]) {
  return options
    .map((option) => `${option.title} | ${option.pros.join(', ')} | ${(option.cons ?? []).join(', ')}`)
    .join('\n');
}

function parsePyramidLevels(value: string): PyramidLayoutData['levels'] {
  return textToLines(value).map((line) => {
    const [title = '', description = ''] = line.split('|').map((part) => part.trim());
    return { title, description };
  });
}

function formatPyramidLevels(levels: PyramidLayoutData['levels']) {
  return levels.map((level) => `${level.title} | ${level.description ?? ''}`).join('\n');
}

function parseMetrics(value: string): MetricsLayoutData['metrics'] {
  return textToLines(value).map((line) => {
    const [label = '', before = '', after = ''] = line.split('|').map((part) => part.trim());
    return { label, before, after };
  });
}

function formatMetrics(metrics: MetricsLayoutData['metrics']) {
  return metrics.map((metric) => `${metric.label} | ${metric.before} | ${metric.after}`).join('\n');
}

function parseCategories(value: string): TechStackLayoutData['categories'] {
  return textToLines(value).map((line) => {
    const [title = '', techs = ''] = line.split('|').map((part) => part.trim());
    return { title, technologies: splitListCell(techs) };
  });
}

function formatCategories(categories: TechStackLayoutData['categories']) {
  return categories.map((category) => `${category.title} | ${category.technologies.join(', ')}`).join('\n');
}

/** Entities: `Name * | field, field` — a trailing `*` on the name marks the primary entity. */
function parseEntities(value: string): DataModelEntity[] {
  return textToLines(value).map((line) => {
    const [rawName = '', fields = ''] = line.split('|').map((part) => part.trim());
    const primary = rawName.endsWith('*');
    return {
      name: primary ? rawName.slice(0, -1).trim() : rawName,
      fields: splitListCell(fields),
      ...(primary ? { primary: true } : {}),
    };
  });
}

function formatEntities(entities: DataModelEntity[]) {
  return entities
    .map((entity) => `${entity.name}${entity.primary ? ' *' : ''} | ${entity.fields.join(', ')}`)
    .join('\n');
}

/** Relations: `From > To | label` */
function parseRelations(value: string): DataModelRelation[] {
  return textToLines(value).map((line) => {
    const [pair = '', label = ''] = line.split('|').map((part) => part.trim());
    const [from = '', to = ''] = pair.split('>').map((part) => part.trim());
    return { from, to, ...(label ? { label } : {}) };
  });
}

function formatRelations(relations: DataModelRelation[]) {
  return relations.map((r) => `${r.from} > ${r.to}${r.label ? ` | ${r.label}` : ''}`).join('\n');
}

/** Panels: `kind | title | unit | label:value, label:value` */
function parsePanels(value: string): ChartPanel[] {
  return textToLines(value).map((line) => {
    const [kind = 'bar', title = '', unit = '', points = ''] = line.split('|').map((part) => part.trim());
    return {
      kind: (['bar', 'donut', 'line'].includes(kind) ? kind : 'bar') as ChartKind,
      title,
      ...(unit ? { unit } : {}),
      points: splitListCell(points).map((entry) => {
        const [label = '', raw = ''] = entry.split(':').map((part) => part.trim());
        return { label, value: Number(raw) || 0 };
      }),
    };
  });
}

function formatPanels(panels: ChartPanel[]) {
  return panels
    .map(
      (panel) =>
        `${panel.kind} | ${panel.title} | ${panel.unit ?? ''} | ${panel.points
          .map((point) => `${point.label}:${point.value}`)
          .join(', ')}`,
    )
    .join('\n');
}

/** Indentation tree: 2 spaces per level, trailing `*` = highlighted, ` // note`. */
function parseTree(value: string): FolderNode[] {
  const roots: FolderNode[] = [];
  const stack: { node: FolderNode; depth: number }[] = [];

  value.split('\n').forEach((rawLine) => {
    if (!rawLine.trim()) {
      return;
    }
    const indent = rawLine.match(/^ */)?.[0].length ?? 0;
    const depth = Math.floor(indent / 2);
    let name = rawLine.trim();
    let note: string | undefined;
    let highlighted = false;

    const noteSplit = name.split('//');
    if (noteSplit.length > 1) {
      name = noteSplit[0].trim();
      note = noteSplit.slice(1).join('//').trim();
    }
    if (name.endsWith('*')) {
      highlighted = true;
      name = name.slice(0, -1).trim();
    }

    const node: FolderNode = { name, ...(note ? { note } : {}), ...(highlighted ? { highlighted } : {}) };

    while (stack.length > 0 && stack[stack.length - 1].depth >= depth) {
      stack.pop();
    }
    if (stack.length === 0) {
      roots.push(node);
    } else {
      const parent = stack[stack.length - 1].node;
      parent.children = parent.children ?? [];
      parent.children.push(node);
    }
    stack.push({ node, depth });
  });

  return roots;
}

function formatTree(nodes: FolderNode[], depth = 0): string {
  return nodes
    .map((node) => {
      const indent = '  '.repeat(depth);
      const marker = node.highlighted ? ' *' : '';
      const note = node.note ? ` // ${node.note}` : '';
      const self = `${indent}${node.name}${marker}${note}`;
      const children = node.children && node.children.length > 0 ? `\n${formatTree(node.children, depth + 1)}` : '';
      return `${self}${children}`;
    })
    .join('\n');
}

/* -------------------------------------------------------------- field editors */

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="editor-label">{label}</span>
      {children}
      {hint ? <span className="editor-hint">{hint}</span> : null}
    </label>
  );
}

function ArchitectureFields({
  data,
  onChange,
}: {
  data: ArchitectureLayoutData;
  onChange: (data: ArchitectureLayoutData) => void;
}) {
  const leftItems = data.left?.items ?? [];
  const rightItems = data.right?.items ?? [];

  return (
    <>
      <Field label="Vertical flow nodes" hint="One node per line. Leave blank to use the two-column mode below.">
        <textarea
          className="editor-input editor-textarea"
          value={linesToText(data.nodes ?? [])}
          onChange={(event) => onChange({ nodes: textToLines(event.target.value), center: data.center })}
        />
      </Field>
      <Field label="Left title">
        <input
          className="editor-input"
          value={data.left?.title ?? ''}
          onChange={(event) =>
            onChange({ ...data, left: { title: event.target.value, items: leftItems }, nodes: undefined })
          }
        />
      </Field>
      <Field label="Left items">
        <textarea
          className="editor-input editor-textarea"
          value={linesToText(leftItems)}
          onChange={(event) =>
            onChange({
              ...data,
              left: { title: data.left?.title ?? 'Before', items: textToLines(event.target.value) },
              nodes: undefined,
            })
          }
        />
      </Field>
      <Field label="Right title">
        <input
          className="editor-input"
          value={data.right?.title ?? ''}
          onChange={(event) =>
            onChange({ ...data, right: { title: event.target.value, items: rightItems }, nodes: undefined })
          }
        />
      </Field>
      <Field label="Right items">
        <textarea
          className="editor-input editor-textarea"
          value={linesToText(rightItems)}
          onChange={(event) =>
            onChange({
              ...data,
              right: { title: data.right?.title ?? 'After', items: textToLines(event.target.value) },
              nodes: undefined,
            })
          }
        />
      </Field>
      <Field label="Center statement">
        <textarea
          className="editor-input editor-textarea"
          value={data.center ?? ''}
          onChange={(event) => onChange({ ...data, center: event.target.value })}
        />
      </Field>
    </>
  );
}

function LayoutDataFields({
  post,
  onChange,
}: {
  post: RenderablePost;
  onChange: (data: AnyLayoutData) => void;
}) {
  switch (post.layout) {
    case 'comparison': {
      const data: ComparisonLayoutData = post.layoutData;
      return (
        <>
          <Field label="Left title">
            <input
              className="editor-input"
              value={data.left.title}
              onChange={(event) => onChange({ ...data, left: { ...data.left, title: event.target.value } })}
            />
          </Field>
          <Field label="Left body" hint="One bullet per line.">
            <textarea
              className="editor-input editor-textarea"
              value={cardBodyToText(data.left.body)}
              onChange={(event) => onChange({ ...data, left: { ...data.left, body: textToLines(event.target.value) } })}
            />
          </Field>
          <Field label="Center label">
            <input
              className="editor-input"
              value={data.centerLabel ?? ''}
              onChange={(event) => onChange({ ...data, centerLabel: event.target.value })}
            />
          </Field>
          <Field label="Right title">
            <input
              className="editor-input"
              value={data.right.title}
              onChange={(event) => onChange({ ...data, right: { ...data.right, title: event.target.value } })}
            />
          </Field>
          <Field label="Right body" hint="One bullet per line.">
            <textarea
              className="editor-input editor-textarea"
              value={cardBodyToText(data.right.body)}
              onChange={(event) => onChange({ ...data, right: { ...data.right, body: textToLines(event.target.value) } })}
            />
          </Field>
          <label className="flex items-center gap-3 text-sm font-medium text-post-white">
            <input
              type="checkbox"
              checked={Boolean(data.favorRight)}
              onChange={(event) => onChange({ ...data, favorRight: event.target.checked })}
            />
            Highlight the right card (the winner)
          </label>
        </>
      );
    }

    case 'architecture':
      return <ArchitectureFields data={post.layoutData} onChange={onChange} />;

    case 'flow': {
      const data: FlowLayoutData = post.layoutData;
      return (
        <Field label="Steps" hint="One step per line.">
          <textarea
            className="editor-input editor-textarea"
            value={data.steps.map((step) => step.label).join('\n')}
            onChange={(event) => onChange({ steps: textToLines(event.target.value).map((label) => ({ label })) })}
          />
        </Field>
      );
    }

    case 'code': {
      const data: CodeLayoutData = post.layoutData;
      return (
        <>
          <Field label="Language">
            <select
              className="editor-input"
              value={data.language}
              onChange={(event) => onChange({ ...data, language: event.target.value as SupportedLanguage })}
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Filename">
            <input
              className="editor-input"
              value={data.filename ?? ''}
              onChange={(event) => onChange({ ...data, filename: event.target.value })}
            />
          </Field>
          <Field label="Code">
            <textarea
              className="editor-input min-h-60 resize-y font-mono"
              value={data.code}
              onChange={(event) => onChange({ ...data, code: event.target.value })}
            />
          </Field>
          <Field label="Caption">
            <textarea
              className="editor-input editor-textarea"
              value={data.caption ?? ''}
              onChange={(event) => onChange({ ...data, caption: event.target.value })}
            />
          </Field>
        </>
      );
    }

    case 'timeline': {
      const data: TimelineLayoutData = post.layoutData;
      return (
        <Field label="Events" hint="One per line — time | title | body">
          <textarea
            className="editor-input min-h-52 resize-y"
            value={formatTimeline(data.events)}
            onChange={(event) => onChange({ events: parseTimeline(event.target.value) })}
          />
        </Field>
      );
    }

    case 'reflection': {
      const data: ReflectionLayoutData = post.layoutData;
      return (
        <>
          <Field label="Statement">
            <textarea
              className="editor-input editor-textarea"
              value={data.statement}
              onChange={(event) => onChange({ ...data, statement: event.target.value })}
            />
          </Field>
          <Field label="Points" hint="Three points work best. One per line.">
            <textarea
              className="editor-input editor-textarea"
              value={linesToText(data.points)}
              onChange={(event) => onChange({ ...data, points: textToLines(event.target.value) })}
            />
          </Field>
        </>
      );
    }

    case 'beforeAfter': {
      const data: BeforeAfterLayoutData = post.layoutData;
      return (
        <>
          <Field label="Before title">
            <input
              className="editor-input"
              value={data.beforeTitle}
              onChange={(event) => onChange({ ...data, beforeTitle: event.target.value })}
            />
          </Field>
          <Field label="Before items" hint="One per line.">
            <textarea
              className="editor-input editor-textarea"
              value={linesToText(data.beforeItems)}
              onChange={(event) => onChange({ ...data, beforeItems: textToLines(event.target.value) })}
            />
          </Field>
          <Field label="Transition label">
            <input
              className="editor-input"
              value={data.transitionLabel ?? ''}
              onChange={(event) => onChange({ ...data, transitionLabel: event.target.value })}
            />
          </Field>
          <Field label="After title">
            <input
              className="editor-input"
              value={data.afterTitle}
              onChange={(event) => onChange({ ...data, afterTitle: event.target.value })}
            />
          </Field>
          <Field label="After items" hint="One per line.">
            <textarea
              className="editor-input editor-textarea"
              value={linesToText(data.afterItems)}
              onChange={(event) => onChange({ ...data, afterItems: textToLines(event.target.value) })}
            />
          </Field>
        </>
      );
    }

    case 'decisionMatrix': {
      const data: DecisionMatrixLayoutData = post.layoutData;
      return (
        <>
          <Field label="Question">
            <textarea
              className="editor-input editor-textarea"
              value={data.question}
              onChange={(event) => onChange({ ...data, question: event.target.value })}
            />
          </Field>
          <Field label="Options" hint="One per line — title | pro, pro | con, con">
            <textarea
              className="editor-input min-h-52 resize-y"
              value={formatDecisionOptions(data.options)}
              onChange={(event) => onChange({ ...data, options: parseDecisionOptions(event.target.value) })}
            />
          </Field>
          <Field label="Decision">
            <textarea
              className="editor-input editor-textarea"
              value={data.decision}
              onChange={(event) => onChange({ ...data, decision: event.target.value })}
            />
          </Field>
        </>
      );
    }

    case 'pyramid': {
      const data: PyramidLayoutData = post.layoutData;
      return (
        <Field label="Levels" hint="Foundation first. One per line — title | description">
          <textarea
            className="editor-input min-h-52 resize-y"
            value={formatPyramidLevels(data.levels)}
            onChange={(event) => onChange({ levels: parsePyramidLevels(event.target.value) })}
          />
        </Field>
      );
    }

    case 'checklist': {
      const data: ChecklistLayoutData = post.layoutData;
      return (
        <>
          <Field label="Heading">
            <input
              className="editor-input"
              value={data.heading ?? ''}
              onChange={(event) => onChange({ ...data, heading: event.target.value })}
            />
          </Field>
          <Field label="Items" hint="4–6 items work best. One per line.">
            <textarea
              className="editor-input min-h-52 resize-y"
              value={linesToText(data.items)}
              onChange={(event) => onChange({ ...data, items: textToLines(event.target.value) })}
            />
          </Field>
        </>
      );
    }

    case 'metrics': {
      const data: MetricsLayoutData = post.layoutData;
      return (
        <Field label="Metrics" hint="One per line — label | before | after">
          <textarea
            className="editor-input min-h-52 resize-y"
            value={formatMetrics(data.metrics)}
            onChange={(event) => onChange({ metrics: parseMetrics(event.target.value) })}
          />
        </Field>
      );
    }

    case 'quoteHero': {
      const data: QuoteHeroLayoutData = post.layoutData;
      return (
        <>
          <Field label="Hero statement">
            <textarea
              className="editor-input editor-textarea"
              value={data.heroStatement}
              onChange={(event) => onChange({ ...data, heroStatement: event.target.value })}
            />
          </Field>
          <Field label="Support text">
            <textarea
              className="editor-input editor-textarea"
              value={data.supportText ?? ''}
              onChange={(event) => onChange({ ...data, supportText: event.target.value })}
            />
          </Field>
          <Field label="Points" hint="One per line.">
            <textarea
              className="editor-input editor-textarea"
              value={linesToText(data.points ?? [])}
              onChange={(event) => onChange({ ...data, points: textToLines(event.target.value) })}
            />
          </Field>
        </>
      );
    }

    case 'projectHero': {
      const data: ProjectHeroLayoutData = post.layoutData;
      return (
        <>
          <Field label="Description">
            <textarea
              className="editor-input min-h-32 resize-y"
              value={data.description}
              onChange={(event) => onChange({ ...data, description: event.target.value })}
            />
          </Field>
          <Field label="Tech stack" hint="One per line.">
            <textarea
              className="editor-input editor-textarea"
              value={linesToText(data.techStack)}
              onChange={(event) => onChange({ ...data, techStack: textToLines(event.target.value) })}
            />
          </Field>
          <Field label="Features" hint="One per line.">
            <textarea
              className="editor-input editor-textarea"
              value={linesToText(data.features)}
              onChange={(event) => onChange({ ...data, features: textToLines(event.target.value) })}
            />
          </Field>
        </>
      );
    }

    case 'techStack': {
      const data: TechStackLayoutData = post.layoutData;
      return (
        <Field label="Categories" hint="One per line — title | tech, tech, tech">
          <textarea
            className="editor-input min-h-52 resize-y"
            value={formatCategories(data.categories)}
            onChange={(event) => onChange({ categories: parseCategories(event.target.value) })}
          />
        </Field>
      );
    }

    case 'folderTree': {
      const data = post.layoutData;
      return (
        <Field label="Folder tree" hint="2 spaces per level · trailing * = highlight · // note">
          <textarea
            className="editor-input min-h-60 resize-y font-mono"
            value={formatTree(data.roots)}
            onChange={(event) => onChange({ roots: parseTree(event.target.value) })}
          />
        </Field>
      );
    }

    case 'projectOverview': {
      const data: ProjectOverviewLayoutData = post.layoutData;
      return (
        <>
          <Field label="Folder tree" hint="2 spaces per level · trailing * = highlight">
            <textarea
              className="editor-input min-h-44 resize-y font-mono"
              value={formatTree(data.folderTree)}
              onChange={(event) => onChange({ ...data, folderTree: parseTree(event.target.value) })}
            />
          </Field>
          <Field label="Architecture nodes" hint="One per line.">
            <textarea
              className="editor-input editor-textarea"
              value={linesToText(data.architectureNodes)}
              onChange={(event) => onChange({ ...data, architectureNodes: textToLines(event.target.value) })}
            />
          </Field>
          <Field label="Tech summary" hint="One per line.">
            <textarea
              className="editor-input editor-textarea"
              value={linesToText(data.techSummary)}
              onChange={(event) => onChange({ ...data, techSummary: textToLines(event.target.value) })}
            />
          </Field>
          <Field label="Principles" hint="One per line.">
            <textarea
              className="editor-input editor-textarea"
              value={linesToText(data.notes)}
              onChange={(event) => onChange({ ...data, notes: textToLines(event.target.value) })}
            />
          </Field>
        </>
      );
    }

    case 'pitfall': {
      const data: PitfallLayoutData = post.layoutData;
      const stage = (key: 'trap' | 'consequence' | 'fix', label: string) => (
        <>
          <Field label={`${label} title`}>
            <input
              className="editor-input"
              value={data[key].title}
              onChange={(event) => onChange({ ...data, [key]: { ...data[key], title: event.target.value } })}
            />
          </Field>
          <Field label={`${label} body`}>
            <textarea
              className="editor-input editor-textarea"
              value={data[key].body}
              onChange={(event) => onChange({ ...data, [key]: { ...data[key], body: event.target.value } })}
            />
          </Field>
        </>
      );

      return (
        <>
          {stage('trap', 'Trap')}
          {stage('consequence', 'Consequence')}
          {stage('fix', 'Fix')}
          <Field label="Note">
            <textarea
              className="editor-input editor-textarea"
              value={data.note ?? ''}
              onChange={(event) => onChange({ ...data, note: event.target.value })}
            />
          </Field>
        </>
      );
    }

    case 'dataModel': {
      const data: DataModelLayoutData = post.layoutData;
      return (
        <>
          <Field label="Entities" hint="One per line — Name * | field, field   (* marks the primary entity)">
            <textarea
              className="editor-input min-h-44 resize-y font-mono"
              value={formatEntities(data.entities)}
              onChange={(event) => onChange({ ...data, entities: parseEntities(event.target.value) })}
            />
          </Field>
          <Field label="Relations" hint="One per line — From > To | label">
            <textarea
              className="editor-input editor-textarea font-mono"
              value={formatRelations(data.relations ?? [])}
              onChange={(event) => onChange({ ...data, relations: parseRelations(event.target.value) })}
            />
          </Field>
          <Field label="Rules" hint="One per line.">
            <textarea
              className="editor-input editor-textarea"
              value={linesToText(data.rules ?? [])}
              onChange={(event) => onChange({ ...data, rules: textToLines(event.target.value) })}
            />
          </Field>
        </>
      );
    }

    case 'chartShowcase': {
      const data: ChartShowcaseLayoutData = post.layoutData;
      return (
        <>
          <Field label="Panels" hint="One per line — bar|donut|line | title | unit | label:value, label:value">
            <textarea
              className="editor-input min-h-44 resize-y font-mono"
              value={formatPanels(data.panels)}
              onChange={(event) => onChange({ ...data, panels: parsePanels(event.target.value) })}
            />
          </Field>
          <Field label="Note">
            <textarea
              className="editor-input editor-textarea"
              value={data.note ?? ''}
              onChange={(event) => onChange({ ...data, note: event.target.value })}
            />
          </Field>
        </>
      );
    }

    case 'statHighlight': {
      const data: StatHighlightLayoutData = post.layoutData;
      return (
        <>
          <Field label="Stats" hint="One per line — value | label">
            <textarea
              className="editor-input editor-textarea"
              value={data.stats.map((s) => `${s.value} | ${s.label}`).join('\n')}
              onChange={(event) =>
                onChange({
                  ...data,
                  stats: textToLines(event.target.value).map((line) => {
                    const [value = '', label = ''] = line.split('|').map((p) => p.trim());
                    return { value, label } satisfies StatItem;
                  }),
                })
              }
            />
          </Field>
          <Field label="Points" hint="One per line.">
            <textarea
              className="editor-input editor-textarea"
              value={linesToText(data.points ?? [])}
              onChange={(event) => onChange({ ...data, points: textToLines(event.target.value) })}
            />
          </Field>
        </>
      );
    }

    case 'stateMachine': {
      const data: StateMachineLayoutData = post.layoutData;
      return (
        <>
          <Field label="States" hint="One per line — name | detail | initial|normal|active">
            <textarea
              className="editor-input editor-textarea font-mono"
              value={data.states.map((s) => `${s.name} | ${s.detail ?? ''} | ${s.kind ?? 'normal'}`).join('\n')}
              onChange={(event) =>
                onChange({
                  ...data,
                  states: textToLines(event.target.value).map((line) => {
                    const [name = '', detail = '', kind = 'normal'] = line.split('|').map((p) => p.trim());
                    return {
                      name,
                      ...(detail ? { detail } : {}),
                      kind: (['initial', 'normal', 'active'].includes(kind) ? kind : 'normal') as StateNode['kind'],
                    };
                  }),
                })
              }
            />
          </Field>
          <Field label="Transitions" hint="One per line — from > to | label">
            <textarea
              className="editor-input min-h-44 resize-y font-mono"
              value={data.transitions.map((t) => `${t.from} > ${t.to} | ${t.label}`).join('\n')}
              onChange={(event) =>
                onChange({
                  ...data,
                  transitions: textToLines(event.target.value).map((line) => {
                    const [pair = '', label = ''] = line.split('|').map((p) => p.trim());
                    const [from = '', to = ''] = pair.split('>').map((p) => p.trim());
                    return { from, to, label } satisfies StateTransition;
                  }),
                })
              }
            />
          </Field>
          <Field label="Note">
            <textarea
              className="editor-input editor-textarea"
              value={data.note ?? ''}
              onChange={(event) => onChange({ ...data, note: event.target.value })}
            />
          </Field>
        </>
      );
    }

    case 'sequence': {
      const data: SequenceLayoutData = post.layoutData;
      return (
        <>
          <Field label="Actors" hint="Comma separated. The first one sits on the left.">
            <input
              className="editor-input"
              value={data.actors.join(', ')}
              onChange={(event) => onChange({ ...data, actors: splitListCell(event.target.value) })}
            />
          </Field>
          <Field label="Steps" hint="One per line — from > to | label | detail | timing">
            <textarea
              className="editor-input min-h-52 resize-y font-mono"
              value={data.steps
                .map((s) => `${s.from} > ${s.to} | ${s.label} | ${s.detail ?? ''} | ${s.timing ?? ''}`)
                .join('\n')}
              onChange={(event) =>
                onChange({
                  ...data,
                  steps: textToLines(event.target.value).map((line) => {
                    const [pair = '', label = '', detail = '', timing = ''] = line.split('|').map((p) => p.trim());
                    const [from = '', to = ''] = pair.split('>').map((p) => p.trim());
                    return {
                      from,
                      to,
                      label,
                      ...(detail ? { detail } : {}),
                      ...(timing ? { timing } : {}),
                    } satisfies SequenceStep;
                  }),
                })
              }
            />
          </Field>
          <Field label="Note">
            <textarea
              className="editor-input editor-textarea"
              value={data.note ?? ''}
              onChange={(event) => onChange({ ...data, note: event.target.value })}
            />
          </Field>
        </>
      );
    }

    default:
      return post satisfies never;
  }
}

/* ------------------------------------------------------------------- panel */

export function EditorPanel({
  projects,
  projectIndex,
  postIndex,
  post,
  onSelectProject,
  onSelectPost,
  onPostChange,
  onExport,
  onExportAll,
  exportStatus,
}: EditorPanelProps) {
  const activeProject = projects[projectIndex];

  const updatePost = (patch: Partial<RenderablePost>) => {
    onPostChange({ ...post, ...patch } as RenderablePost);
  };

  const updateLayout = (layout: PostLayout) => {
    onPostChange({ ...post, layout, layoutData: createDefaultLayoutData(layout) } as RenderablePost);
  };

  return (
    <aside className="editor-panel" aria-label="Post editor">
      <div className="editor-heading">
        <div>
          <p className="editor-eyebrow">LinkedIn Post Studio</p>
          <h2 className="editor-title">Engineering Graphics</h2>
        </div>
        <SparklesIcon className="h-7 w-7 text-post-accent" aria-hidden="true" />
      </div>

      <div className="editor-intro">
        <p>
          Pick a project, pick a post, edit the content, and export a clean PNG. Height grows with your
          content — nothing is clipped.
        </p>
        <div className="editor-intro-meta" aria-label="Studio capabilities">
          <span>16 layouts</span>
          <span>1080px wide</span>
          <span>content-fit height</span>
        </div>
      </div>

      <div className="editor-section">
        <Field label="Project">
          <select
            className="editor-input"
            value={projectIndex}
            onChange={(event) => onSelectProject(Number(event.target.value))}
          >
            {projects.map((project, index) => (
              <option key={project.meta.id} value={index}>
                Project {String(project.meta.number).padStart(2, '0')} — {project.meta.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Post">
          <select className="editor-input" value={postIndex} onChange={(event) => onSelectPost(Number(event.target.value))}>
            {activeProject.posts.map((option, index) => (
              <option key={option.id} value={index}>
                {option.postNumber.current}/{option.postNumber.total} — {option.title.split('\n')[0]}
              </option>
            ))}
          </select>
        </Field>
        <button className="primary-button w-full" type="button" onClick={onExport}>
          <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
          Export this post (PNG)
        </button>
        <button className="secondary-button w-full" type="button" onClick={onExportAll}>
          <RectangleStackIcon className="h-5 w-5" aria-hidden="true" />
          Export all in {activeProject.meta.name}
        </button>
        {exportStatus ? <p className="text-sm font-semibold text-post-accent">{exportStatus}</p> : null}
      </div>

      <div className="editor-section">
        <p className="editor-section-label">Branding</p>
        <Field label="Series name">
          <input
            className="editor-input"
            value={post.seriesName}
            onChange={(event) => updatePost({ seriesName: event.target.value })}
          />
        </Field>
        <div className="editor-grid">
          <Field label="Project #">
            <input
              className="editor-input"
              type="number"
              min={1}
              value={post.projectNumber}
              onChange={(event) => updatePost({ projectNumber: Number(event.target.value) })}
            />
          </Field>
          <Field label="Project name">
            <input
              className="editor-input"
              value={post.projectName}
              onChange={(event) => updatePost({ projectName: event.target.value })}
            />
          </Field>
        </div>
      </div>

      <div className="editor-section">
        <p className="editor-section-label">Content</p>
        <Field label="Title" hint="Use Enter for explicit line breaks.">
          <textarea
            className="editor-input editor-textarea"
            value={post.title}
            onChange={(event) => updatePost({ title: event.target.value })}
          />
        </Field>
        <Field label="Highlight word">
          <input
            className="editor-input"
            value={post.highlightWord ?? ''}
            onChange={(event) => updatePost({ highlightWord: event.target.value })}
          />
        </Field>
        <Field label="Subtitle">
          <textarea
            className="editor-input"
            value={post.subtitle ?? ''}
            onChange={(event) => updatePost({ subtitle: event.target.value })}
          />
        </Field>
        <div className="editor-grid">
          <Field label="Post #">
            <input
              className="editor-input"
              type="number"
              min={1}
              value={post.postNumber.current}
              onChange={(event) =>
                updatePost({ postNumber: { ...post.postNumber, current: Number(event.target.value) } })
              }
            />
          </Field>
          <Field label="Total">
            <input
              className="editor-input"
              type="number"
              min={1}
              value={post.postNumber.total}
              onChange={(event) =>
                updatePost({ postNumber: { ...post.postNumber, total: Number(event.target.value) } })
              }
            />
          </Field>
        </div>
      </div>

      <div className="editor-section">
        <p className="editor-section-label">Layout</p>
        <Field label="Layout">
          <select
            className="editor-input"
            value={post.layout}
            onChange={(event) => updateLayout(event.target.value as PostLayout)}
          >
            {layoutCategories.map((category) => (
              <optgroup key={category} label={category}>
                {layoutRegistry
                  .filter((layout) => layout.category === category)
                  .map((layout) => (
                    <option key={layout.id} value={layout.id}>
                      {layout.name}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </Field>
        <LayoutDataFields post={post} onChange={(layoutData) => updatePost({ layoutData } as Partial<RenderablePost>)} />
      </div>

      <div className="editor-section">
        <p className="editor-section-label">Quote</p>
        <Field label="Quote">
          <textarea
            className="editor-input editor-textarea"
            value={post.quote}
            onChange={(event) => updatePost({ quote: event.target.value })}
          />
        </Field>
      </div>

      <div className="editor-section">
        <p className="editor-section-label">LinkedIn</p>
        <Field label="Caption" hint="Plain text + hashtags. Shown beside the canvas; never exported.">
          <textarea
            className="editor-input min-h-64 resize-y leading-relaxed"
            value={post.linkedInCaption ?? ''}
            onChange={(event) => updatePost({ linkedInCaption: event.target.value })}
          />
        </Field>
      </div>
    </aside>
  );
}
