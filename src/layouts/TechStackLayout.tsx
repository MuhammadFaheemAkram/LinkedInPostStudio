import { TechBadges } from '../components/TechBadges';
import type { TechStackLayoutData } from '../types/post';

interface TechStackLayoutProps {
  data: TechStackLayoutData;
}

export function TechStackLayout({ data }: TechStackLayoutProps) {
  return (
    <div className="tech-stack-layout">
      {data.categories.map((category, index) => (
        <div key={`${category.title}-${index}`} className="tech-stack-card">
          <h3 className="card-title">{category.title}</h3>
          <TechBadges items={category.technologies} />
        </div>
      ))}
    </div>
  );
}
