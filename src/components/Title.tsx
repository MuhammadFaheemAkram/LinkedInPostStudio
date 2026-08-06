import { useLayoutEffect, useRef } from 'react';

interface TitleProps {
  title: string;
  highlightWord?: string;
}

const MIN_TITLE_SIZE = 34;

function splitByHighlight(value: string, highlightWord?: string) {
  if (!highlightWord) {
    return [value];
  }
  const escaped = highlightWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return value.split(new RegExp(`(${escaped})`, 'gi'));
}

/**
 * Renders the title, preserving explicit line breaks (\n) exactly as authored,
 * and scales the font down only if a line would overflow the canvas width.
 */
export function Title({ title, highlightWord }: TitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lines = title.split('\n').map((line) => line.trim());

  useLayoutEffect(() => {
    const element = titleRef.current;
    if (!element) {
      return undefined;
    }

    let frame = 0;

    const fitTitle = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        element.style.fontSize = '';
        const base = Number.parseFloat(window.getComputedStyle(element).fontSize);
        const available = element.clientWidth;
        const lineEls = Array.from(element.querySelectorAll<HTMLElement>('[data-title-line]'));
        const widest = lineEls.reduce((max, line) => Math.max(max, line.scrollWidth), 0);

        if (!available || !widest || widest <= available) {
          return;
        }

        const scaled = Math.max(MIN_TITLE_SIZE, Math.floor((base * available) / widest));
        element.style.fontSize = `${scaled}px`;
      });
    };

    fitTitle();

    const resizeObserver = new ResizeObserver(fitTitle);
    resizeObserver.observe(element);
    window.addEventListener('resize', fitTitle);
    void document.fonts?.ready?.then(fitTitle);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener('resize', fitTitle);
    };
  }, [title, highlightWord]);

  return (
    <h1 ref={titleRef} className="post-title">
      {lines.map((line, lineIndex) => (
        <span
          key={`${line}-${lineIndex}`}
          data-title-line
          style={{ display: 'block', whiteSpace: 'nowrap' }}
        >
          {splitByHighlight(line, highlightWord).map((part, partIndex) => {
            const isHighlight = Boolean(highlightWord) && part.toLowerCase() === highlightWord!.toLowerCase();
            return isHighlight ? (
              <span key={partIndex} className="highlight">
                {part}
              </span>
            ) : (
              <span key={partIndex}>{part}</span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
