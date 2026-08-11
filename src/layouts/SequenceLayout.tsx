import type { SequenceLayoutData } from '../types/post';

interface SequenceLayoutProps {
  data: SequenceLayoutData;
}

/**
 * Two-party choreography over time. Steps sit on the side of whoever sent
 * them, so the whole exchange reads like a transcript — which is exactly what
 * a chat flow is.
 */
export function SequenceLayout({ data }: SequenceLayoutProps) {
  const [firstActor] = data.actors;

  return (
    <div className="sequence-layout">
      <div className="sequence-actors">
        {data.actors.map((actor, index) => (
          <span key={`${actor}-${index}`} className="sequence-actor">
            {actor}
          </span>
        ))}
      </div>

      <div className="sequence-steps">
        {data.steps.map((step, index) => {
          const isOutbound = step.from === firstActor;
          return (
            <div
              key={`${step.label}-${index}`}
              className={`sequence-row ${isOutbound ? 'sequence-row-out' : 'sequence-row-in'}`}
            >
              <div className={`sequence-card ${isOutbound ? 'sequence-card-out' : ''}`.trim()}>
                <div className="sequence-meta">
                  <span>
                    {step.from} → {step.to}
                  </span>
                  {step.timing ? <span className="sequence-timing">{step.timing}</span> : null}
                </div>
                <div className="sequence-label">{step.label}</div>
                {step.detail ? <div className="sequence-detail">{step.detail}</div> : null}
              </div>
            </div>
          );
        })}
      </div>

      {data.note ? <div className="center-statement">{data.note}</div> : null}
    </div>
  );
}
