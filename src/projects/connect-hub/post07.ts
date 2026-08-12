import { definePost } from '../../lib/factories';

// 7/8 — NEW concept: the feed's READ path (cache + paging), distinct from
// post 5's write path. `pyramid` — unused in Movie Explorer and SpendWise.
export default definePost({
  title: 'WHAT A FEED STANDS ON',
  highlightWord: 'STANDS ON',
  subtitle: 'An infinite list is three decisions stacked on top of each other.',
  layout: 'pyramid',
  quote: 'Users never see your loading strategy. They only feel it.',
  layoutData: {
    levels: [
      { title: 'Cached Posts', description: 'The feed renders from SwiftData before any request is made' },
      { title: 'Paged Fetching', description: 'One page at a time, with an explicit canLoadMore flag' },
      { title: 'Instant Feel', description: 'Nothing the user does waits on the network' },
    ],
  },
  linkedInCaption: `📰 ConnectHub — What a Feed Stands On

A social feed looks like the simplest screen in the app. It's a list. You scroll it.

It's actually three decisions stacked on top of each other, and each one only works because of the one below it.

1. Cached posts — the foundation.
The feed renders from SwiftData before any request goes out. Open the app on a plane and you still see your feed. The network refreshes the cache; it never blocks the first paint.

2. Paged fetching — the middle.
Posts load a page at a time, with an explicit flag for whether more exist. Two details mattered more than I expected:

→ "Am I loading more?" and "am I refreshing?" are different states. Collapse them into one isLoading and you get a full-screen spinner over content the user was already reading.

→ You need an honest answer to "is that everything?" Guessing produces either a spinner that never resolves, or a feed that stops early.

3. Instant feel — the top.
Because 1 and 2 hold, nothing the user does has to wait. Scroll, like, bookmark — all local.

That's the part I'd carry into any list screen: perceived speed is mostly about what you don't make the user wait for. The cache means they never wait to see something. Paging means they never wait for everything.

Users never see your loading strategy. They only feel it.

Final post next.

Open source — GitHub link in the comments.

What's your default: cache-first or network-first? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftData #OfflineFirst #Performance #SoftwareArchitecture #OpenSource #iOSDeveloper #LearningInPublic`,
});
