import { ArrowRightIcon } from '@heroicons/react/24/solid';
import type { BeforeAfterLayoutData } from '../types/post';

interface BeforeAfterLayoutProps {
  data: BeforeAfterLayoutData;
}

function TransformList({ items }: { items: string[] }) {
  return (
    <ul className="transform-list">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="transform-list-item">
          <span className="transform-dot" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BeforeAfterLayout({ data }: BeforeAfterLayoutProps) {
  return (
    <div className="before-after-layout">
      <div className="transform-card">
        <h3 className="transform-card-title">{data.beforeTitle}</h3>
        <TransformList items={data.beforeItems} />
      </div>

      <div className="transform-transition">
        <ArrowRightIcon className="h-9 w-9" aria-hidden="true" />
        {data.transitionLabel ? <span>{data.transitionLabel}</span> : null}
      </div>

      <div className="transform-card transform-card-after">
        <h3 className="transform-card-title">{data.afterTitle}</h3>
        <TransformList items={data.afterItems} />
      </div>
    </div>
  );
}
