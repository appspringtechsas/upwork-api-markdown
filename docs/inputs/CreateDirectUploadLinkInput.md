---
title: "CreateDirectUploadLinkInput"
kind: "input_object"
domain: "Proposals"
gql_name: "CreateDirectUploadLinkInput"
html_id: "definition-CreateDirectUploadLinkInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreateDirectUploadLinkInput"
generated_by: "scripts/convert.mjs"
---


# `CreateDirectUploadLinkInput` (input object)

## Description

Input for creating a direct upload link

## Fields

| Field | Type | Description |
|---|---|---|
| `fileName` | [`String!`](../scalars/String.md) | File name |
| `expirationDate` | [`String`](../scalars/String.md) | Expiration date |
| `maxFileSize` | [`Int`](../scalars/Int.md) | Maximum file size |
| `contentType` | [`String`](../scalars/String.md) | Content type |
| `sslEnabled` | [`Boolean`](../scalars/Boolean.md) | Is SSL enabled |
| `metaData` | [`String`](../scalars/String.md) | file metadata |

## Examples

### Example

```json
{
  "fileName": "abc123",
  "expirationDate": "xyz789",
  "maxFileSize": 987,
  "contentType": "xyz789",
  "sslEnabled": false,
  "metaData": "abc123"
}
```
