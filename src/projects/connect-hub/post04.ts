import { definePost } from '../../lib/factories';

// 4/8 — NEW concept: async choreography / perceived presence. Uses the new
// `sequence` layout, which reads like a chat transcript.
export default definePost({
  title: 'THE ILLUSION OF PRESENCE',
  highlightWord: 'ILLUSION',
  subtitle: 'Nobody is on the other end. It still has to feel like someone is.',
  layout: 'sequence',
  quote: 'Responsiveness is a feeling, and feelings are built out of timing.',
  layoutData: {
    actors: ['You', 'App'],
    steps: [
      { from: 'You', to: 'App', label: 'Send a message', timing: '0ms' },
      {
        from: 'App',
        to: 'You',
        label: 'It appears immediately',
        detail: 'Written to the local store first, so the UI never waits.',
      },
      {
        from: 'App',
        to: 'You',
        label: 'Typing indicator appears',
        detail: 'A stream flips isTyping — the pause is the point.',
        timing: '~600ms',
      },
      {
        from: 'App',
        to: 'You',
        label: 'The reply arrives',
        detail: 'Appended through the actor, then streamed to the view.',
        timing: '~1.8s',
      },
    ],
    note: 'None of it is real. The timing is what makes it believable.',
  },
  linkedInCaption: `💬 ConnectHub — The Illusion of Presence

ConnectHub has no server. There is nobody on the other end of the chat.

It still had to feel like there was — and that turned out to be a timing problem, not a networking one.

Here's the choreography when you send a message:

→ 0ms — you hit send. The message appears immediately, because it's written to the local store first. The UI never waits for anything.

→ ~600ms — a typing indicator appears. Not instantly: an instant reply feels robotic. The pause is doing the work.

→ ~1.8s — the reply arrives, appended through the actor-backed store and streamed back to the view.

Three things I learned building it:

→ Delay can be a feature. My first version replied instantly and it felt fake — more like a form validating than a person answering. Adding latency made it more convincing, which is a strange thing to write in a performance-obsessed craft.

→ Your own actions should never be delayed. Only the other party's. The asymmetry is what separates "responsive" from "laggy" — the user's input is instant, the simulated world takes its time.

→ The typing indicator is just state. isTyping flips from an async stream. The whole "presence" effect is one Bool and a well-chosen pause.

The broader point: a lot of what users call "fast" or "alive" isn't raw speed. It's whether the timing matches what they expect to happen.

Next post: why the like button never waits for anything.

Open source — GitHub link in the comments.

What's a small timing detail that made your UI feel real? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftConcurrency #UXEngineering #MobileDevelopment #OpenSource #iOSDeveloper #LearningInPublic #AsyncAwait`,
});
