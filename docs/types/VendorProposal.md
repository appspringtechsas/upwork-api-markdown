---
title: "VendorProposal"
kind: "object"
domain: "Proposals"
gql_name: "VendorProposal"
html_id: "definition-VendorProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposal"
generated_by: "scripts/convert.mjs"
---


# `VendorProposal` (object)

## Description

Vendor proposal submitted by a freelancer

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Vendor proposal identifier |
| `user` | [`GenericUser!`](GenericUser.md) | Vendor who will be physically working on the job if accepted |
| `organization` | [`GenericOrganization!`](GenericOrganization.md) | Organization to which the vendor belongs |
| `marketplaceJobPosting` | [`MarketplaceJobPosting!`](MarketplaceJobPosting.md) | Job for which vendor is applying |
| `inviteToInterview` | [`InviteToInterview`](InviteToInterview.md) | Invite to interview for which the proposal is created by accepting it |
| `terms` | [`ProposalTerms!`](ProposalTerms.md) | Terms on which freelancer applied |
| ⚠️ `coverLetter` | [`String`](../scalars/String.md) | Cover letter to accompany the proposal **⚠️ Deprecated — use proposalCoverLetter** |
| `proposalCoverLetter` | [`String`](../scalars/String.md) | Cover letter to accompany the proposal |
| `attachments` | [`[ProposalAttachment!]`](ProposalAttachment.md) | Attachments added for the proposal |
| `projectPlan` | [`ProposalProjectPlan`](ProposalProjectPlan.md) | Project plan consisting of milestones defined by vendor |
| `auditDetails` | [`ProposalAuditDetails!`](ProposalAuditDetails.md) | Information used to audit changes in proposals |
| `status` | [`VendorProposalStatus!`](VendorProposalStatus.md) | Status of the vendor proposal |
| `annotations` | [`[VendorProposalAnnotation!]!`](../enums/VendorProposalAnnotation.md) | Annotations of the vendor proposal |
| `viewedByClient` | [`Boolean`](../scalars/Boolean.md) | Flag to indicate whether client has viewed the proposal |

## Examples

### Example

```json
{
  "id": 4,
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
  "viewedByClient": false
}
```
