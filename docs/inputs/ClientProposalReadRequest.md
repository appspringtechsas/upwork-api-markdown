---
title: "ClientProposalReadRequest"
kind: "input_object"
domain: "Proposals"
gql_name: "ClientProposalReadRequest"
html_id: "definition-ClientProposalReadRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalReadRequest"
generated_by: "scripts/convert.mjs"
---


# `ClientProposalReadRequest` (input object)

## Description

Client proposal read request

## Fields

| Field | Type | Description |
|---|---|---|
| `proposalId` | [`ID!`](../scalars/ID.md) | Client proposal identifier |
| `jobPostingId` | [`ID!`](../scalars/ID.md) | Job posting identifier of the proposal |

## Examples

### Example

```json
{"proposalId": "4", "jobPostingId": 4}
```
