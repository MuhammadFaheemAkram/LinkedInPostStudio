# LinkedIn Post Studio — *Modern iOS in Practice*

A type-safe React studio for designing and exporting engineering LinkedIn graphics.
Built for the **portfolio era**: real projects, ~4–5 posts each, one consistent iOS-flavoured
design system. Adding a new post means editing a small data file (or just the UI) — never HTML.

- **Canvas:** 1080px wide, **height grows with content** (posts and exported PNGs are never clipped).
- **Look:** true-black canvas, Apple system-blue accent, SF Pro type, squircle cards, ambient glow.
- **Export:** one post, or a whole project at once, to crisp 2× PNGs.

---

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Vite prints. Left = editor, right = live 1080px canvas.

Type-check / production build:

```bash
npm run typecheck
npm run build
```

---

## How it's organised

```
src/
  brand.ts                # YOUR identity: name, role, website, series, header badges
  tailwind tokens         # (tailwind.config.ts) the iOS palette + type scale
  types/
    post.ts               # layout union + every layout's data shape + PostDraft/RenderablePost
    project.ts            # ProjectMeta
  lib/
    factories.ts          # defineProject(), definePost(), createDefaultLayoutData()
    layoutRegistry.ts     # id / name / description / category for all 16 layouts
  components/             # Header, Footer, Title, Badge, QuoteCard, Card, CodeBlock, TechBadges
  layouts/               # one file per layout (16)
  renderer/PostRenderer  # picks the layout and frames it (header + title + center + quote + footer)
  editor/EditorPanel     # project/post pickers + per-layout field editors + export buttons
  projects/
    index.ts              # the registry — the list the studio renders
    _template/            # copy this to start a new project
    movie-explorer/       # worked example (Project 01, 5 posts)
      project.ts          # metadata (defined once)
      index.ts            # defineProject(meta, [post01…post05])
      post01.ts … post05.ts
```

### The core idea

- **Project metadata is written once** in `project.ts` and merged into every post by
  `defineProject`. Post files never repeat the series name, project name, or numbering.
- **Post numbers are derived** from array order — `post03.ts` becomes `3 / <count>` automatically.
- **Everything is a discriminated union**, so `layout: 'code'` forces a `CodeLayoutData` and you get
  autocomplete + red squiggles when a field is wrong.

---

## Add a new post to a project

1. Create `postNN.ts` in the project folder:

   ```ts
   import { definePost } from '../../lib/factories';

   export default definePost({
     title: 'YOUR\nHOOK',
     highlightWord: 'HOOK',
     subtitle: 'A supporting line.',
     layout: 'comparison',
     quote: 'The one-sentence takeaway.',
     layoutData: {
       left: { title: 'UIKit', body: ['…'] },
       right: { title: 'SwiftUI', body: ['…'] },
       favorRight: true,
     },
   });
   ```

2. Add it to the project's `index.ts` array. Done — numbering and branding are automatic.

You can also draft entirely in the **UI** (edit any field live) and just export the PNG — handy
before you commit the content to a file.

## Add a new project

1. Copy `src/projects/_template` → `src/projects/<your-slug>`.
2. Fill in `project.ts` (id, name, number, links, concepts) and write the posts.
3. Import it in `src/projects/index.ts` and add it to the `projects` array.

It now shows up in the project picker and in `?project=<slug>` deep links.

---

## The 16 layouts

| Category | Layouts |
| --- | --- |
| **Project** | `projectHero`, `projectOverview`, `techStack`, `folderTree`, `chartShowcase` |
| **Architecture** | `architecture`, `flow`, `decisionMatrix`, `dataModel` |
| **Engineering** | `comparison`, `beforeAfter`, `metrics`, `checklist`, `pyramid`, `pitfall` |
| **Code** | `code` (Swift, Kotlin, Java, Dart, TypeScript) |
| **Career / Reflection** | `timeline`, `reflection`, `quoteHero` |

### One concept per post, one concept per series

Posts run daily to the same audience, so **a concept explained in one project is
spent** — don't re-explain the stack, the folder tree, or the data flow in the next
project. Pick what is genuinely new about *this* app, and prefer a layout the series
hasn't used recently. When a post deserves a shape that doesn't exist yet, add a
layout rather than forcing the content into an existing one.

### Chart colours

`chartShowcase` uses a fixed categorical order — `#0A84FF`, `#D97706`, `#A855F7`,
`#0FA5B8` — validated against the dark chart surface for lightness, chroma, CVD
separation and contrast (not chosen by eye). Series are always named next to their
mark, so colour never carries identity alone. Assign in order; never cycle or
reassign by rank.

Every layout's exact data shape lives in `src/types/post.ts`; friendly names/descriptions in
`src/lib/layoutRegistry.ts`.

---

## Editor shorthands

Some list-style layouts use compact text in the editor:

- **Timeline** — `time | title | body` (one event per line)
- **Decision options** — `title | pro, pro | con, con`
- **Pyramid levels** — `title | description` (foundation first)
- **Metrics** — `label | before | after`
- **Tech stack** — `Category | tech, tech, tech`
- **Folder tree** — 2 spaces per level, trailing `*` = highlighted, ` // note` for a side note

---

## Export

- **Export this post** → `<project>-post-NN.png`
- **Export all in <project>** → every post in the current project, rendered off-screen at full size.
- PNGs are 2× (retina), full-bleed, and sized to the content height.

### Screenshot mode / deep links

Append query params to render a single post with no editor chrome (useful for automation):

```
?screenshot=true&project=movie-explorer&post=3
```

---

## LinkedIn captions

Each post can carry a `linkedInCaption` — the ready-to-publish text (with hashtags) you
paste into LinkedIn under the exported image. It shows in a panel beside the canvas with a
**Copy** button and a character count, and is **never part of the exported PNG**.

Keep captions LinkedIn-friendly: **plain text only**. LinkedIn ignores markdown, so use line
breaks, emojis, and `→` / `✅` for structure instead of bold/italic/bullets.

```ts
export default definePost({
  // …title, layout, quote, layoutData…
  linkedInCaption: `Project 01 • Post 2/8 — My App

Opening line.

→ point one
→ point two

Closing question? 👇

#iOSDevelopment #SwiftUI #Swift #LearningInPublic`,
});
```

## Re-skinning for a future series

- **Byline / series name / header badges:** edit `src/brand.ts` only.
- **Whole colour identity:** change `accent` / `accentDeep` in `tailwind.config.ts`. Everything —
  highlights, borders, icons, glow — follows the single accent token.

---

## Tech

React 19 · TypeScript · Vite · Tailwind CSS · Prism (syntax highlighting) · html-to-image · Heroicons.
No backend, no database — everything runs locally.
