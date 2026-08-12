import { definePost } from '../../lib/factories';

// 7/7 — Closer for DevJourney AND for the four-project iOS arc. `reflection`
// (last used in project 01) so the series does not end on a repeated layout.
export default definePost({
  title: 'FOUR PROJECTS IN',
  highlightWord: 'FOUR',
  subtitle: 'Four apps, four different problems, one pattern underneath.',
  layout: 'reflection',
  quote: 'Every app I build teaches me less about Swift and more about where decisions belong.',
  layoutData: {
    statement: 'Every project came down to the same question: what do you store, and what do you compute?',
    points: [
      'Movie Explorer — where logic belongs',
      'ConnectHub — what breaks at scale',
      'SpendWise — how to stay correct',
      'DevJourney — how to derive meaning',
      'All four — keep the stored model small',
    ],
  },
  linkedInCaption: `✅ DevJourney — Four Projects In

This wraps Project 04 of "Modern iOS in Practice". Four apps, deliberately different problems — and looking back, one pattern underneath all of them.

What each one actually taught me:

→ Movie Explorer — where logic belongs. Views observe, view models coordinate, repositories hide data sources.

→ ConnectHub — what breaks at scale. Concurrency became real, sessions needed a state machine, and "instant" turned out to be a design decision rather than a performance one.

→ SpendWise — how to stay correct. Exact types for money, and never storing a number you can compute.

→ DevJourney — how to derive meaning. Read models per screen, testable time, and progress that rolls up instead of being written down.

The thread running through all four: **keep the stored model small, and compute everything else.**

Movie Explorer stored favourites and derived the rest. ConnectHub stored posts and derived what the feed showed. SpendWise stored transactions and derived every total. DevJourney stores which topics you finished and derives every percentage, streak and summary.

I didn't plan that. It emerged because the alternative kept biting — every stored duplicate of a derivable fact is a future bug waiting for someone to forget an update path.

The other thing I'd say after four projects: none of them were hard because of Swift. They were hard because of decisions — what to model, what to compute, where policy lives, what the user should never wait for. The language was the easy part.

Next up, I'm taking the same approach back to Android and rebuilding these ideas with Compose.

Thanks to everyone who has followed along. 🙏

Open source — GitHub link in the comments.

What's the pattern you keep rediscovering across your own projects? 👇

#iOSDevelopment #SwiftUI #Swift #SoftwareArchitecture #DomainModeling #CleanArchitecture #SwiftData #OpenSource #iOSDeveloper #LearningInPublic`,
});
