import { definePost } from '../../lib/factories';

// 2/8 — The tech stack, grouped by concern (real iOS choices from the codebase).
export default definePost({
  title: 'THE TECH STACK',
  highlightWord: 'STACK',
  subtitle: 'Every technology chosen to solve a specific engineering problem.',
  layout: 'techStack',
  quote: "A good stack isn't the newest tools — it's giving every tool one clear responsibility.",
  layoutData: {
    categories: [
      { title: 'UI', technologies: ['SwiftUI', 'SF Symbols', 'AsyncImage'] },
      { title: 'Architecture', technologies: ['MVVM', 'Repository', 'Use Cases'] },
      { title: 'Concurrency', technologies: ['async/await', 'Actors', 'Combine'] },
      { title: 'Persistence', technologies: ['SwiftData', '@AppStorage'] },
      { title: 'Dependency Injection', technologies: ['Protocol DI', '@Environment'] },
      { title: 'Testing', technologies: ['Swift Testing', 'Protocol Fakes'] },
    ],
  },
  linkedInCaption: `Project 01 • Post 2/8 — Movie Explorer (iOS)

When I started building Movie Explorer, I didn't want to add technologies just because they're trendy.

I wanted every tool to have a clear responsibility.

Here's the stack:

🎨 UI
→ SwiftUI
→ SF Symbols
→ AsyncImage

🏗️ Architecture
→ MVVM
→ Repository Pattern
→ Use Cases

⚡ Concurrency
→ async/await
→ Actors
→ Combine (for debounced search only)

💾 Persistence
→ SwiftData
→ @AppStorage

🧩 Dependency Injection
→ Protocol-based DI
→ @Environment

✅ Quality
→ Swift Testing
→ Protocol fakes

The decision I'm happiest with: business logic lives in the domain and repository layers, while views stay focused on rendering state and forwarding user intent.

Next post: the overall architecture and how data flows through the app — from the view down to the fake service and SwiftData.

🔗 Source code on GitHub (link in the comments).

Which of these would you like me to go deeper on? 👇

#iOSDevelopment #SwiftUI #Swift #MVVM #SoftwareArchitecture #SwiftData #Combine #iOSDeveloper #OpenSource #LearningInPublic`,
});
