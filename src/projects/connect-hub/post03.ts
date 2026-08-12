import { definePost } from '../../lib/factories';

// 3/8 — The signature ConnectHub concept: data races and actors, grounded in
// the real `actor MessageStore`.
export default definePost({
  title: 'TWO TASKS, ONE INBOX',
  highlightWord: 'ONE INBOX',
  subtitle: 'Chat is the one place where two things really do write at once.',
  layout: 'beforeAfter',
  quote: 'A data race is not a crash. It is a message that silently never existed.',
  layoutData: {
    beforeTitle: 'A shared class',
    beforeItems: [
      'Your send and the reply land together',
      'Both read the same array',
      'Both write it back',
      'One message quietly disappears',
    ],
    afterTitle: 'An actor',
    afterItems: [
      'Calls are serialized automatically',
      'One task inside at a time',
      'await marks every hop',
      'The compiler enforces it',
    ],
    transitionLabel: 'actor',
  },
  linkedInCaption: `⚡ ConnectHub — Two Tasks, One Inbox

Most of an app is safe by accident. One task, one screen, nothing overlapping.

Chat is not. In ConnectHub, your outgoing message and the simulated reply can land at the same moment — genuinely concurrent writes to the same list.

With a plain shared class, here's the failure:

Both tasks read the current messages array. Both append their own message. Both write it back. The second write overwrites the first — and one message is simply gone.

Nothing crashes. No error is logged. A message just never existed.

That's what makes data races expensive: they don't fail loudly, they fail quietly and occasionally, which is the hardest kind of bug to reproduce.

The fix was to make the message store an actor.

An actor guarantees that only one task is inside it at a time. Calls from outside are serialized automatically — so "read, append, write" can't be interleaved by another task halfway through.

Three things I appreciated:

→ No locks. I didn't write a single queue or mutex. The isolation is part of the type.
→ The await tells the truth. Every call into the actor is marked, so the places where your code can suspend are visible instead of hidden.
→ The compiler is on your side. Swift 6's concurrency checking won't let you casually pass mutable state across that boundary.

The lesson: concurrency bugs aren't solved by being careful. They're solved by picking a type that makes the bug impossible to write.

Next post: how a chat that isn't real still manages to feel alive.

Open source — GitHub link in the comments.

What's the worst race condition you've had to track down? 👇

#iOSDevelopment #Swift #SwiftConcurrency #Actors #Concurrency #SoftwareArchitecture #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
