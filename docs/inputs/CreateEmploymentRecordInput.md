---
title: "CreateEmploymentRecordInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "CreateEmploymentRecordInput"
html_id: "definition-CreateEmploymentRecordInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreateEmploymentRecordInput"
generated_by: "scripts/convert.mjs"
---


# `CreateEmploymentRecordInput` (input object)

## Description

Create employment record input

## Fields

| Field | Type | Description |
|---|---|---|
| `userId` | [`ID`](../scalars/ID.md) | User identifier |
| `companyName` | [`String!`](../scalars/String.md) | Company name |
| `jobTitle` | [`String!`](../scalars/String.md) | Job title |
| `standardizedCompanyId` | [`String`](../scalars/String.md) | Standardized company identifier |
| `standardizedJobTitleId` | [`String`](../scalars/String.md) | Standardized job title identifier |
| `role` | [`String!`](../scalars/String.md) | Role in the company |
| `startDate` | [`String!`](../scalars/String.md) | start date - e.g: "1999-01-01" |
| `endDate` | [`String`](../scalars/String.md) | end date - e.g: "2002-01-01" |
| `description` | [`String`](../scalars/String.md) | Role description |
| `city` | [`String!`](../scalars/String.md) | City name |
| `country` | [`String!`](../scalars/String.md) | Country name |

## Examples

### Example

```json
{
  "userId": 4,
  "companyName": "xyz789",
  "jobTitle": "xyz789",
  "standardizedCompanyId": "abc123",
  "standardizedJobTitleId": "abc123",
  "role": "abc123",
  "startDate": "abc123",
  "endDate": "abc123",
  "description": "abc123",
  "city": "abc123",
  "country": "xyz789"
}
```
