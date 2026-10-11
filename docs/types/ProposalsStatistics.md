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
  "totalMessaged": 987,
  "totalHired": 123,
  "totalInvitesSent": 987,
  "totalApplicantsWithAutoHidden": 123,
  "totalArchived": 123,
  "totalAutoHidden": 123,
  "totalDeclined": 123,
  "totalHidden": 987,
  "totalOffered": 987,
  "totalShortlisted": 987,
  "totalWithdrawn": 123
}
```
