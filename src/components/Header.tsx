import { BRAND } from '../brand';
import { Badge } from './Badge';

interface HeaderProps {
  projectName?: string;
  projectNumber?: number;
}

export function Header({ projectName, projectNumber }: HeaderProps) {
  const showProjectBadge = Boolean(projectName) && typeof projectNumber === 'number';

  return (
    <header className="post-header" aria-label="Post series metadata">
      <div className="post-header-badges">
        <Badge>{BRAND.headerBadgePrimary}</Badge>
        <Badge variant="outline">{BRAND.headerBadgeSecondary}</Badge>
      </div>

      {showProjectBadge ? (
        <div
          className="project-badge"
          aria-label={`Project ${String(projectNumber).padStart(2, '0')}: ${projectName}`}
        >
          <span>Project {String(projectNumber).padStart(2, '0')}</span>
          <strong>{projectName}</strong>
        </div>
      ) : null}
    </header>
  );
}
