---
title: "Metadata"
kind: "object"
domain: "Offers and Contracts"
gql_name: "Metadata"
html_id: "definition-Metadata"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Metadata"
generated_by: "scripts/convert.mjs"
---


# `Metadata` (object)

## Description

Offer metadata

## Fields

| Field | Type | Description |
|---|---|---|
| `sourceType` | [`SourceType`](../enums/SourceType.md) | Source type of the offer |
| `sourceId` | [`ID`](../scalars/ID.md) | Source identifier (may be empty depending on the case) |
| `data` | [`String`](../scalars/String.md) | Data in JSON format |
| `occupationUid` | [`ID`](../scalars/ID.md) | Occupation unique identifier |

## Examples

### Example

```json
{
  "sourceType": "JobPosting",
  "sourceId": 4,
  "data": "abc123",
  "occupationUid": 4
}
```
