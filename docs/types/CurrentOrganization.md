---
title: "CurrentOrganization"
kind: "object"
domain: "Users and teams"
gql_name: "CurrentOrganization"
html_id: "definition-CurrentOrganization"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CurrentOrganization"
generated_by: "scripts/convert.mjs"
---


# `CurrentOrganization` (object)

## Description

Information about current Organization

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
| `parentOrganization` | [`CurrentOrganization`](CurrentOrganization.md) | Information about the parent Organization, if any |
| `active` | [`Boolean`](../scalars/Boolean.md) | Indicates whether this organization is active. Applicable to a team organization. |
| `hidden` | [`Boolean`](../scalars/Boolean.md) | Indicates whether this organization/team is hidden. Applicable to a team organization. |
| `childOrganizations` | [`[CurrentOrganization]`](CurrentOrganization.md) | List of teams within the root organization. Available only for the root organization (where parentOrganization is NULL). If userId is not provided, the current user will be used by default. |
| `childOrganization` | [`CurrentOrganization`](CurrentOrganization.md) | Specific team within the root organization. Available only for the root organization (where parentOrganization is NULL). If userId is not provided, the current user will be used by default. |
| `company` | [`PrivateCompanyInfo`](PrivateCompanyInfo.md) | Private information about current company |
| `photoUrl` | [`String`](../scalars/String.md) | Photo URL/Logo for the organization |
| `creationDate` | [`String`](../scalars/String.md) | When the organization was created |
| `staffs` | [`StaffsConnection!`](StaffsConnection.md) | List of organization's staff, Offset is the UID of staff to start search from. Leave it blank or null when querying the first page. Use the UID of last returned staff for next page request. limit is the page size. If empty then default page limit (100 entries) would be applied. |
| `userPermissions` | [`UserPermissions`](UserPermissions.md) | Get user permissions under organization |
| `agencyOffers` | [`ContractOfferConnection`](ContractOfferConnection.md) | List of offers for root agency organization |
| `clientOffers` | [`ContractOfferConnection`](ContractOfferConnection.md) | List of offers for the client organization The maximum page size is 50 |
| ⚠️ `clientTimeReport` | [`[TimeReport!]`](TimeReport.md) | List of client time reports for the given date time range, both inclusive **⚠️ Deprecated — use clientContractTimeReport instead** |
| `clientContractTimeReport` | [`TimeReportConnection!`](TimeReportConnection.md) |  |
| ⚠️ `agencyTimeReport` | [`[TimeReport!]`](TimeReport.md) | List of agency time reports for the given date time range, both inclusive **⚠️ Deprecated — use agencyContractTimeReport instead** |
| `agencyContractTimeReport` | [`TimeReportConnection`](TimeReportConnection.md) |  |
| `vendorInvitation` | [`VendorInvitation`](VendorInvitation.md) | Returns invitation details for a given invitation id as viewed by this vendor organization |
| `vendorInvitations` | [`VendorInvitationConnection`](VendorInvitationConnection.md) | Returns list of invitations for a given status, freelancer or freelancer's team as viewed by this vendor organization |
| `privateTalentClouds` | [`[PrivateTalentCloud!]`](PrivateTalentCloud.md) |  |
| `jobPosting` | [`JobPostingConnection`](JobPostingConnection.md) |  |

## Field arguments

### `childOrganizations`

| Argument | Type | Description |
|---|---|---|
| `userId` | [`ID`](../scalars/ID.md) | User identifier (optional) |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

### `childOrganization`

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Organization identifier |
| `userId` | [`ID`](../scalars/ID.md) | User identifier (optional) |

### `staffs`

| Argument | Type | Description |
|---|---|---|
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

### `userPermissions`

| Argument | Type | Description |
|---|---|---|
| `filter` | [`OrgUserPermissionFilterV2!`](../inputs/OrgUserPermissionFilterV2.md) | Filter to load users` permissions under organization |

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

### `clientTimeReport`

| Argument | Type | Description |
|---|---|---|
| `timeReportDate_bt` | [`DateTimeRange!`](../inputs/DateTimeRange.md) |  |

### `clientContractTimeReport`

| Argument | Type | Description |
|---|---|---|
| `timeReportDate_bt` | [`DateTimeRange!`](../inputs/DateTimeRange.md) |  |
| `pagination` | [`Pagination`](../inputs/Pagination.md) |  |

### `agencyTimeReport`

| Argument | Type | Description |
|---|---|---|
| `timeReportDate_bt` | [`DateTimeRange!`](../inputs/DateTimeRange.md) |  |

### `agencyContractTimeReport`

| Argument | Type | Description |
|---|---|---|
| `timeReportDate_bt` | [`DateTimeRange!`](../inputs/DateTimeRange.md) |  |
| `pagination` | [`Pagination`](../inputs/Pagination.md) |  |

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
  "id": 4,
  "rid": "4",
  "legacyId": 4,
  "name": "xyz789",
  "type": "BUSINESS",
  "legacyType": "CLIENT",
  "flag": OrganizationFlag,
  "parentOrganization": CurrentOrganization,
  "active": false,
  "hidden": false,
  "childOrganizations": [CurrentOrganization],
  "childOrganization": CurrentOrganization,
  "company": PrivateCompanyInfo,
  "photoUrl": "xyz789",
  "creationDate": "xyz789",
  "staffs": StaffsConnection,
  "userPermissions": UserPermissions,
  "agencyOffers": ContractOfferConnection,
  "clientOffers": ContractOfferConnection,
  "clientTimeReport": [TimeReport],
  "clientContractTimeReport": TimeReportConnection,
  "agencyTimeReport": [TimeReport],
  "agencyContractTimeReport": TimeReportConnection,
  "vendorInvitation": VendorInvitation,
  "vendorInvitations": VendorInvitationConnection,
  "privateTalentClouds": [PrivateTalentCloud],
  "jobPosting": JobPostingConnection
}
```
