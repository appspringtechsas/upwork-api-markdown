---
title: "ProposalReason"
kind: "object"
domain: "Proposals"
gql_name: "ProposalReason"
html_id: "definition-ProposalReason"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalReason"
generated_by: "scripts/convert.mjs"
---


# `ProposalReason` (object)

## Description

Vendor or client proposal reason Reason for a proposal status change

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Identifier of the reason for proposal to switch to current status |
| `reason` | [`String!`](../scalars/String.md) | Reason text |
| `description` | [`String`](../scalars/String.md) | Text of the reason for proposal to switch to current status (applicable for declined or withdrawn proposals) |

## Examples

### Example

```json
{
  "id": "4",
  "reason": "abc123",
  "description": "abc123"
}
```
