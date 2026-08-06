import { definePost } from '../../lib/factories';

// 6/8 — Swift Charts reports: raw data vs visual insight.
export default definePost({
  title: 'NUMBERS TO INSIGHT',
  highlightWord: 'INSIGHT',
  subtitle: 'Raw transactions become insight with Swift Charts.',
  layout: 'comparison',
  quote: 'A chart answers in a glance what a table makes you calculate.',
  layoutData: {
    left: {
      title: 'Raw Data',
      body: ['Rows of transactions', 'Mental math', 'Hard to compare', 'Easy to miss trends'],
    },
    right: {
      title: 'Swift Charts',
      body: ['Income vs expense', 'Spending by category', 'Monthly trend', 'Insight at a glance'],
    },
    centerLabel: '→',
    favorRight: true,
  },
  linkedInCaption: `📊 SpendWise — From Numbers to Insight

A list of transactions tells you what happened. It doesn't tell you how you're doing.

That's the job of the Reports screen — and Swift Charts made it native and clean.

Instead of rows of numbers, SpendWise shows:

→ Income vs expense for the month (bar chart)
→ Spending by category (donut / bar)
→ A spending trend over time (line)
→ Your top category and biggest transaction

The nice part: the charts read from the same derived data as the dashboard. There's no separate "reporting" pipeline — the report use cases compute over the same transactions.

Swift Charts meant no third-party dependency, full light/dark support, and Dynamic Type out of the box.

The lesson: raw data becomes a decision only when you can see the shape of it.

Next post: how I tested all of this — because in a finance app, the math has to be right.

Open source — GitHub link in the comments.

What's your go-to for charts on iOS? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftCharts #DataVisualization #MVVM #SwiftData #OpenSource #LearningInPublic`,
});
