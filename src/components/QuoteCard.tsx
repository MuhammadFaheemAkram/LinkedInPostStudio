interface QuoteCardProps {
  quote: string;
}

export function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <section className="quote-card" aria-label="Post quote">
      <p className="quote-text">&ldquo;{quote}&rdquo;</p>
    </section>
  );
}
