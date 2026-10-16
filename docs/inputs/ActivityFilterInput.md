---
title: "ActivityFilterInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "ActivityFilterInput"
html_id: "definition-ActivityFilterInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ActivityFilterInput"
generated_by: "scripts/convert.mjs"
---


# `ActivityFilterInput` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `contractId` | [`ID`](../scalars/ID.md) | Filter activities assigned to a specific contract |
| `search` | [`String`](../scalars/String.md) | Search term to filter tasks by code and description |
| `status` | [`String`](../scalars/String.md) | Filter activities by status |
| `detailsLimit` | [`Int`](../scalars/Int.md) | Amount of contracts to return |

## Examples

### Example

```json
{
  "contractId": "4",
  "search": "xyz789",
  "status": "abc123",
  "detailsLimit": 987
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ActivityFilterInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentWorkHistorySort](TalentWorkHistorySort.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [AddTeamActivityRequest](AddTeamActivityRequest.md) ➡️
