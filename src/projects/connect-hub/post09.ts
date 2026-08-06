import { definePost } from '../../lib/factories';

// 9/10 — Reflection: what I'd change next time.
export default definePost({
  title: "WHAT I'D CHANGE",
  highlightWord: 'CHANGE',
  subtitle: 'Every project teaches lessons that become the foundation of the next.',
  layout: 'reflection',
  quote: "A portfolio project isn't about perfection — it's about measurable growth.",
  layoutData: {
    statement: 'Building ConnectHub improved my Swift and the way I approach software design.',
    points: [
      'Modularize with SPM sooner',
      'Raise test coverage earlier',
      'Extract reusable components',
      'Design for a real backend',
      'Tighten dependency boundaries',
    ],
  },
  linkedInCaption: `💡 ConnectHub — What I'd Do Differently

Finishing a project is satisfying. Looking back to see how you'd improve it is even more valuable.

ConnectHub taught me more than how to implement features — it changed how I think about designing iOS apps.

If I started again today, I'd focus on a few things from the beginning:

→ Modularize with SPM packages as the feature set grows.
→ Raise automated test coverage earlier, not near the end.
→ Extract reusable SwiftUI components sooner to cut duplication.
→ Make the data layer even easier to swap for a real backend.
→ Tighten dependency boundaries for better scalability.

None of these are mistakes — they're lessons that only become obvious after building something end to end.

That's why I love learning projects. Each one is a stepping stone to building the next with a little more experience and confidence.

Final post next: I'll wrap ConnectHub, share the open-source repo, and talk about what's coming.

Open source — GitHub link in the comments.

What's a lesson your last project taught you the hard way? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SoftwareArchitecture #OpenSource #LearningInPublic #ContinuousLearning`,
});
