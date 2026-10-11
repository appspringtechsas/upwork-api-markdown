---
title: "ProposalMetadata"
kind: "object"
domain: "Proposals"
gql_name: "ProposalMetadata"
html_id: "definition-ProposalMetadata"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalMetadata"
generated_by: "scripts/convert.mjs"
---


# `ProposalMetadata` (object)

## Description

Proposal metadata reference values

## Fields

| Field | Type | Description |
|---|---|---|
| `engagementDurationValues` | [`[ProposalEngagementDuration!]!`](ProposalEngagementDuration.md) | Available engagement duration options |
| `reasons` | [`[ReasonsMetadata!]!`](ReasonsMetadata.md) | Reasons metadata filtered by type |

## Field arguments

### `reasons`

| Argument | Type | Description |
|---|---|---|
| `reasonType` | [`ReasonType`](../enums/ReasonType.md) |  |

## Examples

### Example

```json
{
  "engagementDurationValues": [
    ProposalEngagementDuration
  ],
  "reasons": [ReasonsMetadata]
}
```
