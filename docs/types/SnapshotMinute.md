---
title: "SnapshotMinute"
kind: "object"
domain: "Users and teams"
gql_name: "SnapshotMinute"
html_id: "definition-SnapshotMinute"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SnapshotMinute"
generated_by: "scripts/convert.mjs"
---


# `SnapshotMinute` (object)

## Description

Activity events for a single minute within a snapshot

## Fields

| Field | Type | Description |
|---|---|---|
| `time` | [`Int`](../scalars/Int.md) | Event timestamp (epoch seconds) |
| `mouse` | [`Int`](../scalars/Int.md) | Number of mouse events |
| `keyboard` | [`Int`](../scalars/Int.md) | Number of keyboard events |

## Examples

### Example

```json
{"time": 987, "mouse": 123, "keyboard": 987}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SnapshotMinute" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Snapshot](Snapshot.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [SnapshotMinutes](SnapshotMinutes.md) ➡️
