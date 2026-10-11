---
title: "FreelancerProfileEducationRecord"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileEducationRecord"
html_id: "definition-FreelancerProfileEducationRecord"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileEducationRecord"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileEducationRecord` (object)

## Description

Connection to the EducationRecords list

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Education record identifier |
| `user` | [`GenericUser`](GenericUser.md) | User linked to this education record |
| `institutionName` | [`String!`](../scalars/String.md) | Name of the educational institution |
| `standardizedInstitutionId` | [`ID`](../scalars/ID.md) | Standardized institution identifier |
| `areaOfStudy` | [`String`](../scalars/String.md) | Area of study or major |
| `standardizedAreaOfStudyId` | [`ID`](../scalars/ID.md) | Standardized area of study identifier |
| `degree` | [`String`](../scalars/String.md) | Degree or diploma earned |
| `standardizedDegreeId` | [`ID`](../scalars/ID.md) | Standardized degree identifier |
| `startDate` | [`String`](../scalars/String.md) | Start date - formatted according to ISO-8601 |
| `endDate` | [`String`](../scalars/String.md) | End date - formatted according to ISO-8601 |
| `description` | [`String`](../scalars/String.md) | Additional description or notes about the education |

## Examples

### Example

```json
{
  "id": "4",
  "user": GenericUser,
  "institutionName": "abc123",
  "standardizedInstitutionId": "4",
  "areaOfStudy": "abc123",
  "standardizedAreaOfStudyId": "4",
  "degree": "abc123",
  "standardizedDegreeId": "4",
  "startDate": "xyz789",
  "endDate": "xyz789",
  "description": "abc123"
}
```
