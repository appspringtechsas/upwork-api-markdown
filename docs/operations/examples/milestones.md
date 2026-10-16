---
title: "Milestones"
kind: "section"
html_id: "examples-milestones"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#examples-milestones"
generated_by: "scripts/convert.mjs"
---


# Milestones

Understanding milestones on fixed-price contracts using the public API. A milestone is a way to divide a fixed-price contract into smaller chunks, if needed. Each milestone represents a part of the work, along with a set payment. When you submit work for a milestone and the client approves it, you get paid for that piece before moving on to the next.

Create a milestone and approve it after the freelancer submits work.

**Workflow: Working with Milestones Sample Flow**
1. **Create milestone** — call [`createMilestoneV2`](../../mutations/createMilestoneV2.md) (mutation): Add a milestone to an offer or contract with amount and due date.
2. **Approve milestone** — call [`approveMilestone`](../../mutations/approveMilestone.md) (mutation): Approve a submitted milestone and release payment to the freelancer.

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#examples-milestones" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [offers-and-contracts](offers-and-contracts.md)   ·   [📚 Docs index](../../README.md)   ·   **Next:** [payments](payments.md) ➡️
