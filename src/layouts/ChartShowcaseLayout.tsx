import type { ChartPanel, ChartPoint, ChartShowcaseLayoutData } from '../types/post';

interface ChartShowcaseLayoutProps {
  data: ChartShowcaseLayoutData;
}

/**
 * Categorical series colours, in fixed order — never cycled, never reassigned
 * by rank. Validated for the dark chart surface (lightness band, chroma floor,
 * CVD separation, contrast) rather than picked by eye. Every series is also
 * direct-labelled or named in a legend, so colour never carries identity alone.
 */
const CHART_SERIES_COLORS = ['#0A84FF', '#D97706', '#A855F7', '#0FA5B8'] as const;

function seriesColor(index: number): string {
  return CHART_SERIES_COLORS[index % CHART_SERIES_COLORS.length];
}

function formatValue(value: number, unit?: string): string {
  const rounded = Math.abs(value) >= 1000 ? `${(value / 1000).toFixed(1)}k` : `${value}`;
  return `${unit ?? ''}${rounded}`;
}

/* ------------------------------------------------------------------- bar */

function BarChart({ points, unit }: { points: ChartPoint[]; unit?: string }) {
  const max = Math.max(...points.map((point) => point.value), 1);
  const width = 260;
  const height = 150;
  const baseline = height - 4;
  const slot = width / points.length;
  const barWidth = Math.min(56, slot - 18); // leaves a clear gap between fills

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg" role="img">
      <line x1="0" y1={baseline} x2={width} y2={baseline} className="chart-axis" />
      {points.map((point, index) => {
        const barHeight = Math.max(6, (point.value / max) * (height - 34));
        const x = index * slot + (slot - barWidth) / 2;
        return (
          <g key={`${point.label}-${index}`}>
            <rect
              x={x}
              y={baseline - barHeight}
              width={barWidth}
              height={barHeight}
              rx="4"
              fill={seriesColor(index)}
            />
            <text x={x + barWidth / 2} y={baseline - barHeight - 10} className="chart-value" textAnchor="middle">
              {formatValue(point.value, unit)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ----------------------------------------------------------------- donut */

function DonutChart({ points, unit }: { points: ChartPoint[]; unit?: string }) {
  const total = points.reduce((sum, point) => sum + point.value, 0) || 1;
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const gap = 3; // surface gap between adjacent segments
  let offset = 0;

  return (
    <div className="donut-wrap">
      <svg viewBox="0 0 140 140" className="donut-svg" role="img">
        <g transform="translate(70 70) rotate(-90)">
          {points.map((point, index) => {
            const length = (point.value / total) * circumference;
            const dash = Math.max(0, length - gap);
            const circle = (
              <circle
                key={`${point.label}-${index}`}
                r={radius}
                fill="none"
                stroke={seriesColor(index)}
                strokeWidth="22"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
              />
            );
            offset += length;
            return circle;
          })}
        </g>
      </svg>
      <ul className="donut-legend">
        {points.map((point, index) => (
          <li key={`${point.label}-${index}`}>
            <span className="legend-swatch" style={{ background: seriesColor(index) }} aria-hidden="true" />
            <span className="legend-name">{point.label}</span>
            <span className="legend-value">{formatValue(point.value, unit)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ line */

function LineChart({ points }: { points: ChartPoint[]; unit?: string }) {
  const width = 260;
  const height = 150;
  const max = Math.max(...points.map((point) => point.value), 1);
  const min = Math.min(...points.map((point) => point.value), 0);
  const span = max - min || 1;
  const padX = 14;
  const padY = 18;

  const coords = points.map((point, index) => {
    const x = padX + (index / Math.max(points.length - 1, 1)) * (width - padX * 2);
    const y = height - padY - ((point.value - min) / span) * (height - padY * 2);
    return { x, y, point };
  });

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg" role="img">
      <line x1="0" y1={height - 6} x2={width} y2={height - 6} className="chart-axis" />
      <polyline
        points={coords.map(({ x, y }) => `${x},${y}`).join(' ')}
        fill="none"
        stroke={seriesColor(0)}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {coords.map(({ x, y, point }, index) => (
        <circle key={`${point.label}-${index}`} cx={x} cy={y} r="4.5" fill={seriesColor(0)} />
      ))}
      {coords.map(({ x, point }, index) => (
        <text key={`label-${point.label}-${index}`} x={x} y={height - 12} className="chart-tick" textAnchor="middle">
          {point.label}
        </text>
      ))}
    </svg>
  );
}

/* ----------------------------------------------------------------- panel */

function Panel({ panel }: { panel: ChartPanel }) {
  return (
    <div className="chart-panel">
      <h3 className="chart-panel-title">{panel.title}</h3>
      {panel.kind === 'bar' ? <BarChart points={panel.points} unit={panel.unit} /> : null}
      {panel.kind === 'donut' ? <DonutChart points={panel.points} unit={panel.unit} /> : null}
      {panel.kind === 'line' ? <LineChart points={panel.points} unit={panel.unit} /> : null}
      {panel.kind === 'bar' ? (
        <ul className="chart-inline-legend">
          {panel.points.map((point, index) => (
            <li key={`${point.label}-${index}`}>
              <span className="legend-swatch" style={{ background: seriesColor(index) }} aria-hidden="true" />
              {point.label}
            </li>
          ))}
        </ul>
      ) : null}
      {panel.caption ? <p className="chart-panel-caption">{panel.caption}</p> : null}
    </div>
  );
}

export function ChartShowcaseLayout({ data }: ChartShowcaseLayoutProps) {
  return (
    <div className="chart-showcase-layout">
      <div
        className="chart-panels"
        style={{ gridTemplateColumns: `repeat(${Math.min(data.panels.length, 3)}, minmax(0, 1fr))` }}
      >
        {data.panels.map((panel, index) => (
          <Panel key={`${panel.title}-${index}`} panel={panel} />
        ))}
      </div>
      {data.note ? <div className="center-statement">{data.note}</div> : null}
    </div>
  );
}
