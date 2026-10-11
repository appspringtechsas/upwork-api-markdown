---
title: "FreelancerProfileEmploymentRecord"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileEmploymentRecord"
html_id: "definition-FreelancerProfileEmploymentRecord"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileEmploymentRecord"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileEmploymentRecord` (object)

## Description

Freelancer's Employment Record

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Employment record identifier |
| `user` | [`GenericUser!`](GenericUser.md) | User who owns this record |
| `companyName` | [`String!`](../scalars/String.md) | Company name |
| `jobTitle` | [`String!`](../scalars/String.md) | Job title |
| `standardizedCompanyId` | [`String`](../scalars/String.md) | Standardized company identifier |
| `standardizedJobTitleId` | [`String`](../scalars/String.md) | Standardized job title identifier |
| `role` | [`String`](../scalars/String.md) | Role or position held |
| `startDate` | [`String!`](../scalars/String.md) | Start date formatted according to ISO-8601 |
| `endDate` | [`String`](../scalars/String.md) | End date - e.g: "2002-01-01" |
| `description` | [`String`](../scalars/String.md) | Role description |
| `city` | [`String`](../scalars/String.md) | City where employed |
| `country` | [`String`](../scalars/String.md) | Country where employed |

## Examples

### Example

```json
{
  "id": "4",
  "user": GenericUser,
  "companyName": "abc123",
  "jobTitle": "xyz789",
  "standardizedCompanyId": "abc123",
  "standardizedJobTitleId": "xyz789",
  "role": "abc123",
  "startDate": "abc123",
  "endDate": "abc123",
  "description": "xyz789",
  "city": "xyz789",
  "country": "xyz789"
}
```
