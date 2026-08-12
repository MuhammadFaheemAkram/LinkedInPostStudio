import { definePost } from '../../lib/factories';

// 4/7 — NEW concept: aggregation up a hierarchy + read models. Uses the new
// hierarchyProgress layout. Grounded in RoadmapSection / RoadmapDetail.
export default definePost({
  title: 'PROGRESS ROLLS UP',
  highlightWord: 'ROLLS UP',
  subtitle: 'One checkbox on a topic changes three numbers above it.',
  layout: 'hierarchyProgress',
  quote: 'Store the leaves. Compute the branches.',
  layoutData: {
    nodes: [
      {
        title: 'iOS Developer',
        detail: '18 / 32 topics',
        percent: 56,
        children: [
          { title: 'Swift Fundamentals', detail: '8 / 8', percent: 100 },
          { title: 'SwiftUI', detail: '6 / 10', percent: 60 },
          { title: 'Concurrency', detail: '4 / 14', percent: 29 },
        ],
      },
    ],
    note: 'Only the topic checkboxes are stored. Every percentage above them is counted on read.',
  },
  linkedInCaption: `📈 DevJourney — Progress Rolls Up

A roadmap in DevJourney is three levels deep: a track, its sections, and the topics inside them.

Tick one topic and three numbers change — the section's progress, the track's percentage, and your total completed count.

The tempting implementation is to store all of them and keep them in sync. I've watched that go wrong enough times to not try it: every write path has to remember to update every ancestor, and the first one that forgets leaves a number permanently wrong.

So DevJourney stores only the leaves.

A topic has one stored fact: isCompleted. Everything above it is computed on read:

→ A section counts its completed topics and divides.
→ A track sums its sections.
→ The dashboard sums the tracks.

The nice consequence is that sections aren't stored entities at all. They're derived by grouping a roadmap's topics on read — a read model shaped for one screen rather than a table in the database.

That's the pattern I got most out of here: separate what is true from what is displayed.

Stored: the handful of facts a user actually asserted.
Derived: every rollup, percentage and summary built from them.

It keeps the schema small, makes the numbers impossible to desynchronise, and means each screen gets exactly the shape it needs without contorting the storage model.

The trade-off is real — you recompute instead of reading a cached value. For a few hundred topics that's free. If it ever weren't, the fix would be caching a derived value, not storing a second source of truth.

Next post: one query, five different kinds of answer.

Open source — GitHub link in the comments.

Store the rollup or compute it — where do you land? 👇

#iOSDevelopment #Swift #SwiftUI #SwiftData #DomainModeling #SoftwareArchitecture #CleanArchitecture #OpenSource #iOSDeveloper #LearningInPublic`,
});
