---
title: "PrivateFeedbackMultiLevelReasonInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "PrivateFeedbackMultiLevelReasonInput"
html_id: "definition-PrivateFeedbackMultiLevelReasonInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PrivateFeedbackMultiLevelReasonInput"
generated_by: "scripts/convert.mjs"
---


# `PrivateFeedbackMultiLevelReasonInput` (input object)

## Description

Multi-level private feedback reason entry

## Fields

| Field | Type | Description |
|---|---|---|
| `level` | [`String!`](../scalars/String.md) | Reason level key (e.g. level1, level2) |
| `values` | [`[String!]!`](../scalars/String.md) | Selected values for the level |

## Examples

### Example

```json
{
  "level": "xyz789",
  "values": ["xyz789"]
}
```
