---
title: "vendorProposal"
kind: "query"
gql_name: "vendorProposal"
returns: "VendorProposal"
html_id: "query-vendorProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-vendorProposal"
generated_by: "scripts/convert.mjs"
---


# `vendorProposal`

## Description

Vendor proposal by ID

## Required Permissions

"Client Proposals - Read And Write Access"

## Response

Returns a [`VendorProposal`](../types/VendorProposal.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the vendor proposal |

## Examples

### Detailed structure

#### Query

```graphql
query vendorProposal($id: ID!) {
  vendorProposal(id: $id) {
    id
    user {
      ...GenericUserFragment
    }
    organization {
      ...GenericOrganizationFragment
    }
    marketplaceJobPosting {
      ...MarketplaceJobPostingFragment
    }
    inviteToInterview {
      ...InviteToInterviewFragment
    }
    terms {
      ...ProposalTermsFragment
    }
    coverLetter
    proposalCoverLetter
    attachments {
      ...ProposalAttachmentFragment
    }
    projectPlan {
      ...ProposalProjectPlanFragment
    }
    auditDetails {
      ...ProposalAuditDetailsFragment
    }
    status {
      ...VendorProposalStatusFragment
    }
    annotations
    viewedByClient
  }
}
```

#### Variables

```json
{"id": "4"}
```

#### Response

```json
{
  "data": {
    "vendorProposal": {
      "id": "4",
      "user": GenericUser,
      "organization": GenericOrganization,
      "marketplaceJobPosting": MarketplaceJobPosting,
      "inviteToInterview": InviteToInterview,
      "terms": ProposalTerms,
      "coverLetter": "xyz789",
      "proposalCoverLetter": "xyz789",
      "attachments": [ProposalAttachment],
      "projectPlan": ProposalProjectPlan,
      "auditDetails": ProposalAuditDetails,
      "status": VendorProposalStatus,
      "annotations": ["Hidden"],
      "viewedByClient": true
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-vendorProposal" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [proposalMetadata](proposalMetadata.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [vendorProposals](vendorProposals.md) ➡️
