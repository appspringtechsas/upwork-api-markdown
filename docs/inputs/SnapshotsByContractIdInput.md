---
title: "SnapshotsByContractIdInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "SnapshotsByContractIdInput"
html_id: "definition-SnapshotsByContractIdInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SnapshotsByContractIdInput"
generated_by: "scripts/convert.mjs"
---


# `SnapshotsByContractIdInput` (input object)

## Description

Input for querying snapshots by contract and timestamp

## Fields

| Field | Type | Description |
|---|---|---|
| `contractId` | [`ID!`](../scalars/ID.md) | Contract identifier |
| `timestamp` | [`Int!`](../scalars/Int.md) | Timestamp in Unix epoch seconds |

## Examples

### Example

```json
{"contractId": "4", "timestamp": 987}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SnapshotsByContractIdInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [RoomUserInput](RoomUserInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [StoryFilter](StoryFilter.md) ➡️
