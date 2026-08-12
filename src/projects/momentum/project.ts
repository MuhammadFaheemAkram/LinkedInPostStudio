import type { ProjectMeta } from '../../types/project';

export const momentumMeta: ProjectMeta = {
  id: 'momentum',
  name: 'Momentum',
  number: 5,
  tagline: 'A habit tracker built to practise the parts of iOS that live outside the app.',
  description:
    'A habit and productivity app whose real subject is platform integration — notification permission, actionable reminders, notification-centre reconciliation, and BGTaskScheduler.',
  github: 'https://github.com/faheemakram/Momentum',
  website: 'faheem-ios.vercel.app',
  difficulty: 'Advanced',
  platform: 'iOS',
  concepts: ['UserNotifications', 'BGTaskScheduler', 'Protocol Isolation', 'SwiftData', 'Swift Testing'],
};
