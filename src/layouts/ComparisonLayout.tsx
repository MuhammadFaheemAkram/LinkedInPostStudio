import { Card } from '../components/Card';
import type { ComparisonLayoutData } from '../types/post';

interface ComparisonLayoutProps {
  data: ComparisonLayoutData;
}

export function ComparisonLayout({ data }: ComparisonLayoutProps) {
  return (
    <div className="comparison-layout">
      <Card title={data.left.title} body={data.left.body} />
      <div className="comparison-vs">{data.centerLabel ?? 'VS'}</div>
      <Card title={data.right.title} body={data.right.body} accent={data.favorRight} />
    </div>
  );
}
