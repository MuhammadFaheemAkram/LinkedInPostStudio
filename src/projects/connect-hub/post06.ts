import { definePost } from '../../lib/factories';

// 6/8 — NEW concept: debounce / doing less work. Real Combine pipeline from
// SearchViewModel. `code` layout — used once in Movie Explorer, but this is a
// completely different kind of snippet (a reactive pipeline, not a view model).
export default definePost({
  title: 'SEARCH THAT WAITS',
  highlightWord: 'WAITS',
  subtitle: 'Typing "swift" is six keystrokes. It should not be six searches.',
  layout: 'code',
  quote: 'Sometimes the optimisation is not doing the work at all.',
  layoutData: {
    language: 'swift',
    filename: 'SearchViewModel.swift',
    code: [
      'subject',
      '    .debounce(for: .milliseconds(300),',
      '              scheduler: DispatchQueue.main)',
      '    .removeDuplicates()',
      '    .sink { [weak self] query in',
      '        Task { await self?.runSearch(query) }',
      '    }',
    ].join('\n'),
    caption: 'debounce waits for a pause. removeDuplicates drops repeats. Six keystrokes, one search.',
  },
  linkedInCaption: `🔎 ConnectHub — Search That Waits

Type "swift" into a naive search field and you fire six searches — one per keystroke. Five of them are already obsolete before they return.

Worse, they can finish out of order. The results for "swi" can land after the results for "swift", and now the screen is showing the wrong thing entirely.

The fix is to make the search patient. In ConnectHub that's a small Combine pipeline:

→ debounce(300ms) — wait for a pause in typing before searching at all. Six keystrokes become one search.

→ removeDuplicates() — if the query hasn't actually changed, don't search again. Backspacing a character and retyping it shouldn't cost anything.

→ Then hand off to async/await for the actual work.

This is the one place in the whole app where I reached for Combine. Everywhere else, async/await is simpler and clearer. But debouncing is a *continuous stream over time* problem, and that's precisely what Combine is good at.

That's the real takeaway: async/await and Combine aren't competitors. One-shot work → async/await. A stream of events where timing matters → Combine. Knowing which question you're answering picks the tool.

And the deeper lesson: the best performance win here wasn't making the search faster. It was not running it five times.

Next post: what a feed stands on.

Open source — GitHub link in the comments.

Where do you still reach for Combine in a modern Swift codebase? 👇

#iOSDevelopment #Swift #SwiftUI #Combine #AsyncAwait #Performance #SoftwareArchitecture #OpenSource #iOSDeveloper #LearningInPublic`,
});
