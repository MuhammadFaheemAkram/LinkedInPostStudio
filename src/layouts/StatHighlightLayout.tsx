import type { StatHighlightLayoutData } from '../types/post';

interface StatHighlightLayoutProps {
  data: StatHighlightLayoutData;
}

/**
 * Headline numbers. Deliberately the most legible layout in the set — values
 * render huge so the point survives being scaled into a mobile feed.
 */
export function StatHighlightLayout({ data }: StatHighlightLayoutProps) {
  const columns = Math.min(data.stats.length, 4);

  return (
    <div className="stat-highlight-layout">
      <div className="stat-grid" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {data.stats.map((stat, index) => (
          <div key={`${stat.label}-${index}`} className="stat-tile">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {data.points && data.points.length > 0 ? (
        <div className="stat-points">
          {data.points.map((point, index) => (
            <div key={`${point}-${index}`} className="stat-point">
              <span className="stat-point-dot" aria-hidden="true" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
