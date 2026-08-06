interface CardProps {
  title?: string;
  body: string | string[];
  accent?: boolean;
  className?: string;
}

/** A generic content card: title + either a paragraph or a bulleted list. */
export function Card({ title, body, accent = false, className = '' }: CardProps) {
  const items = Array.isArray(body) ? body : null;

  return (
    <div className={`card-surface ${accent ? 'card-surface-accent' : ''} ${className}`.trim()}>
      {title ? <h3 className="card-title">{title}</h3> : null}
      {items ? (
        <ul className="card-list">
          {items.map((item, index) => (
            <li key={`${item}-${index}`} className="card-list-item">
              <span className="card-list-dot" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="card-body">{body}</p>
      )}
    </div>
  );
}
