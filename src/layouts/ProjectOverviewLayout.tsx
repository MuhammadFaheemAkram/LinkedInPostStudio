import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { TechBadges } from '../components/TechBadges';
import type { ProjectOverviewLayoutData } from '../types/post';
import { FolderTreeView } from './FolderTreeLayout';

interface ProjectOverviewLayoutProps {
  data: ProjectOverviewLayoutData;
}

export function ProjectOverviewLayout({ data }: ProjectOverviewLayoutProps) {
  return (
    <div className="project-overview-layout">
      <div className="project-overview-grid">
        <div className="project-overview-card">
          <h3 className="card-title">Structure</h3>
          <FolderTreeView roots={data.folderTree} />
        </div>

        <div className="project-overview-card project-overview-architecture">
          <h3 className="card-title">Architecture</h3>
          <div className="flow-stack">
            {data.architectureNodes.map((node, index) => {
              const isLast = index === data.architectureNodes.length - 1;
              return (
                <div key={`${node}-${index}`} className="w-full">
                  <div className={`flow-node ${isLast ? 'flow-node-accent' : ''}`.trim()}>{node}</div>
                  {!isLast ? (
                    <div className="flow-arrow">
                      <ArrowDownIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="project-overview-card">
          <h3 className="card-title">Stack</h3>
          <TechBadges items={data.techSummary} />
          <p className="project-overview-label mt-6">Principles</p>
          <div className="space-y-3">
            {data.notes.map((note, index) => (
              <div key={`${note}-${index}`} className="overview-note-item">
                <span className="overview-note-dot" aria-hidden="true" />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
