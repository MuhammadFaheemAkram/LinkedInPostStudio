import { definePost } from '../../lib/factories';

/**
 * A post authors *content only*. Its number (1/N) is derived from its position
 * in the project's post list, so you never hand-number posts.
 *
 * `layout` is the discriminant: change it and TypeScript will require the
 * matching `layoutData` shape. See src/lib/layoutRegistry.ts for all 16 layouts.
 */
export default definePost({
  title: 'YOUR\nHOOK HERE',
  highlightWord: 'HOOK',
  subtitle: 'One supporting line under the title.',
  layout: 'projectHero',
  quote: 'The one-sentence takeaway that anchors the post.',
  layoutData: {
    description: 'What the project is, in one or two sentences.',
    techStack: ['SwiftUI', 'MVVM', 'async/await'],
    features: ['Feature one', 'Feature two', 'Feature three'],
  },
  // Ready-to-publish LinkedIn caption. Shown beside the canvas with a Copy
  // button; never part of the exported image. Plain text only — no markdown
  // (LinkedIn ignores bold/italic/bullets); use line breaks, emojis, and → / ✅.
  linkedInCaption: `Project NN • Post 1/N — <Project Name>

Your opening line here.

→ point one
→ point two

Closing question? 👇

#iOSDevelopment #SwiftUI #Swift #LearningInPublic`,
});
