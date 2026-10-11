---
title: "JobPostDirectUploadLinkResponse"
kind: "object"
domain: "Other"
gql_name: "JobPostDirectUploadLinkResponse"
html_id: "definition-JobPostDirectUploadLinkResponse"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostDirectUploadLinkResponse"
generated_by: "scripts/convert.mjs"
---


# `JobPostDirectUploadLinkResponse` (object)

## Fields

| Field | Type | Description |
|---|---|---|
| `uid` | [`ID!`](../scalars/ID.md) |  |
| `uploadUrl` | [`String!`](../scalars/String.md) |  |
| `formKeyValues` | [`[StringMapElement]!`](StringMapElement.md) |  |

## Examples

### Example

```json
{
  "uid": 4,
  "uploadUrl": "abc123",
  "formKeyValues": [StringMapElement]
}
```
