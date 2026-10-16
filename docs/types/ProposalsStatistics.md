---
title: "ProposalsStatistics"
kind: "object"
domain: "Job Posts"
gql_name: "ProposalsStatistics"
html_id: "definition-ProposalsStatistics"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalsStatistics"
generated_by: "scripts/convert.mjs"
---


# `ProposalsStatistics` (object)

## Description

Aggregated proposal statistics

## Fields

| Field | Type | Description |
|---|---|---|
| `totalProposals` | [`Int!`](../scalars/Int.md) | Total number of proposals |
| `totalMessaged` | [`Int!`](../scalars/Int.md) | Total messaged proposals |
| `totalHired` | [`Int!`](../scalars/Int.md) | Total hired |
| `totalInvitesSent` | [`Int!`](../scalars/Int.md) | Total invites sent |
| `totalApplicantsWithAutoHidden` | [`Int!`](../scalars/Int.md) | Total applicants with auto-hidden status |
| `totalArchived` | [`Int!`](../scalars/Int.md) | Total archived proposals |
| `totalAutoHidden` | [`Int!`](../scalars/Int.md) | Total auto-hidden proposals |
| `totalDeclined` | [`Int!`](../scalars/Int.md) | Total declined proposals |
| `totalHidden` | [`Int!`](../scalars/Int.md) | Total hidden proposals |
| `totalOffered` | [`Int!`](../scalars/Int.md) | Total offers made |
| `totalShortlisted` | [`Int!`](../scalars/Int.md) | Total shortlisted proposals |
| `totalWithdrawn` | [`Int!`](../scalars/Int.md) | Total withdrawn proposals |

## Examples

### Example

```json
{
  "totalProposals": 987,
  "totalMessaged": 123,
  "totalHired": 123,
  "totalInvitesSent": 123,
  "totalApplicantsWithAutoHidden": 123,
  "totalArchived": 123,
  "totalAutoHidden": 987,
  "totalDeclined": 987,
  "totalHidden": 987,
  "totalOffered": 987,
  "totalShortlisted": 123,
  "totalWithdrawn": 123
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalsStatistics" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [PreferredTest](PreferredTest.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [PublicMarketplaceJobPostingsSearchClient](PublicMarketplaceJobPostingsSearchClient.md) ➡️
