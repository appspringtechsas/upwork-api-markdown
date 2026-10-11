---
title: "SnapshotMinutes"
kind: "object"
domain: "Users and teams"
gql_name: "SnapshotMinutes"
html_id: "definition-SnapshotMinutes"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SnapshotMinutes"
generated_by: "scripts/convert.mjs"
---


# `SnapshotMinutes` (object)

## Description

Collection of per-minute activity data for a snapshot

## Fields

| Field | Type | Description |
|---|---|---|
| `minute` | [`[SnapshotMinute]`](SnapshotMinute.md) | List of minute-by-minute activity events |

## Examples

### Example

```json
{"minute": [SnapshotMinute]}
```
