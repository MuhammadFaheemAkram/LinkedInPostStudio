import { definePost } from '../../lib/factories';

// 6/7 — NEW concept: where product POLICY lives. Grounded in the real comment
// in LoadDashboardUseCase: "All the 'what counts as the active roadmap /
// recommended topic' policy lives here, not in the view."
export default definePost({
  title: 'WHO DECIDES WHATS NEXT',
  highlightWord: 'DECIDES',
  subtitle: 'The dashboard shows one recommended topic. Something has to choose it.',
  layout: 'checklist',
  quote: 'A view should ask a question, never answer it.',
  layoutData: {
    heading: 'The policy behind "your next topic":',
    items: [
      'Active track = the in-progress one furthest along',
      'If none is started, fall back to the first available',
      'Recommend its first incomplete topic, in order',
      'Show at most three recent notes and three open challenges',
      'All of it lives in one use case, not in the view',
    ],
  },
  linkedInCaption: `🧭 DevJourney — Who Decides What's Next?

The dashboard shows one recommended topic. Simple to look at. But something has to choose it, and that choice is pure product policy.

Here's the actual rule set:

→ Pick the active track: the in-progress one furthest along. Not the newest, not alphabetical — the one you have the most momentum in.
→ If nothing is started yet, fall back to the first available track.
→ Recommend the first incomplete topic in that track, in order. Roadmaps are sequenced for a reason; don't shuffle them.
→ Show at most three recent notes and three open challenges. A dashboard that shows everything shows nothing.

None of that is a technical decision. Every line is a judgement call about what's most useful to a learner — and every one could reasonably have gone the other way.

Which is exactly why it doesn't belong in the view.

All of it lives in a single use case that assembles the dashboard. The view receives a finished result and renders it. It never filters, sorts, or decides.

Three reasons that mattered here:

→ The rules are testable. "Furthest along wins" is a two-line test. Inside a SwiftUI body it's untestable.
→ There's one place to change my mind. When I decide recency should beat progress, I edit one file — not every screen that had its own opinion.
→ The policy is readable. A new contributor can read the rules without reverse-engineering them out of a view hierarchy.

The habit I'd keep: whenever a screen "just picks the right thing to show", stop and ask where that decision is written down. If the answer is "inside the view", it's about to get duplicated.

Final post next.

Open source — GitHub link in the comments.

Where does product policy live in your codebase? 👇

#iOSDevelopment #Swift #SwiftUI #SoftwareArchitecture #CleanArchitecture #DomainModeling #ProductEngineering #OpenSource #iOSDeveloper #LearningInPublic`,
});
