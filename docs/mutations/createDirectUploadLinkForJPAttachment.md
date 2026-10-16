---
title: "createDirectUploadLinkForJPAttachment"
kind: "mutation"
gql_name: "createDirectUploadLinkForJPAttachment"
returns: "JobPostDirectUploadLinkResponse!"
html_id: "mutation-createDirectUploadLinkForJPAttachment"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createDirectUploadLinkForJPAttachment"
generated_by: "scripts/convert.mjs"
---


# `createDirectUploadLinkForJPAttachment`

## Description

Create a direct link for Jop Posting attachment

## Required Permissions

"Job Details Entities - Write Access"

## Response

Returns a [`JobPostDirectUploadLinkResponse!`](../types/JobPostDirectUploadLinkResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `request` | [`JobPostDirectUploadLinkInput!`](../inputs/JobPostDirectUploadLinkInput.md) |  |

## Examples

### Detailed structure

#### Query

```graphql
mutation createDirectUploadLinkForJPAttachment($request: JobPostDirectUploadLinkInput!) {
  createDirectUploadLinkForJPAttachment(request: $request) {
    uid
    uploadUrl
    formKeyValues {
      ...StringMapElementFragment
    }
  }
}
```

#### Variables

```json
{"request": JobPostDirectUploadLinkInput}
```

#### Response

```json
{
  "data": {
    "createDirectUploadLinkForJPAttachment": {
      "uid": 4,
      "uploadUrl": "abc123",
      "formKeyValues": [StringMapElement]
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createDirectUploadLinkForJPAttachment" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [createContractProposal](createContractProposal.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [createJobProposal](createJobProposal.md) ➡️
