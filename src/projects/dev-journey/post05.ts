import { definePost } from '../../lib/factories';

// 5/7 — NEW concept: federated search over heterogeneous types. ConnectHub
// covered *debounced* search (timing); this is about the SHAPE of results.
export default definePost({
  title: 'ONE QUERY, FIVE ANSWERS',
  highlightWord: 'FIVE',
  subtitle: 'Searching one thing is easy. Searching five different kinds of thing is a modelling problem.',
  layout: 'fanOut',
  quote: 'Do not flatten things that are not the same shape.',
  layoutData: {
    input: { title: '"concurrency"', detail: 'One query from one search field' },
    branches: [
      { title: 'Roadmaps' },
      { title: 'Topics' },
      { title: 'Notes' },
      { title: 'Resources' },
      { title: 'Challenges' },
    ],
    output: {
      title: 'One grouped read model',
      detail: 'Each kind keeps its own section, its own row design, and its own destination',
    },
    note: 'Five stores queried in parallel. One result type. Zero type erasure.',
  },
  linkedInCaption: `🔍 DevJourney — One Query, Five Answers

Global search sounds like a feature. It's really a modelling question.

In DevJourney a single query has to search five different things: roadmaps, topics, notes, resources and challenges. They share almost nothing — different fields, different row designs, different destinations when you tap them.

The obvious approach is to flatten everything into one list of generic "search results" with a title, a subtitle and a type tag.

I tried it. It's worse than it sounds:

→ You lose the real type, so tapping a row means switching on a string to figure out where to navigate.
→ Every row is designed for the lowest common denominator, so a note and a challenge look identical when they shouldn't.
→ Adding a sixth searchable thing means touching that switch statement, and the compiler can't tell you that you missed it.

So instead, the search returns one read model that keeps the groups intact — a struct with a typed array per kind, plus derived isEmpty and totalCount.

What that buys:

→ Nothing is type-erased. A topic stays a Topic all the way to the view.
→ Each section renders with its own row design and knows exactly where it navigates.
→ The UI groups results by kind, which is genuinely more useful than one blended list — "3 topics, 1 note" tells you more than "4 results".
→ The five queries run against their own stores and get composed in one use case, not in the view.

The general lesson: reach for a common abstraction when things really are the same, and resist it when they only look similar. A tagged union of five concrete types beat one vague type that pretended to cover all of them.

Next post: who decides what you should learn next.

Open source — GitHub link in the comments.

Grouped results or one blended list — which do you prefer as a user? 👇

#iOSDevelopment #Swift #SwiftUI #DomainModeling #SoftwareArchitecture #SwiftData #CleanArchitecture #OpenSource #iOSDeveloper #LearningInPublic`,
});
