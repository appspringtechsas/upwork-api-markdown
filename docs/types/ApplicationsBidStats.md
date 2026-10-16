---
title: "ApplicationsBidStats"
kind: "object"
domain: "Job Posts"
gql_name: "ApplicationsBidStats"
html_id: "definition-ApplicationsBidStats"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ApplicationsBidStats"
generated_by: "scripts/convert.mjs"
---


# `ApplicationsBidStats` (object)

## Description

Statistics of bids on a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `avgRateBid` | [`Money`](Money.md) | Average bid rate |
| `minRateBid` | [`Money`](Money.md) | Minimum bid rate |
| `maxRateBid` | [`Money`](Money.md) | Maximum bid rate |
| `avgInterviewedRateBid` | [`Money`](Money.md) | Average bid rate for interviewed candidates |

## Examples

### Example

```json
{
  "avgRateBid": Money,
  "minRateBid": Money,
  "maxRateBid": Money,
  "avgInterviewedRateBid": Money
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ApplicationsBidStats" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [types index](README.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Area](Area.md) ➡️
