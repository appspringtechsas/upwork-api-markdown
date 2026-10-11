---
title: "FileInfo"
kind: "object"
domain: "Proposals"
gql_name: "FileInfo"
html_id: "definition-FileInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FileInfo"
generated_by: "scripts/convert.mjs"
---


# `FileInfo` (object)

## Description

File info

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | file uid Ex: "1120653822065278976" |
| `uploadUrl` | [`String!`](../scalars/String.md) | Created using bucket |
| `formKeyValues` | [`[StringMapElement!]!`](StringMapElement.md) | formKeyValues holds following attributes ......... key Generated from UrlInfoInput- keyPrefix("api/gql/domain/") Ex: "api/gql/domain/77987***********" acl Ex: "private" Content-Disposition Generated from UrlInfoInput- "content-type,fileName,downloadBehaviour("inline \| attachment")" Ex: "attachment; filename="abc.txt";filename*=utf-8''abc.txt" AWSAccessKeyId Ex: "ASI**************" policy Generated from UrlInfoInput- "bucket, key, timestamp, maxFileSize, contentType, contentDisposition" signature Generated from formKeyValues' "policy" Content-Type Ex: "application/octet-stream" Form key-values |

## Examples

### Example

```json
{
  "id": "4",
  "uploadUrl": "xyz789",
  "formKeyValues": [StringMapElement]
}
```
