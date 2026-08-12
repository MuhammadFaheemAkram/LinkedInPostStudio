import type { CalendarHeatLayoutData, DayState } from '../types/post';

interface CalendarHeatLayoutProps {
  data: CalendarHeatLayoutData;
}

/**
 * Full literal class names — Tailwind scans source for complete strings, so a
 * template-interpolated `day-cell-${state}` gets purged from the build.
 */
const DAY_CELL_CLASS: Record<DayState, string> = {
  done: 'day-cell day-cell-done',
  today: 'day-cell day-cell-today',
  missed: 'day-cell day-cell-missed',
  empty: 'day-cell day-cell-empty',
};

/**
 * A run of days beside the streak it produces. Cells carry a state class rather
 * than colour alone, and each one keeps its label, so the pattern is readable
 * without relying on hue.
 */
export function CalendarHeatLayout({ data }: CalendarHeatLayoutProps) {
  return (
    <div className="calendar-heat-layout">
      <div className="streak-row">
        <div className="streak-figure">
          <div className="streak-value">{data.streakValue}</div>
          <div className="streak-caption">{data.streakLabel}</div>
        </div>

        <div className="day-strip">
          {data.days.map((day, index) => (
            <div key={`${day.label}-${index}`} className="day-cell-wrap">
              <div className={DAY_CELL_CLASS[day.state]} aria-hidden="true" />
              <div className="day-label">{day.label}</div>
            </div>
          ))}
        </div>
      </div>

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
