---
title: "createDirectUploadLinkForJAVendorProposal"
kind: "mutation"
gql_name: "createDirectUploadLinkForJAVendorProposal"
returns: "FileInfo!"
html_id: "mutation-createDirectUploadLinkForJAVendorProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createDirectUploadLinkForJAVendorProposal"
generated_by: "scripts/convert.mjs"
---


# `createDirectUploadLinkForJAVendorProposal`

## Description

Create direct upload link, to upload Job Application vendor proposal attachments

## Required Permissions

"Client Proposals - Read And Write Access"

## Response

Returns a [`FileInfo!`](../types/FileInfo.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`CreateDirectUploadLinkInput!`](../inputs/CreateDirectUploadLinkInput.md) | Upload input details |

## Examples

### Detailed structure

#### Query

```graphql
mutation createDirectUploadLinkForJAVendorProposal($input: CreateDirectUploadLinkInput!) {
  createDirectUploadLinkForJAVendorProposal(input: $input) {
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
{"input": CreateDirectUploadLinkInput}
```

#### Response

```json
{
  "data": {
    "createDirectUploadLinkForJAVendorProposal": {
      "id": "4",
      "uploadUrl": "xyz789",
      "formKeyValues": [StringMapElement]
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createDirectUploadLinkForJAVendorProposal" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [createDirectUploadLinkForJAClientProposal](createDirectUploadLinkForJAClientProposal.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [createDirectUploadLinkForRoomMessage](createDirectUploadLinkForRoomMessage.md) ➡️
