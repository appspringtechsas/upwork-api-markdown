---
title: "CurrentUser"
kind: "object"
domain: "Users and teams"
gql_name: "CurrentUser"
html_id: "definition-CurrentUser"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CurrentUser"
generated_by: "scripts/convert.mjs"
---


# `CurrentUser` (object)

## Description

Information about a user as an entity

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Unique user identifier Example: 1181921839933591552 |
| `nid` | [`ID!`](../scalars/ID.md) | Nickname ID of a user. Please, only use if really needed. Unique ID should be used when possible. Example: foofreelancer |
| `rid` | [`ID!`](../scalars/ID.md) | Record ID of a user. Please, only use if really needed. Unique ID should be used when possible. Example: 2366358 |
| `email` | [`String`](../scalars/String.md) | Email of user. |
| `name` | [`String`](../scalars/String.md) | First name + abbreviated last name, e.g. John Smith -> John S. |
| `permissions` | [`UserPermissions`](UserPermissions.md) | Get user permissions |
| `userPermissions` | [`UserPermissions`](UserPermissions.md) | Get user permissions |
| `photoUrl` | [`String`](../scalars/String.md) | Photo url of the user. |
| `offer` | [`ContractOfferConnection`](ContractOfferConnection.md) | List of Offers available to the current user/freelancer Sort options: Team, StartDate, EndDate, ContractName, FreelancerName, ClientCompanyName, ClientName, State |
| ⚠️ `timeReport` | [`[TimeReport!]`](TimeReport.md) | List of time reports for the current user(freelancer) and given date range, both inclusive **⚠️ Deprecated — use contractTimeReport instead** |
| `contractTimeReport` | [`TimeReportConnection!`](TimeReportConnection.md) |  |
| `vendorInvitation` | [`VendorInvitation`](VendorInvitation.md) | Returns a particular invitation filtered by id for the current freelancer |
| `vendorInvitations` | [`VendorInvitationConnection`](VendorInvitationConnection.md) | Returns list of invitations based on JP and annotations for the current freelancer |
| `freelancerProfile` | [`FreelancerProfile`](FreelancerProfile.md) | Freelancer profile for the current user |
| `ciphertext` | [`String`](../scalars/String.md) | Unique ciphertext identifier |
| `i18NSettings` | [`I18nSettings!`](I18nSettings.md) | User's i18n settings The input argument companyReferenceId is used in different checks for agencies, companies and independent contractors; For freelancers, the value shouldn't be provided. |
| `talentProfile` | [`TalentProfile`](TalentProfile.md) | Current user's primary freelancer profile data |

## Field arguments

### `permissions`

| Argument | Type | Description |
|---|---|---|
| `filter` | [`UserPermissionFilter!`](../inputs/UserPermissionFilter.md) | Filter to load specific user's permissions |

### `userPermissions`

| Argument | Type | Description |
|---|---|---|
| `filter` | [`UserPermissionFilterV2!`](../inputs/UserPermissionFilterV2.md) | Filter to load specific user's permissions |

### `offer`

| Argument | Type | Description |
|---|---|---|
| `offerForFreelancerFilter` | [`OfferForFreelancerFilter`](../inputs/OfferForFreelancerFilter.md) |  |
| `sortAttribute` | [`SortAttribute`](../inputs/SortAttribute.md) |  |
| `pagination` | [`Pagination!`](../inputs/Pagination.md) |  |

### `timeReport`

| Argument | Type | Description |
|---|---|---|
| `timeReportDate_bt` | [`DateTimeRange!`](../inputs/DateTimeRange.md) |  |

### `contractTimeReport`

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
| `filter` | [`VendorFreelancerInvitationFilter!`](../inputs/VendorFreelancerInvitationFilter.md) | Filter for freelancer invitations |
| `sortAttribute` | [`InvitationsSortAttribute`](../inputs/InvitationsSortAttribute.md) | Sort options |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

### `i18NSettings`

| Argument | Type | Description |
|---|---|---|
| `companyReferencedId` | [`ID`](../scalars/ID.md) | Company referenced identifier |

## Examples

### Example

```json
{
  "id": 4,
  "nid": "4",
  "rid": 4,
  "email": "abc123",
  "name": "abc123",
  "permissions": UserPermissions,
  "userPermissions": UserPermissions,
  "photoUrl": "xyz789",
  "offer": ContractOfferConnection,
  "timeReport": [TimeReport],
  "contractTimeReport": TimeReportConnection,
  "vendorInvitation": VendorInvitation,
  "vendorInvitations": VendorInvitationConnection,
  "freelancerProfile": FreelancerProfile,
  "ciphertext": "xyz789",
  "i18NSettings": I18nSettings,
  "talentProfile": TalentProfile
}
```
