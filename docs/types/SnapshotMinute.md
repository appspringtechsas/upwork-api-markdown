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
{"time": 123, "mouse": 123, "keyboard": 123}
```
