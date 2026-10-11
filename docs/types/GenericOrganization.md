---
title: "GenericOrganization"
kind: "object"
domain: "Users and teams"
gql_name: "GenericOrganization"
html_id: "definition-GenericOrganization"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-GenericOrganization"
generated_by: "scripts/convert.mjs"
---


# `GenericOrganization` (object)

## Description

Information about regular organization

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the current organization |
| `rid` | [`ID`](../scalars/ID.md) | Record ID of the organization |
| `legacyId` | [`ID`](../scalars/ID.md) | Legacy organization identifier |
| `name` | [`String`](../scalars/String.md) | Name of the current organization |
| `type` | [`OrganizationType`](../enums/OrganizationType.md) | Type of the Organization. Possible values are BUSINESS / SOLE_PROPRIETOR |
| `legacyType` | [`OrganizationLegacyType`](../enums/OrganizationLegacyType.md) | Legacy type of the Organization. Possible values are CLIENT / VENDOR |
| `flag` | [`OrganizationFlag`](OrganizationFlag.md) | Flag associated with the Organization |
| `parentOrganization` | [`GenericOrganization`](GenericOrganization.md) | Information about the parent Organization, if any |
| `active` | [`Boolean`](../scalars/Boolean.md) | Indicates whether this organization is active. Applicable to a team organization. |
| `hidden` | [`Boolean`](../scalars/Boolean.md) | Indicates whether this organization/team is hidden. Applicable to a team organization. |
| `company` | [`PrivateCompanyInfo`](PrivateCompanyInfo.md) | Private information about current company |
| `photoUrl` | [`String`](../scalars/String.md) | Photo URL/Logo for the organization, if any and if user has access to it, otherwise null |
| `creationDate` | [`String`](../scalars/String.md) | When the organization was created |
| `agencyOffers` | [`ContractOfferConnection`](ContractOfferConnection.md) | List of offers for root agency organization |
| `clientOffers` | [`ContractOfferConnection`](ContractOfferConnection.md) | List of offers for the client organization The maximum page size is 50 |
| `vendorInvitation` | [`VendorInvitation`](VendorInvitation.md) | Returns invitation details for a given invitation id as viewed by this vendor organization |
| `vendorInvitations` | [`VendorInvitationConnection`](VendorInvitationConnection.md) | Returns list of invitations for a given status, freelancer or freelancer's team as viewed by this vendor organization |
| `jobPosting` | [`JobPostingConnection`](JobPostingConnection.md) |  |

## Field arguments

### `agencyOffers`

| Argument | Type | Description |
|---|---|---|
| `offerByRootCompanyFilter` | [`OfferByRootCompanyFilter`](../inputs/OfferByRootCompanyFilter.md) |  |
| `sortAttribute` | [`SortAttribute`](../inputs/SortAttribute.md) |  |
| `pagination` | [`Pagination!`](../inputs/Pagination.md) |  |

### `clientOffers`

| Argument | Type | Description |
|---|---|---|
| `offerByClientFilter` | [`OfferByClientFilter`](../inputs/OfferByClientFilter.md) |  |
| `sortAttribute` | [`SortAttribute`](../inputs/SortAttribute.md) |  |
| `pagination` | [`Pagination!`](../inputs/Pagination.md) |  |

### `vendorInvitation`

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Invitation identifier |

### `vendorInvitations`

| Argument | Type | Description |
|---|---|---|
| `filter` | [`VendorCurrentOrganizationInvitationFilter!`](../inputs/VendorCurrentOrganizationInvitationFilter.md) | Filter for vendor invitations |
| `sortAttribute` | [`InvitationsSortAttribute`](../inputs/InvitationsSortAttribute.md) | Sort options |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

### `jobPosting`

| Argument | Type | Description |
|---|---|---|
| `jobPostingFilter` | [`JobPostingsFilter!`](../inputs/JobPostingsFilter.md) | Filter for job posts |
| `sortAttribute` | [`SortAttribute`](../inputs/SortAttribute.md) | Sort attribute |

## Examples

### Example

```json
{
  "id": "4",
  "rid": 4,
  "legacyId": "4",
  "name": "xyz789",
  "type": "BUSINESS",
  "legacyType": "CLIENT",
  "flag": OrganizationFlag,
  "parentOrganization": GenericOrganization,
  "active": false,
  "hidden": false,
  "company": PrivateCompanyInfo,
  "photoUrl": "abc123",
  "creationDate": "xyz789",
  "agencyOffers": ContractOfferConnection,
  "clientOffers": ContractOfferConnection,
  "vendorInvitation": VendorInvitation,
  "vendorInvitations": VendorInvitationConnection,
  "jobPosting": JobPostingConnection
}
```
