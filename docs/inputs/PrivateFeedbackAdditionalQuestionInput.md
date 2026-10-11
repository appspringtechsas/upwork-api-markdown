---
title: "PrivateFeedbackAdditionalQuestionInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "PrivateFeedbackAdditionalQuestionInput"
html_id: "definition-PrivateFeedbackAdditionalQuestionInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PrivateFeedbackAdditionalQuestionInput"
generated_by: "scripts/convert.mjs"
---


# `PrivateFeedbackAdditionalQuestionInput` (input object)

## Description

Additional private feedback question payload

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Additional question id |
| `parentQuestionId` | [`ID`](../scalars/ID.md) | Parent additional question id |
| `selected` | [`[String]`](../scalars/String.md) | Selected answers for additional question |
| `tellUsMore` | [`String`](../scalars/String.md) | Free-form comment for additional question |

## Examples

### Example

```json
{
  "id": "4",
  "parentQuestionId": "4",
  "selected": ["xyz789"],
  "tellUsMore": "abc123"
}
```
