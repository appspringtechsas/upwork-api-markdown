---
title: "MarketplaceJobPosting"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceJobPosting"
html_id: "definition-MarketplaceJobPosting"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPosting"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobPosting` (object)

## Description

Marketplace job posting aggregate

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Marketplace job posting identifier |
| `workFlowState` | [`MarketplacePostingWorkFlowState`](MarketplacePostingWorkFlowState.md) | Current workflow state |
| `ownership` | [`MarketplacePostingOwnership`](MarketplacePostingOwnership.md) | Ownership details |
| `annotations` | [`MarketplacePostingAnnotations`](MarketplacePostingAnnotations.md) | Annotations associated with the posting |
| `activityStat` | [`MarketplacePostingActivityStat`](MarketplacePostingActivityStat.md) | Activity statistics |
| `content` | [`MarketplaceJobPostingContent`](MarketplaceJobPostingContent.md) | Public-facing content |
| `attachments` | [`[MarketplacePostingAttachment!]`](MarketplacePostingAttachment.md) | Attached files |
| `classification` | [`MarketplacePostingClassification`](MarketplacePostingClassification.md) | Classification attributes |
| `segmentationData` | [`MarketplaceSegmentationData`](MarketplaceSegmentationData.md) | Segmentation metadata |
| `contractTerms` | [`MarketplaceContractTerms`](MarketplaceContractTerms.md) | Contract terms |
| `contractorSelection` | [`MarketplaceContractorSelection`](MarketplaceContractorSelection.md) | Contractor selection criteria |
| `additionalSearchInfo` | [`MarketplaceAdditionalSearchInfo`](MarketplaceAdditionalSearchInfo.md) | Additional computed search info |
| ⚠️ `clientCompany` | [`PrivateCompanyInfo`](PrivateCompanyInfo.md) | Company profile of the client **⚠️ Deprecated — Use clientCompanyPublic for company information** |
| `clientCompanyPublic` | [`MarketplacePublicCompanyInfo`](MarketplacePublicCompanyInfo.md) |  |
| `canClientReceiveContractProposal` | [`Boolean!`](../scalars/Boolean.md) | Indicates whether there is something that would prevent client from receiving contract proposal |
| `clientProposals` | [`ClientProposalsConnection!`](ClientProposalsConnection.md) | List of client proposals |
| `customFields` | [`CustomFieldsConnection`](CustomFieldsConnection.md) | Custom fields attached to this particular JobPostiingId. The response can optionally be filtered by organizationIds. If organizationIds are specified, only responses of custom fields accessible by hiring managers in the specified teams will be returned. These organizationIds can be 'team OrganizationIds' or 'root organizationId'. Custom fields that are accessible/visible through out the COMPANY are always included in the response. |

## Field arguments

### `clientProposals`

| Argument | Type | Description |
|---|---|---|
| `filter` | [`ClientProposalFilter`](../inputs/ClientProposalFilter.md) | Filter for client proposals |
| `sortAttribute` | [`ClientProposalSortAttribute`](../inputs/ClientProposalSortAttribute.md) | Sort attribute |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

### `customFields`

| Argument | Type | Description |
|---|---|---|
| `organizationIds` | [`[ID!]`](../scalars/ID.md) | Filter responses by accessible organizations |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

## Examples

### Example

```json
{
  "id": 4,
  "workFlowState": MarketplacePostingWorkFlowState,
  "ownership": MarketplacePostingOwnership,
  "annotations": MarketplacePostingAnnotations,
  "activityStat": MarketplacePostingActivityStat,
  "content": MarketplaceJobPostingContent,
  "attachments": [MarketplacePostingAttachment],
  "classification": MarketplacePostingClassification,
  "segmentationData": MarketplaceSegmentationData,
  "contractTerms": MarketplaceContractTerms,
  "contractorSelection": MarketplaceContractorSelection,
  "additionalSearchInfo": MarketplaceAdditionalSearchInfo,
  "clientCompany": PrivateCompanyInfo,
  "clientCompanyPublic": MarketplacePublicCompanyInfo,
  "canClientReceiveContractProposal": false,
  "clientProposals": ClientProposalsConnection,
  "customFields": CustomFieldsConnection
}
```
