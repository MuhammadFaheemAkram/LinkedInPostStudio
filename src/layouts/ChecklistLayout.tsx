import { CheckIcon } from '@heroicons/react/24/solid';
import type { ChecklistLayoutData } from '../types/post';

interface ChecklistLayoutProps {
  data: ChecklistLayoutData;
}

export function ChecklistLayout({ data }: ChecklistLayoutProps) {
  return (
    <div className="checklist-layout">
      {data.heading ? <div className="checklist-heading">{data.heading}</div> : null}
      <div className="checklist-items">
        {data.items.map((item, index) => (
          <div key={`${item}-${index}`} className="checklist-row">
            <span className="checklist-icon-wrap" aria-hidden="true">
              <CheckIcon className="h-7 w-7" />
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
