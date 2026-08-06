import { BRAND } from '../brand';
import type { PostNumber } from '../types/post';

interface FooterProps {
  postNumber: PostNumber;
  seriesName: string;
}

export function Footer({ postNumber, seriesName }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-brand-row">
        <div className="footer-brand-mark" aria-hidden="true" />
        <span className="footer-brand-title">{seriesName}</span>
      </div>

      <div className="footer-meta-row">
        <div className="footer-info">
          <div className="footer-author-row">
            <span className="footer-dash">—</span>
            <span className="footer-name">{BRAND.author}</span>
          </div>
          <p className="footer-role">{BRAND.role}</p>
          <p className="footer-link">{BRAND.website}</p>
        </div>

        <div
          className="footer-watermark-v2"
          aria-label={`Post ${postNumber.current} of ${postNumber.total}`}
        >
          <span className="footer-watermark-label">Post</span>
          <span className="footer-watermark-count">
            {postNumber.current} / {postNumber.total}
          </span>
        </div>
      </div>
    </footer>
  );
}
