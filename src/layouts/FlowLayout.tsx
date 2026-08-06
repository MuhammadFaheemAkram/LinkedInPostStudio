import { ArrowDownIcon } from '@heroicons/react/24/solid';
import type { FlowLayoutData } from '../types/post';

interface FlowLayoutProps {
  data: FlowLayoutData;
}

export function FlowLayout({ data }: FlowLayoutProps) {
  return (
    <div className="flow-stack">
      {data.steps.map((step, index) => {
        const isLast = index === data.steps.length - 1;
        return (
          <div key={`${step.label}-${index}`} className="w-full">
            <div className={`flow-node ${isLast ? 'flow-node-accent' : ''}`.trim()}>
              <span>{step.label}</span>
              {step.detail ? (
                <span className="mt-1 block text-[18px] font-medium normal-case text-post-gray">
                  {step.detail}
                </span>
              ) : null}
            </div>
            {!isLast ? (
              <div className="flow-arrow">
                <ArrowDownIcon className="h-8 w-8" aria-hidden="true" />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
