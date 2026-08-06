import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import type { ArchitectureColumn, ArchitectureLayoutData } from '../types/post';

interface ArchitectureLayoutProps {
  data: ArchitectureLayoutData;
}

function NodeStack({ items }: { items: string[] }) {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={`${item}-${index}`}>
          <div className="architecture-row">{item}</div>
          {index < items.length - 1 ? (
            <div className="architecture-arrow">
              <ArrowDownIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function Column({ column }: { column: ArchitectureColumn }) {
  return (
    <div className="architecture-card">
      <h3 className="architecture-card-title">{column.title}</h3>
      <NodeStack items={column.items} />
    </div>
  );
}

export function ArchitectureLayout({ data }: ArchitectureLayoutProps) {
  // Two-column comparison mode (left vs right, with an optional center note).
  if (data.left || data.right) {
    return (
      <div className="w-full space-y-6">
        <div className="architecture-columns">
          {data.left ? <Column column={data.left} /> : <div />}
          <div className="flex items-center justify-center text-post-accent" aria-hidden="true">
            <ArrowRightIcon className="h-10 w-10" />
          </div>
          {data.right ? <Column column={data.right} /> : <div />}
        </div>
        {data.center ? <div className="center-statement">{data.center}</div> : null}
      </div>
    );
  }

  // Single vertical flow (UI -> ViewModel -> Repository -> …).
  return (
    <div className="flow-stack">
      <NodeStack items={data.nodes ?? []} />
      {data.center ? <div className="center-statement mt-6">{data.center}</div> : null}
    </div>
  );
}
