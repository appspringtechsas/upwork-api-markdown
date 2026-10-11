---
title: "updateFreelancerEmploymentRecord"
kind: "mutation"
gql_name: "updateFreelancerEmploymentRecord"
returns: "FreelancerProfileEmploymentRecord"
html_id: "mutation-updateFreelancerEmploymentRecord"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateFreelancerEmploymentRecord"
generated_by: "scripts/convert.mjs"
---


# `updateFreelancerEmploymentRecord`

## Description

Update freelancer's employment record given its id (userId is taken from the context)

## Required Permissions

"Freelancer Profile - Read And Write Access"

## Response

Returns a [`FreelancerProfileEmploymentRecord`](../types/FreelancerProfileEmploymentRecord.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`UpdateEmploymentRecordInput!`](../inputs/UpdateEmploymentRecordInput.md) | Input data for updating employment record |

## Examples

### Detailed structure

#### Query

```graphql
mutation updateFreelancerEmploymentRecord($input: UpdateEmploymentRecordInput!) {
  updateFreelancerEmploymentRecord(input: $input) {
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
{"input": UpdateEmploymentRecordInput}
```

#### Response

```json
{
  "data": {
    "updateFreelancerEmploymentRecord": {
      "id": "4",
      "user": GenericUser,
      "companyName": "abc123",
      "jobTitle": "abc123",
      "standardizedCompanyId": "abc123",
      "standardizedJobTitleId": "abc123",
      "role": "abc123",
      "startDate": "xyz789",
      "endDate": "abc123",
      "description": "xyz789",
      "city": "abc123",
      "country": "xyz789"
    }
  }
}
```
