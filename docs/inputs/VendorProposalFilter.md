---
title: "VendorProposalFilter"
kind: "input_object"
domain: "Proposals"
gql_name: "VendorProposalFilter"
html_id: "definition-VendorProposalFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalFilter"
generated_by: "scripts/convert.mjs"
---


# `VendorProposalFilter` (input object)

## Description

vendor proposal related filters

## Fields

| Field | Type | Description |
|---|---|---|
| `status_eq` | [`VendorProposalStatusFilterInput!`](../enums/VendorProposalStatusFilterInput.md) | Filter by proposal status |
| `annotations_eq` | [`VendorProposalAnnotation`](../enums/VendorProposalAnnotation.md) | Filter by proposal annotation |
| `freelancerId_eq` | [`ID`](../scalars/ID.md) | Filter by freelancer ID |
| `organizationId_eq` | [`ID`](../scalars/ID.md) | Filter by organization ID |
| `jobPostingIds_any` | [`[ID!]`](../scalars/ID.md) | Filter by job posting IDs |

## Examples

### Example

```json
{
  "status_eq": "Accepted",
  "annotations_eq": "Hidden",
  "freelancerId_eq": 4,
  "organizationId_eq": 4,
  "jobPostingIds_any": ["4"]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [VendorFreelancerInvitationFilter](VendorFreelancerInvitationFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [VendorProposalSortAttribute](VendorProposalSortAttribute.md) ➡️
