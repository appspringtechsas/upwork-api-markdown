---
title: "ClientProposal"
kind: "object"
domain: "Proposals"
gql_name: "ClientProposal"
html_id: "definition-ClientProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposal"
generated_by: "scripts/convert.mjs"
---


# `ClientProposal` (object)

## Description

Client proposal

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | implements Proposal { Client proposal identifier |
| `user` | [`GenericUser!`](GenericUser.md) | Vendor who will be physically working on the job if accepted |
| `organization` | [`GenericOrganization!`](GenericOrganization.md) | Organization the vendor user belongs to |
| `job` | [`MarketplaceJobPosting!`](MarketplaceJobPosting.md) | Job for which vendor has applied |
| `inviteToInterview` | [`InviteToInterview`](InviteToInterview.md) | Invitation using which this proposal is created |
| `room` | [`Room`](Room.md) | Dash room created between vendor and client |
| `terms` | [`ProposalTerms`](ProposalTerms.md) | Terms on which vendor applied |
| `coverLetter` | [`String`](../scalars/String.md) | Cover letter to accompany the proposal |
| `attachments` | [`[ProposalAttachment!]`](ProposalAttachment.md) | Attachments added for the proposal |
| `projectPlan` | [`ProposalProjectPlan`](ProposalProjectPlan.md) | Project plan consisting of milestones defined by vendor |
| `auditDetails` | [`ProposalAuditDetails!`](ProposalAuditDetails.md) | Information used to audit changes in proposals |
| `status` | [`ClientProposalStatus!`](ClientProposalStatus.md) | Status of the client proposal |
| `annotations` | [`[ClientProposalAnnotation!]!`](../enums/ClientProposalAnnotation.md) | Annotations of the client proposal |

## Examples

### Example

```json
{
  "id": 4,
  "user": GenericUser,
  "organization": GenericOrganization,
  "job": MarketplaceJobPosting,
  "inviteToInterview": InviteToInterview,
  "room": Room,
  "terms": ProposalTerms,
  "coverLetter": "xyz789",
  "attachments": [ProposalAttachment],
  "projectPlan": ProposalProjectPlan,
  "auditDetails": ProposalAuditDetails,
  "status": ClientProposalStatus,
  "annotations": ["Recommended"]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposal" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientInvitationStatusDetails](ClientInvitationStatusDetails.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientProposalInvitedBy](ClientProposalInvitedBy.md) ➡️
