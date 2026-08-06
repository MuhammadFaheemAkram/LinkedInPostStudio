interface TechBadgesProps {
  items: string[];
}

export function TechBadges({ items }: TechBadgesProps) {
  return (
    <div className="tech-badges">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="tech-badge">
          {item}
        </span>
      ))}
    </div>
  );
}
