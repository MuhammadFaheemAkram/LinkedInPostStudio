import type { PyramidLayoutData } from '../types/post';

interface PyramidLayoutProps {
  data: PyramidLayoutData;
}

const MIN_WIDTH = 56;
const MAX_WIDTH = 100;

export function PyramidLayout({ data }: PyramidLayoutProps) {
  // Data is authored foundation -> outcome; render outcome on top (narrowest).
  const levels = [...data.levels].reverse();
  const count = levels.length;

  return (
    <div className="pyramid-layout">
      {levels.map((level, index) => {
        const ratio = count > 1 ? index / (count - 1) : 1;
        const width = MIN_WIDTH + ratio * (MAX_WIDTH - MIN_WIDTH);
        const isTop = index === 0;

        return (
          <div
            key={`${level.title}-${index}`}
            className={`pyramid-level ${isTop ? 'pyramid-level-top' : ''}`.trim()}
            style={{ width: `${width}%` }}
          >
            <div className="pyramid-title">{level.title}</div>
            {level.description ? <div className="pyramid-description">{level.description}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
