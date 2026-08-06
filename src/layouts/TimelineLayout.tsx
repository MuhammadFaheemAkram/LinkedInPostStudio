import type { TimelineLayoutData } from '../types/post';

interface TimelineLayoutProps {
  data: TimelineLayoutData;
}

export function TimelineLayout({ data }: TimelineLayoutProps) {
  return (
    <div className="timeline-wrap">
      <div className="timeline-line">
        {data.events.map((event, index) => (
          <div key={`${event.time}-${index}`} className="timeline-card">
            <span className="timeline-dot" aria-hidden="true" />
            <span className="timeline-time">{event.time}</span>
            <div>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-body">{event.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
