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
{"contractId": 4, "timestamp": 123}
```
