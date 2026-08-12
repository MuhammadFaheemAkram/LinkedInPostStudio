import { definePost } from '../../lib/factories';

// 5/8 — NEW concept: local-first writes. Truthful to the code: like/bookmark
// write to the SwiftData cache and the UI updates from the observed stream —
// not optimistic-with-rollback.
export default definePost({
  title: 'THE LIKE BUTTON NEVER WAITS',
  highlightWord: 'NEVER WAITS',
  subtitle: 'Write locally, observe locally. The network is not in the interaction path.',
  layout: 'metrics',
  quote: 'The fastest request is the one that was never on the critical path.',
  layoutData: {
    metrics: [
      { label: 'Tap to feedback', before: 'A round trip', after: 'Immediate' },
      { label: 'Source of truth', before: 'The response', after: 'The local store' },
      { label: 'With no network', before: 'Nothing happens', after: 'Still works' },
    ],
  },
  linkedInCaption: `❤️ ConnectHub — Why the Like Button Never Waits

Tapping like should be the most boring interaction in a social app. It's also an easy one to get subtly wrong.

The naive version: tap → call the server → wait → update the UI. Even at 200ms, that's a button that feels sticky. With no connection, it does nothing at all.

ConnectHub inverts it. The like writes to the local store, and the UI updates because it is observing that store.

What changes:

→ Tap to feedback: a round trip → immediate.
→ Source of truth: the server's response → the local store.
→ With no network: nothing happens → it still works.

The important part isn't "it's faster". It's that the interaction and the sync are no longer the same operation.

The UI's job is to reflect local state. Getting that state to a server later is a separate concern with separate failure handling — and crucially, its failures don't have to live inside a button tap.

Because ConnectHub's backend is fake, this is easy to demo. But the shape is exactly what you'd keep in production: write locally, render from local, reconcile in the background. It's why good apps stay usable on a train.

One honest caveat: this only works if the local store really is the single source of truth. The moment a screen renders straight from a network response instead, the two disagree — and you're back to a UI that flickers between versions of reality.

Next post: the one place where responding instantly is the wrong answer.

Open source — GitHub link in the comments.

Local-first or server-confirmed — what does your app do? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftData #OfflineFirst #UXEngineering #SoftwareArchitecture #OpenSource #iOSDeveloper #LearningInPublic`,
});
