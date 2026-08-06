import type { ReflectionLayoutData } from '../types/post';

interface ReflectionLayoutProps {
  data: ReflectionLayoutData;
}

export function ReflectionLayout({ data }: ReflectionLayoutProps) {
  return (
    <div className="reflection-layout">
      <p className="reflection-statement">{data.statement}</p>
      <div className="reflection-points">
        {data.points.map((point, index) => (
          <div key={`${point}-${index}`} className="reflection-point">
            <div className="reflection-point-index">{String(index + 1).padStart(2, '0')}</div>
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}
