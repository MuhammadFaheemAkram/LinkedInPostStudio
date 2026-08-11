import { ArrowRightIcon } from '@heroicons/react/24/solid';
import type { StateMachineLayoutData } from '../types/post';

interface StateMachineLayoutProps {
  data: StateMachineLayoutData;
}

export function StateMachineLayout({ data }: StateMachineLayoutProps) {
  return (
    <div className="state-machine-layout">
      <div className="state-nodes">
        {data.states.map((state, index) => (
          <div
            key={`${state.name}-${index}`}
            className={`state-node state-node-${state.kind ?? 'normal'}`}
          >
            <div className="state-name">{state.name}</div>
            {state.detail ? <div className="state-detail">{state.detail}</div> : null}
          </div>
        ))}
      </div>

      <div className="state-transitions">
        {data.transitions.map((transition, index) => (
          <div key={`${transition.from}-${transition.to}-${index}`} className="state-transition">
            <span className="transition-endpoint">{transition.from}</span>
            <span className="transition-arrow">
              <ArrowRightIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="transition-endpoint">{transition.to}</span>
            <span className="transition-label">{transition.label}</span>
          </div>
        ))}
      </div>

      {data.note ? <div className="center-statement">{data.note}</div> : null}
    </div>
  );
}
