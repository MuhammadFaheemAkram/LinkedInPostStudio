import { ArrowDownIcon } from '@heroicons/react/24/solid';
import type { FanOutLayoutData } from '../types/post';

interface FanOutLayoutProps {
  data: FanOutLayoutData;
}

/** One input → N parallel sources → one merged result. */
export function FanOutLayout({ data }: FanOutLayoutProps) {
  const columns = Math.min(data.branches.length, 5);

  return (
    <div className="fan-out-layout">
      <div className="fan-end fan-end-input">
        <div className="fan-end-title">{data.input.title}</div>
        {data.input.detail ? <div className="fan-end-detail">{data.input.detail}</div> : null}
      </div>

      <div className="fan-arrow">
        <ArrowDownIcon className="h-8 w-8" aria-hidden="true" />
      </div>

      <div className="fan-branches" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {data.branches.map((branch, index) => (
          <div key={`${branch.title}-${index}`} className="fan-branch">
            <div className="fan-branch-title">{branch.title}</div>
            {branch.detail ? <div className="fan-branch-detail">{branch.detail}</div> : null}
          </div>
        ))}
      </div>

      <div className="fan-arrow">
        <ArrowDownIcon className="h-8 w-8" aria-hidden="true" />
      </div>

      <div className="fan-end fan-end-output">
        <div className="fan-end-title">{data.output.title}</div>
        {data.output.detail ? <div className="fan-end-detail">{data.output.detail}</div> : null}
      </div>

      {data.note ? <div className="center-statement mt-2">{data.note}</div> : null}
    </div>
  );
}
