---
title: "VendorFreelancerInvitationFilter"
kind: "input_object"
domain: "Proposals"
gql_name: "VendorFreelancerInvitationFilter"
html_id: "definition-VendorFreelancerInvitationFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorFreelancerInvitationFilter"
generated_by: "scripts/convert.mjs"
---


# `VendorFreelancerInvitationFilter` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `jobPostingId_eq` | [`ID`](../scalars/ID.md) | The job post the vendor was invited to. |
| `status_eq` | [`VendorInvitationStatusFilter!`](../enums/VendorInvitationStatusFilter.md) | The status if the invite, active or inactive |
| `terminationReason_eq` | [`VendorInvitationTerminationReasonFilter`](../enums/VendorInvitationTerminationReasonFilter.md) | For inactive invitation only, returns invitations with the given termination reason. Default = ALL |
| `annotations_any` | [`[VendorInvitationSearchAnnotation!]`](../enums/VendorInvitationSearchAnnotation.md) | Filter by annotation, default returns all |

## Examples

### Example

```json
{
  "jobPostingId_eq": 4,
  "status_eq": "pending",
  "terminationReason_eq": "All",
  "annotations_any": ["NotOnHold"]
}
```
