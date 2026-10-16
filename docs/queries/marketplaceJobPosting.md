---
title: "marketplaceJobPosting"
kind: "query"
gql_name: "marketplaceJobPosting"
returns: "MarketplaceJobPosting"
html_id: "query-marketplaceJobPosting"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-marketplaceJobPosting"
generated_by: "scripts/convert.mjs"
---


# `marketplaceJobPosting`

## Description

Get marketplace job posting by its ID

## Required Permissions

"Read marketplace Job Postings"

## Response

Returns a [`MarketplaceJobPosting`](../types/MarketplaceJobPosting.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Job posting identifier |

## Examples

### Detailed structure

#### Query

```graphql
query marketplaceJobPosting($id: ID!) {
  marketplaceJobPosting(id: $id) {
    id
    workFlowState {
      ...MarketplacePostingWorkFlowStateFragment
    }
    ownership {
      ...MarketplacePostingOwnershipFragment
    }
    annotations {
      ...MarketplacePostingAnnotationsFragment
    }
    activityStat {
      ...MarketplacePostingActivityStatFragment
    }
    content {
      ...MarketplaceJobPostingContentFragment
    }
    attachments {
      ...MarketplacePostingAttachmentFragment
    }
    classification {
      ...MarketplacePostingClassificationFragment
    }
    segmentationData {
      ...MarketplaceSegmentationDataFragment
    }
    contractTerms {
      ...MarketplaceContractTermsFragment
    }
    contractorSelection {
      ...MarketplaceContractorSelectionFragment
    }
    additionalSearchInfo {
      ...MarketplaceAdditionalSearchInfoFragment
    }
    clientCompany {
      ...PrivateCompanyInfoFragment
    }
    clientCompanyPublic {
      ...MarketplacePublicCompanyInfoFragment
    }
    canClientReceiveContractProposal
    clientProposals {
      ...ClientProposalsConnectionFragment
    }
    customFields {
      ...CustomFieldsConnectionFragment
    }
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
    "marketplaceJobPosting": {
      "id": "4",
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
      "canClientReceiveContractProposal": true,
      "clientProposals": ClientProposalsConnection,
      "customFields": CustomFieldsConnection
    }
  }
}
```

### Real-life example

#### Query

```graphql
query JobDetails($id: ID!) {
  marketplaceJobPosting(id: $id) {
    id
    content {
      title
      description
    }
    contractTerms {
      contractType
    }
    clientCompanyPublic {
      id
    }
  }
}
```

#### Variables

```json
{"id": "2056488576136638272"}
```

#### Response

```json
{
  "data": {
    "marketplaceJobPosting": {
        "id": "2056488576136638272",
        "content": {
            "title": "Full-Time Software Development Agency (Web + Mobile App Expertise)",
            "description": "About the Opportunity:\nWe are seeking to hire a top-tier, full-time software development agency to work closely with us on multiple ongoing and upcoming projects. We are looking for a long-term partnership with a team that can deliver high-quality, scalable web and mobile app solutions."
        },
        "contractTerms": {
            "contractType": "HOURLY"
        },
        "clientCompanyPublic": {
            "id": "2056499345994300718"
        }
    }
  }
}
```

## Used in sample flows

- Step **5** (View marketplace job details) in [Client Job Postings Sample Flow](../operations/examples/jobs.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-marketplaceJobPosting" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [jobPosting](jobPosting.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [marketplaceJobPostings](marketplaceJobPostings.md) ➡️
