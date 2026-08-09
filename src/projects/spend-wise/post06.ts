import { definePost } from '../../lib/factories';

// 6/8 — NEW concept: data visualisation. Uses the new `chartShowcase` layout,
// mirroring the real ReportsView (BarMark / SectorMark / LineMark).
export default definePost({
  title: 'NUMBERS INTO INSIGHT',
  highlightWord: 'INSIGHT',
  subtitle: 'Three questions, three chart forms — all from the same transactions.',
  layout: 'chartShowcase',
  quote: 'A chart answers in a glance what a table makes you calculate.',
  layoutData: {
    panels: [
      {
        kind: 'bar',
        title: 'Am I net positive?',
        unit: '$',
        caption: 'BarMark — two magnitudes, compared.',
        points: [
          { label: 'Income', value: 4200 },
          { label: 'Expense', value: 2850 },
        ],
      },
      {
        kind: 'donut',
        title: 'Where did it go?',
        unit: '$',
        caption: 'SectorMark — parts of a whole.',
        points: [
          { label: 'Food', value: 940 },
          { label: 'Bills', value: 720 },
          { label: 'Transport', value: 610 },
          { label: 'Other', value: 580 },
        ],
      },
      {
        kind: 'line',
        title: 'Getting better?',
        unit: '$',
        caption: 'LineMark — change over time.',
        points: [
          { label: 'Jan', value: 2400 },
          { label: 'Feb', value: 2750 },
          { label: 'Mar', value: 2300 },
          { label: 'Apr', value: 2850 },
        ],
      },
    ],
    note: 'No separate reporting pipeline — every chart reads the same derived figures as the dashboard.',
  },
  linkedInCaption: `📈 SpendWise — Turning Numbers Into Insight

A list of transactions tells you what happened. It doesn't tell you how you're doing.

That gap is what the Reports screen exists to close — and it taught me that picking a chart type isn't decoration, it's answering a specific question.

Three questions, three forms:

→ "Am I net positive this month?" → a bar chart. Two magnitudes, directly compared. (BarMark)

→ "Where did my money actually go?" → a donut. Parts of a whole, where the whole is the point. (SectorMark)

→ "Am I getting better or worse?" → a line. Change over time, where the shape matters more than any single value. (LineMark)

Swift Charts made all three native — no third-party dependency, and light/dark plus Dynamic Type work out of the box.

Two things I'd carry into any app with charts:

→ There is no separate "reporting pipeline". The charts read the same derived figures as the dashboard. One source of truth, whether the answer is rendered as a number or a shape.

→ Colour is never the only label. Every series is named next to its mark. If colour is the only way to tell two things apart, the chart fails for a colourblind reader — and roughly 1 in 12 men are.

A chart is not "the data, but prettier". It's the answer to a question you chose to ask.

Next post: money that repeats.

Open source — GitHub link in the comments.

What's your go-to chart for "where did it all go"? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftCharts #DataVisualization #Accessibility #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
