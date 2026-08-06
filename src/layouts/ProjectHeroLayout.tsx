import { TechBadges } from '../components/TechBadges';
import type { ProjectHeroLayoutData } from '../types/post';

interface ProjectHeroLayoutProps {
  data: ProjectHeroLayoutData;
}

export function ProjectHeroLayout({ data }: ProjectHeroLayoutProps) {
  return (
    <div className="project-hero-layout">
      <div className="project-hero-copy">
        <p className="project-hero-description">{data.description}</p>

        <p className="project-hero-label">Tech Stack</p>
        <TechBadges items={data.techStack} />

        <p className="project-hero-label mt-7">Features</p>
        <TechBadges items={data.features} />
      </div>
    </div>
  );
}
