---
title: "BidList"
kind: "object"
domain: "Other"
gql_name: "BidList"
html_id: "definition-BidList"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BidList"
generated_by: "scripts/convert.mjs"
---


# `BidList` (object)

## Fields

| Field | Type | Description |
|---|---|---|
| `bids` | [`[Bid]`](Bid.md) | Collection of bids |
| `limit` | [`Int`](../scalars/Int.md) | current input limit |
| `offset` | [`Int`](../scalars/Int.md) | current input offset |

## Examples

### Example

```json
{"bids": [Bid], "limit": 123, "offset": 987}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BidList" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Bid](Bid.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [BuyerAssignmentsStats](BuyerAssignmentsStats.md) ➡️
