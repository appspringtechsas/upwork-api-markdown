---
title: "addFreelancerEmploymentRecord"
kind: "mutation"
gql_name: "addFreelancerEmploymentRecord"
returns: "FreelancerProfileEmploymentRecord"
html_id: "mutation-addFreelancerEmploymentRecord"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-addFreelancerEmploymentRecord"
generated_by: "scripts/convert.mjs"
---


# `addFreelancerEmploymentRecord`

## Description

Add a new employment record for the freelancer (userId is taken from the context)

## Required Permissions

"Freelancer Profile - Read And Write Access"

## Response

Returns a [`FreelancerProfileEmploymentRecord`](../types/FreelancerProfileEmploymentRecord.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`CreateEmploymentRecordInput!`](../inputs/CreateEmploymentRecordInput.md) | Input data for creating employment record |

## Examples

### Detailed structure

#### Query

```graphql
mutation addFreelancerEmploymentRecord($input: CreateEmploymentRecordInput!) {
  addFreelancerEmploymentRecord(input: $input) {
    id
    user {
      ...GenericUserFragment
    }
    companyName
    jobTitle
    standardizedCompanyId
    standardizedJobTitleId
    role
    startDate
    endDate
    description
    city
    country
  }
}
```

#### Variables

```json
{"input": CreateEmploymentRecordInput}
```

#### Response

```json
{
  "data": {
    "addFreelancerEmploymentRecord": {
      "id": 4,
      "user": GenericUser,
      "companyName": "abc123",
      "jobTitle": "xyz789",
      "standardizedCompanyId": "xyz789",
      "standardizedJobTitleId": "xyz789",
      "role": "xyz789",
      "startDate": "xyz789",
      "endDate": "abc123",
      "description": "xyz789",
      "city": "abc123",
      "country": "xyz789"
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-addFreelancerEmploymentRecord" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [invoiceDownloadBulkV2](invoiceDownloadBulkV2.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [addFreelancerOtherExperience](addFreelancerOtherExperience.md) ➡️
