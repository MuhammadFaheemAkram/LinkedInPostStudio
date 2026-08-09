import { ArrowDownIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import type { PitfallLayoutData, PitfallStage } from '../types/post';

interface PitfallLayoutProps {
  data: PitfallLayoutData;
}

type Tone = 'trap' | 'consequence' | 'fix';

const STAGE_LABEL: Record<Tone, string> = {
  trap: 'The Trap',
  consequence: 'Why It Breaks',
  fix: 'The Fix',
};

function Stage({ tone, stage }: { tone: Tone; stage: PitfallStage }) {
  const Icon = tone === 'trap' ? ExclamationTriangleIcon : tone === 'fix' ? CheckCircleIcon : ArrowDownIcon;

  return (
    <div className={`pitfall-card pitfall-card-${tone}`}>
      <div className="pitfall-label">
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span>{STAGE_LABEL[tone]}</span>
      </div>
      <h3 className="pitfall-title">{stage.title}</h3>
      <p className="pitfall-body">{stage.body}</p>
    </div>
  );
}

export function PitfallLayout({ data }: PitfallLayoutProps) {
  return (
    <div className="pitfall-layout">
      <div className="pitfall-stages">
        <Stage tone="trap" stage={data.trap} />
        <Stage tone="consequence" stage={data.consequence} />
        <Stage tone="fix" stage={data.fix} />
      </div>
      {data.note ? <p className="pitfall-note">{data.note}</p> : null}
    </div>
  );
}
