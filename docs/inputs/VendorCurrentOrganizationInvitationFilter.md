---
title: "VendorCurrentOrganizationInvitationFilter"
kind: "input_object"
domain: "Proposals"
gql_name: "VendorCurrentOrganizationInvitationFilter"
html_id: "definition-VendorCurrentOrganizationInvitationFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorCurrentOrganizationInvitationFilter"
generated_by: "scripts/convert.mjs"
---


# `VendorCurrentOrganizationInvitationFilter` (input object)

## Description

Used in filtering job invitation for the current vendor organization

## Fields

| Field | Type | Description |
|---|---|---|
| `freelancerId_eq` | [`ID`](../scalars/ID.md) | Vendor within the organization |
| `vendorSubOrganizationId_eq` | [`ID`](../scalars/ID.md) | Team within the organization |
| `jobPostingId_eq` | [`ID`](../scalars/ID.md) | The job post the vendor was invited to. |
| `status_eq` | [`VendorInvitationStatusFilter!`](../enums/VendorInvitationStatusFilter.md) | The status if the invite, active or inactive |
| `terminationReason_eq` | [`VendorInvitationTerminationReasonFilter`](../enums/VendorInvitationTerminationReasonFilter.md) | For inactive invitation only, returns invitations with the given termination reason. Default = ALL |
| `annotations_any` | [`[VendorInvitationSearchAnnotation!]`](../enums/VendorInvitationSearchAnnotation.md) | Filter by annotation, default returns all |

## Examples

### Example

```json
{
  "freelancerId_eq": 4,
  "vendorSubOrganizationId_eq": 4,
  "jobPostingId_eq": "4",
  "status_eq": "pending",
  "terminationReason_eq": "All",
  "annotations_any": ["NotOnHold"]
}
```
