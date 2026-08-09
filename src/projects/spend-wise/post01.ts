import { definePost } from '../../lib/factories';

// 1/8 — Opener. Deliberately NOT an architecture pitch (projects 01 and 02
// already covered stack/structure/data flow). This series is about correctness.
export default definePost({
  title: 'SPEND WISE',
  highlightWord: 'WISE',
  subtitle: 'The screens were the easy part. Getting the numbers right was not.',
  layout: 'projectHero',
  quote: 'Anyone can render a number. Engineering is making sure it is the right one.',
  layoutData: {
    description:
      'SpendWise is an offline-first finance tracker. But this series is not another architecture tour — it is about the domain: representing money exactly, deriving every figure from one truth, and encoding business rules you can actually test.',
    techStack: ['Decimal Money', 'Derived Figures', 'Business Rules', 'Swift Charts', 'SwiftData', 'Swift Testing'],
    features: ['Dashboard', 'Budgets', 'Reports', 'Recurring', 'Categories & Accounts', 'Fully Offline'],
  },
  linkedInCaption: `🚀 Project 03 — SpendWise (iOS)

My first two projects were about architecture: how to structure an app, where state lives, how layers talk.

This one is different. SpendWise is a personal finance tracker, and it taught me something those projects did not:

The screens are the easy part. The domain is where engineering actually happens.

A finance app has to answer questions like:

→ How do you represent money without rounding errors quietly corrupting totals?
→ Where should a "total" live — stored, or computed every time?
→ How do you encode a rule like "this budget is over" so it can be tested?
→ How do you turn a list of transactions into something a person can act on?
→ What do you do about money that repeats every month?

None of those are UI problems. They're domain problems — and getting them wrong doesn't crash the app, it just makes it quietly wrong. Which is worse.

So this series skips the stack diagram. Over the next posts I'll walk through the actual decisions:

Money as a type. Modeling the domain. Derived vs stored figures. Business rules as pipelines. Reports with Swift Charts. Recurring transactions.

Open source — GitHub link in the comments.

What's the hardest domain you've had to model in an app? 👇

#iOSDevelopment #SwiftUI #Swift #SoftwareArchitecture #DomainModeling #SwiftData #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
