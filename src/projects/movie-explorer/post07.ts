import { definePost } from '../../lib/factories';

// 7/8 — Testing: Swift Testing with protocol fakes over the parts that matter.
export default definePost({
  title: 'TESTING THE APP',
  highlightWord: 'TESTING',
  subtitle: 'Swift Testing with protocol fakes — covering the parts that matter most.',
  layout: 'checklist',
  quote: 'Well-structured code is naturally easier to test.',
  layoutData: {
    heading: 'What I cover with Swift Testing:',
    items: [
      'Use cases — search & toggle favorite',
      'Home & Details view models',
      'Search debounce → results',
      'Favorites store — in-memory SwiftData',
      'Settings store — theme & language',
    ],
  },
  linkedInCaption: `Project 01 • Post 7/8 — Movie Explorer (iOS)

One goal with Movie Explorer was to go beyond building screens and actually test the architecture.

Instead of testing everything, I focused on the layers that matter most:

✅ Unit tests for use cases (search, toggle favorite)
✅ View model tests using protocol fakes (Home, Details)
✅ Debounced search → results
✅ Favorites store with an in-memory SwiftData container
✅ Settings store persisting theme and language

Using protocol fakes made the view models easy to test — no network, no real database.

That reinforced the biggest lesson of the project: good architecture naturally leads to easier testing.

I'm still sharpening my Swift Testing skills, but writing these tests deepened how I think about state, dependency injection, and separation of concerns.

The final post: a reflection on what I learned and what I'd improve next.

🔗 GitHub link in the comments.

What do you test first in a new app? 👇

#iOSDevelopment #SwiftUI #Swift #SwiftTesting #Testing #MVVM #SoftwareArchitecture #iOSDeveloper #OpenSource #LearningInPublic`,
});
