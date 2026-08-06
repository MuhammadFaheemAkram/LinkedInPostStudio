import { useState } from 'react';
import { CheckIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';

interface CaptionPanelProps {
  text: string;
}

/**
 * Displays the post's ready-to-publish LinkedIn caption beside the canvas.
 * Rendered OUTSIDE the `.post-canvas` element, so it is never captured by the
 * PNG export or shown in screenshot mode.
 */
export function CaptionPanel({ text }: CaptionPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be blocked in some contexts; fail quietly.
    }
  };

  return (
    <section className="caption-panel" aria-label="LinkedIn caption">
      <div className="caption-panel-head">
        <div>
          <p className="caption-panel-title">LinkedIn caption</p>
          <p className="caption-panel-note">Ready to paste — not part of the exported image.</p>
        </div>
        <button className="secondary-button" type="button" onClick={handleCopy}>
          {copied ? (
            <CheckIcon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <ClipboardDocumentIcon className="h-5 w-5" aria-hidden="true" />
          )}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="caption-text">{text}</pre>
      <p className="caption-count">{text.length} characters</p>
    </section>
  );
}
