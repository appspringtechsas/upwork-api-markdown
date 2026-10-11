---
title: "createDirectUploadLinkForFileAttachment"
kind: "mutation"
gql_name: "createDirectUploadLinkForFileAttachment"
returns: "FileInfo!"
html_id: "mutation-createDirectUploadLinkForFileAttachment"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createDirectUploadLinkForFileAttachment"
generated_by: "scripts/convert.mjs"
---


# `createDirectUploadLinkForFileAttachment`

## Description

Returns file upload details, containing upload url, for the attachment type informed.

## Required Permissions

"Offer - Read And Write Access"

## Response

Returns a [`FileInfo!`](../types/FileInfo.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`CreateDirectFileAttachmentUploadLinkInput!`](../inputs/CreateDirectFileAttachmentUploadLinkInput.md) | Input containing filename, fileSize and contentType |

## Examples

### Detailed structure

#### Query

```graphql
mutation createDirectUploadLinkForFileAttachment($input: CreateDirectFileAttachmentUploadLinkInput!) {
  createDirectUploadLinkForFileAttachment(input: $input) {
    id
    uploadUrl
    formKeyValues {
      ...StringMapElementFragment
    }
  }
}
```

#### Variables

```json
{"input": CreateDirectFileAttachmentUploadLinkInput}
```

#### Response

```json
{
  "data": {
    "createDirectUploadLinkForFileAttachment": {
      "id": 4,
      "uploadUrl": "xyz789",
      "formKeyValues": [StringMapElement]
    }
  }
}
```
