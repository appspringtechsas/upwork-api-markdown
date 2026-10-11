---
title: "createDirectUploadLinkForJAClientProposal"
kind: "mutation"
gql_name: "createDirectUploadLinkForJAClientProposal"
returns: "FileInfo!"
html_id: "mutation-createDirectUploadLinkForJAClientProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createDirectUploadLinkForJAClientProposal"
generated_by: "scripts/convert.mjs"
---


# `createDirectUploadLinkForJAClientProposal`

## Description

Create direct upload link, to upload Job Application client proposal attachments

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
mutation createDirectUploadLinkForJAClientProposal($input: CreateDirectUploadLinkInput!) {
  createDirectUploadLinkForJAClientProposal(input: $input) {
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
    "createDirectUploadLinkForJAClientProposal": {
      "id": "4",
      "uploadUrl": "abc123",
      "formKeyValues": [StringMapElement]
    }
  }
}
```
