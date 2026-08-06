import type { QuoteHeroLayoutData } from '../types/post';

interface QuoteHeroLayoutProps {
  data: QuoteHeroLayoutData;
}

export function QuoteHeroLayout({ data }: QuoteHeroLayoutProps) {
  return (
    <div className="quote-hero-layout">
      <p className="quote-hero-statement">{data.heroStatement}</p>
      {data.supportText ? <p className="quote-hero-support">{data.supportText}</p> : null}
      {data.points && data.points.length > 0 ? (
        <div className="quote-hero-points">
          {data.points.map((point, index) => (
            <span key={`${point}-${index}`} className="quote-hero-point">
              {point}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
