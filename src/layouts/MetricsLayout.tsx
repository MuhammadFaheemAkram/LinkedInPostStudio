import { ArrowRightIcon } from '@heroicons/react/24/solid';
import type { MetricsLayoutData } from '../types/post';

interface MetricsLayoutProps {
  data: MetricsLayoutData;
}

export function MetricsLayout({ data }: MetricsLayoutProps) {
  return (
    <div className="metrics-layout">
      {data.metrics.map((metric, index) => (
        <div key={`${metric.label}-${index}`} className="metric-row">
          <div className="metric-label">{metric.label}</div>
          <div className="metric-value metric-value-before">
            <span>Before</span>
            <strong>{metric.before}</strong>
          </div>
          <ArrowRightIcon className="metric-arrow" aria-hidden="true" />
          <div className="metric-value metric-value-after">
            <span>After</span>
            <strong>{metric.after}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
