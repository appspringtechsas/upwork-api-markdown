---
title: "Jobs"
kind: "section"
html_id: "examples-jobs"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#examples-jobs"
generated_by: "scripts/convert.mjs"
---


# Jobs

Upwork is a marketplace built for professional jobs that can typically be done remotely on a computer, rather than, say, physical labor.

Learn how to create, search, and view job postings as a client using the GraphQL API.

**Workflow: Client Job Postings Sample Flow**
1. **Post a job** — call [`createJobPosting`](../../mutations/createJobPosting.md) (mutation): Create a new job posting for your organization.
2. **List organization job postings** — call [`organization`](../../queries/organization.md) (query, uses example variant `jobPostings`): List job postings for your organization.
3. **View job details** — call [`jobPosting`](../../queries/jobPosting.md) (query): Fetch details for a job posting owned by your organization.
4. **Search jobs** — call [`marketplaceJobPostingsSearch`](../../queries/marketplaceJobPostingsSearch.md) (query): Search marketplace job postings with filters and pagination.
5. **View marketplace job details** — call [`marketplaceJobPosting`](../../queries/marketplaceJobPosting.md) (query): Fetch details for a job posting on the marketplace.

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#examples-jobs" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [examples index](README.md)   ·   [📚 Docs index](../../README.md)   ·   **Next:** [search](search.md) ➡️
