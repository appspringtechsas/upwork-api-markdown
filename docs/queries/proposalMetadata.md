---
title: "proposalMetadata"
kind: "query"
gql_name: "proposalMetadata"
returns: "ProposalMetadata"
html_id: "query-proposalMetadata"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-proposalMetadata"
generated_by: "scripts/convert.mjs"
---


# `proposalMetadata`

## Description

Metadata for proposals

## Required Permissions

One of: "Common Entities - Read-Only Access" OR "Common Functionality - Read And Write Access"

## Response

Returns a [`ProposalMetadata`](../types/ProposalMetadata.md)

## Examples

### Detailed structure

#### Query

```graphql
query proposalMetadata {
  proposalMetadata {
    engagementDurationValues {
      ...ProposalEngagementDurationFragment
    }
    reasons {
      ...ReasonsMetadataFragment
    }
  }
}
```

#### Response

```json
{
  "data": {
    "proposalMetadata": {
      "engagementDurationValues": [
        ProposalEngagementDuration
      ],
      "reasons": [ReasonsMetadata]
    }
  }
}
```
