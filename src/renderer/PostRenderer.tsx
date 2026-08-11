import { forwardRef } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { QuoteCard } from '../components/QuoteCard';
import { Title } from '../components/Title';
import { ArchitectureLayout } from '../layouts/ArchitectureLayout';
import { BeforeAfterLayout } from '../layouts/BeforeAfterLayout';
import { ChartShowcaseLayout } from '../layouts/ChartShowcaseLayout';
import { ChecklistLayout } from '../layouts/ChecklistLayout';
import { DataModelLayout } from '../layouts/DataModelLayout';
import { PitfallLayout } from '../layouts/PitfallLayout';
import { CodeLayout } from '../layouts/CodeLayout';
import { ComparisonLayout } from '../layouts/ComparisonLayout';
import { DecisionMatrixLayout } from '../layouts/DecisionMatrixLayout';
import { FlowLayout } from '../layouts/FlowLayout';
import { FolderTreeLayout } from '../layouts/FolderTreeLayout';
import { MetricsLayout } from '../layouts/MetricsLayout';
import { ProjectHeroLayout } from '../layouts/ProjectHeroLayout';
import { ProjectOverviewLayout } from '../layouts/ProjectOverviewLayout';
import { PyramidLayout } from '../layouts/PyramidLayout';
import { QuoteHeroLayout } from '../layouts/QuoteHeroLayout';
import { ReflectionLayout } from '../layouts/ReflectionLayout';
import { SequenceLayout } from '../layouts/SequenceLayout';
import { StatHighlightLayout } from '../layouts/StatHighlightLayout';
import { StateMachineLayout } from '../layouts/StateMachineLayout';
import { TechStackLayout } from '../layouts/TechStackLayout';
import { TimelineLayout } from '../layouts/TimelineLayout';
import type { RenderablePost } from '../types/post';

interface PostRendererProps {
  post: RenderablePost;
}

function renderLayout(post: RenderablePost) {
  switch (post.layout) {
    case 'comparison':
      return <ComparisonLayout data={post.layoutData} />;
    case 'architecture':
      return <ArchitectureLayout data={post.layoutData} />;
    case 'flow':
      return <FlowLayout data={post.layoutData} />;
    case 'code':
      return <CodeLayout data={post.layoutData} />;
    case 'timeline':
      return <TimelineLayout data={post.layoutData} />;
    case 'reflection':
      return <ReflectionLayout data={post.layoutData} />;
    case 'beforeAfter':
      return <BeforeAfterLayout data={post.layoutData} />;
    case 'decisionMatrix':
      return <DecisionMatrixLayout data={post.layoutData} />;
    case 'pyramid':
      return <PyramidLayout data={post.layoutData} />;
    case 'checklist':
      return <ChecklistLayout data={post.layoutData} />;
    case 'metrics':
      return <MetricsLayout data={post.layoutData} />;
    case 'quoteHero':
      return <QuoteHeroLayout data={post.layoutData} />;
    case 'projectHero':
      return <ProjectHeroLayout data={post.layoutData} />;
    case 'techStack':
      return <TechStackLayout data={post.layoutData} />;
    case 'folderTree':
      return <FolderTreeLayout data={post.layoutData} />;
    case 'projectOverview':
      return <ProjectOverviewLayout data={post.layoutData} />;
    case 'pitfall':
      return <PitfallLayout data={post.layoutData} />;
    case 'dataModel':
      return <DataModelLayout data={post.layoutData} />;
    case 'chartShowcase':
      return <ChartShowcaseLayout data={post.layoutData} />;
    case 'statHighlight':
      return <StatHighlightLayout data={post.layoutData} />;
    case 'stateMachine':
      return <StateMachineLayout data={post.layoutData} />;
    case 'sequence':
      return <SequenceLayout data={post.layoutData} />;
    default:
      return post satisfies never;
  }
}

export const PostRenderer = forwardRef<HTMLDivElement, PostRendererProps>(function PostRenderer(
  { post },
  ref,
) {
  const accessibleTitle = post.title.replace(/\s+/g, ' ').trim();

  return (
    <main ref={ref} className="post-canvas" aria-label={`${accessibleTitle} social graphic`}>
      <Header projectName={post.projectName} projectNumber={post.projectNumber} />

      <section className="mt-10 shrink-0 space-y-5">
        <Title title={post.title} highlightWord={post.highlightWord} />
        {post.subtitle ? <p className="post-subtitle">{post.subtitle}</p> : null}
      </section>

      <section className="post-center">{renderLayout(post)}</section>

      <QuoteCard quote={post.quote} />

      <Footer postNumber={post.postNumber} seriesName={post.seriesName} />
    </main>
  );
});
