---
title: "confirmFiles"
kind: "mutation"
gql_name: "confirmFiles"
returns: "Boolean"
html_id: "mutation-confirmFiles"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-confirmFiles"
generated_by: "scripts/convert.mjs"
---


# `confirmFiles`

## Description

Confirm files, returned is a flag indicating whether operation was successful or not

## Required Permissions

"Common Functionality - Read And Write Access"

## Response

Returns a [`Boolean`](../scalars/Boolean.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `fileIds` | [`[ID!]!`](../scalars/ID.md) | List of file IDs to confirm |
| `skipMissing` | [`Boolean`](../scalars/Boolean.md) | `true` |

## Examples

### Detailed structure

#### Query

```graphql
mutation confirmFiles(
  $fileIds: [ID!]!,
  $skipMissing: Boolean
) {
  confirmFiles(
    fileIds: $fileIds,
    skipMissing: $skipMissing
  )
}
```

#### Variables

```json
{"fileIds": [4], "skipMissing": true}
```

#### Response

```json
{"data": {"confirmFiles": true}}
```
