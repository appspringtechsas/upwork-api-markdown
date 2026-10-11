---
title: "UpdateEmploymentRecordInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "UpdateEmploymentRecordInput"
html_id: "definition-UpdateEmploymentRecordInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateEmploymentRecordInput"
generated_by: "scripts/convert.mjs"
---


# `UpdateEmploymentRecordInput` (input object)

## Description

Update employment record input

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Employment record identifier |
| `userId` | [`ID`](../scalars/ID.md) | User identifier |
| `companyName` | [`String`](../scalars/String.md) | Company name |
| `jobTitle` | [`String`](../scalars/String.md) | Job title |
| `standardizedCompanyId` | [`String`](../scalars/String.md) | Standardized company identifier |
| `standardizedJobTitleId` | [`String`](../scalars/String.md) | Standardized job title identifier |
| `role` | [`String!`](../scalars/String.md) | Role in the company |
| `startDate` | [`String`](../scalars/String.md) | start date - e.g: "1999-01-01" |
| `endDate` | [`String`](../scalars/String.md) | end date - e.g: "2002-01-01" |
| `description` | [`String`](../scalars/String.md) | Role description |
| `city` | [`String`](../scalars/String.md) | City name |
| `country` | [`String`](../scalars/String.md) | Country name |

## Examples

### Example

```json
{
  "id": 4,
  "userId": "4",
  "companyName": "xyz789",
  "jobTitle": "xyz789",
  "standardizedCompanyId": "xyz789",
  "standardizedJobTitleId": "xyz789",
  "role": "abc123",
  "startDate": "xyz789",
  "endDate": "xyz789",
  "description": "xyz789",
  "city": "xyz789",
  "country": "xyz789"
}
```
