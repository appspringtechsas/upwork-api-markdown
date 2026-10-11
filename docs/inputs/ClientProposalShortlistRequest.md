---
title: "ClientProposalShortlistRequest"
kind: "input_object"
domain: "Proposals"
gql_name: "ClientProposalShortlistRequest"
html_id: "definition-ClientProposalShortlistRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalShortlistRequest"
generated_by: "scripts/convert.mjs"
---


# `ClientProposalShortlistRequest` (input object)

## Description

Client proposal shortlist request

## Fields

| Field | Type | Description |
|---|---|---|
| `proposalId` | [`ID!`](../scalars/ID.md) | Client proposal identifier |
| `jobPostingId` | [`ID!`](../scalars/ID.md) | Job posting identifier of the proposal |
| `shortlisted` | [`Boolean!`](../scalars/Boolean.md) | Whether the proposal is shortlisted |

## Examples

### Example

```json
{
  "proposalId": "4",
  "jobPostingId": "4",
  "shortlisted": false
}
```
