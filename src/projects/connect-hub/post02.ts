import { definePost } from '../../lib/factories';

// 2/8 — NEW concept: session as a root state machine. Mirrors the real
// RootViewModel.Phase (loading / unauthenticated / authenticated).
export default definePost({
  title: 'WHO IS SIGNED IN?',
  highlightWord: 'SIGNED IN',
  subtitle: 'The first question the app asks — and the only one that reroutes everything.',
  layout: 'stateMachine',
  quote: 'When one value owns the answer, no screen has to guess.',
  layoutData: {
    states: [
      { name: 'loading', detail: 'Restoring a saved session behind the splash', kind: 'initial' },
      { name: 'unauthenticated', detail: 'Show the auth flow' },
      { name: 'authenticated', detail: 'Show the main app', kind: 'active' },
    ],
    transitions: [
      { from: 'loading', to: 'authenticated', label: 'a session was restored' },
      { from: 'loading', to: 'unauthenticated', label: 'nothing saved' },
      { from: 'unauthenticated', to: 'authenticated', label: 'sign in succeeds' },
      { from: 'authenticated', to: 'unauthenticated', label: 'log out' },
    ],
    note: 'The root observes a session stream. Logging out anywhere re-routes the whole app.',
  },
  linkedInCaption: `🔐 ConnectHub — Who Is Signed In?

Before ConnectHub can show anything, it has to answer one question: is someone signed in?

Get this wrong and you get the classic bugs — a flash of the login screen for a signed-in user, or a logout that leaves half the app still showing private data.

So I modelled it as a small state machine at the very root of the app. Three states:

→ loading — restoring any saved session, behind the splash screen.
→ unauthenticated — show the auth flow.
→ authenticated — show the main app.

And the transitions between them:

→ loading → authenticated (a session was restored)
→ loading → unauthenticated (nothing saved)
→ unauthenticated → authenticated (sign in succeeds)
→ authenticated → unauthenticated (log out)

Two things made this work well:

→ The root observes a session stream, not a one-time check. So logging out from deep inside Settings re-routes the entire app automatically — no manual navigation, no cleanup crawling through screens.

→ That "loading" state is not optional. Restoring a session is asynchronous, and without an explicit third state you either block the launch or flash the wrong screen. Naming the in-between state is what removes the flicker.

The wider lesson: when a question has more than two answers, an enum beats a Bool. isLoggedIn can't express "I don't know yet" — and "I don't know yet" is where the bugs live.

Next post: what happens when two things write to the same data at once.

Open source — GitHub link in the comments.

Bool or enum for auth state — where do you land? 👇

#iOSDevelopment #SwiftUI #Swift #StateManagement #SoftwareArchitecture #Authentication #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
