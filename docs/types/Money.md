---
title: "Money"
kind: "object"
domain: "Other"
gql_name: "Money"
html_id: "definition-Money"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Money"
generated_by: "scripts/convert.mjs"
---


# `Money` (object)

## Description

Monetary amount with raw, currency and display representations

## Fields

| Field | Type | Description |
|---|---|---|
| `rawValue` | [`String!`](../scalars/String.md) | Float point as a string, for example "1.23" |
| `currency` | [`String!`](../scalars/String.md) | [https://en.wikipedia.org/wiki/ISO_4217](https://en.wikipedia.org/wiki/ISO_4217) |
| `displayValue` | [`String!`](../scalars/String.md) | Display representation, for example, "$1.23" |

## Examples

### Example

```json
{
  "rawValue": "xyz789",
  "currency": "xyz789",
  "displayValue": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Money" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Language](Language.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [PageInfo](PageInfo.md) ➡️
