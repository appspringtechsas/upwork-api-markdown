---
title: "confirmRoomMessageFiles"
kind: "mutation"
gql_name: "confirmRoomMessageFiles"
returns: "Boolean"
html_id: "mutation-confirmRoomMessageFiles"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-confirmRoomMessageFiles"
generated_by: "scripts/convert.mjs"
---


# `confirmRoomMessageFiles`

## Description

Confirms room message attachment files after upload to S3

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns a [`Boolean`](../scalars/Boolean.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `fileIds` | [`[ID!]!`](../scalars/ID.md) | List of file IDs to confirm |

## Examples

### Detailed structure

#### Query

```graphql
mutation confirmRoomMessageFiles($fileIds: [ID!]!) {
  confirmRoomMessageFiles(fileIds: $fileIds)
}
```

#### Variables

```json
{"fileIds": ["4"]}
```

#### Response

```json
{"data": {"confirmRoomMessageFiles": true}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-confirmRoomMessageFiles" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [confirmFiles](confirmFiles.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [createClientJobInvitation](createClientJobInvitation.md) ➡️
