import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import type { DecisionMatrixLayoutData, DecisionOption } from '../types/post';

interface DecisionMatrixLayoutProps {
  data: DecisionMatrixLayoutData;
}

function OptionCard({ option }: { option: DecisionOption }) {
  return (
    <div className="decision-option-card">
      <h3 className="decision-option-title">{option.title}</h3>

      <div className="decision-list-group">
        <p className="decision-list-label decision-list-label-pros">Pros</p>
        <ul className="decision-list">
          {option.pros.map((pro, index) => (
            <li key={`${pro}-${index}`} className="decision-list-item">
              <CheckIcon className="decision-icon text-post-mint" aria-hidden="true" />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {option.cons && option.cons.length > 0 ? (
        <div className="decision-list-group">
          <p className="decision-list-label decision-list-label-cons">Cons</p>
          <ul className="decision-list">
            {option.cons.map((con, index) => (
              <li key={`${con}-${index}`} className="decision-list-item">
                <XMarkIcon className="decision-icon text-post-gray2" aria-hidden="true" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function DecisionMatrixLayout({ data }: DecisionMatrixLayoutProps) {
  return (
    <div className="decision-layout">
      <div className="decision-question">{data.question}</div>
      <div className="decision-options">
        {data.options.map((option, index) => (
          <OptionCard key={`${option.title}-${index}`} option={option} />
        ))}
      </div>
      <div className="decision-final">
        <span className="decision-final-label">Decision</span>
        {data.decision}
      </div>
    </div>
  );
}
