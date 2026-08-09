import { definePost } from '../../lib/factories';

// 3/8 — NEW concept: domain modeling. Uses the new `dataModel` layout.
export default definePost({
  title: 'MODELING THE DOMAIN',
  highlightWord: 'DOMAIN',
  subtitle: 'Four entities, and the rules that decide how they relate.',
  layout: 'dataModel',
  quote: 'Model the nouns wrong and every feature after it pays interest.',
  layoutData: {
    entities: [
      {
        name: 'Transaction',
        primary: true,
        fields: ['id: UUID', 'amount: Money', 'type: income|expense', 'categoryId', 'accountId', 'date: Date'],
      },
      { name: 'Category', fields: ['id: UUID', 'name: String', 'type', 'icon + color'] },
      { name: 'Account', fields: ['id: UUID', 'name: String', 'type: cash|bank|wallet'] },
      { name: 'Budget', fields: ['id: UUID', 'categoryId', 'month: "yyyy-MM"', 'limit: Money'] },
    ],
    relations: [
      { from: 'Transaction', to: 'Category', label: 'belongs to' },
      { from: 'Transaction', to: 'Account', label: 'posted to' },
      { from: 'Budget', to: 'Category', label: 'one per month' },
    ],
    rules: [
      'A category or account cannot be deleted while a transaction still references it',
      'Account balance is derived from its transactions — never a stored field',
      'A budget stores only its limit; what was spent is computed from the month',
    ],
  },
  linkedInCaption: `🧩 SpendWise — Modeling the Domain

Before writing a single screen, I spent time on a question that sounds boring and turns out to decide everything:

What are the nouns, and how do they relate?

SpendWise came down to four:

→ Transaction — an amount, a type (income or expense), a date, and references to a category and an account.
→ Category — Food, Bills, Salary… with an icon and colour.
→ Account — cash, bank, or wallet.
→ Budget — a limit for one category, in one month.

The relationships are simple. The rules between them are where the engineering lives:

→ You cannot delete a category or account that transactions still reference. Deleting it would orphan real records, so the app blocks it instead of silently corrupting history.

→ An account's balance is not a stored field. It's derived from that account's transactions. If it were stored, every edit would need to remember to update it — and one missed path means a wrong balance forever.

→ A budget stores only its limit. What you've spent is computed from the month's transactions.

Notice the pattern: anything that can be computed from the transactions is computed. The stored model is deliberately small.

That single principle removed an entire category of "these two numbers disagree" bugs — the kind that are miserable to reproduce.

A good domain model doesn't just describe the data. It makes the wrong state impossible to represent.

Next post: where those derived figures should actually be calculated.

Open source — GitHub link in the comments.

How do you decide what to store vs compute? 👇

#iOSDevelopment #Swift #SwiftData #DomainModeling #SoftwareArchitecture #CleanArchitecture #OpenSource #MobileDevelopment #iOSDeveloper #LearningInPublic`,
});
