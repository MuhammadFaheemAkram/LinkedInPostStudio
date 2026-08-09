import { ArrowRightIcon } from '@heroicons/react/24/solid';
import type { DataModelLayoutData } from '../types/post';

interface DataModelLayoutProps {
  data: DataModelLayoutData;
}

export function DataModelLayout({ data }: DataModelLayoutProps) {
  const columns = Math.min(data.entities.length, 4);

  return (
    <div className="data-model-layout">
      <div className="data-model-entities" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {data.entities.map((entity, index) => (
          <div
            key={`${entity.name}-${index}`}
            className={`entity-card ${entity.primary ? 'entity-card-primary' : ''}`.trim()}
          >
            <h3 className="entity-name">{entity.name}</h3>
            <ul className="entity-fields">
              {entity.fields.map((field, fieldIndex) => (
                <li key={`${field}-${fieldIndex}`}>{field}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {data.relations && data.relations.length > 0 ? (
        <div className="data-model-relations">
          {data.relations.map((relation, index) => (
            <div key={`${relation.from}-${relation.to}-${index}`} className="relation-pill">
              <span className="relation-entity">{relation.from}</span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-post-accent" aria-hidden="true" />
              <span className="relation-entity">{relation.to}</span>
              {relation.label ? <span className="relation-label">{relation.label}</span> : null}
            </div>
          ))}
        </div>
      ) : null}

      {data.rules && data.rules.length > 0 ? (
        <div className="data-model-rules">
          {data.rules.map((rule, index) => (
            <div key={`${rule}-${index}`} className="overview-note-item">
              <span className="overview-note-dot" aria-hidden="true" />
              <span>{rule}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
