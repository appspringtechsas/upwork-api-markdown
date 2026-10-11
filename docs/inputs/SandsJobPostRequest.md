---
title: "SandsJobPostRequest"
kind: "input_object"
domain: "Job Posts"
gql_name: "SandsJobPostRequest"
html_id: "definition-SandsJobPostRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SandsJobPostRequest"
generated_by: "scripts/convert.mjs"
---


# `SandsJobPostRequest` (input object)

## Description

Skills and occupations data for job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `occupationId` | [`String`](../scalars/String.md) | jobPostId: ID # the correct id will be provided by upstream Equal to services.id (eg Front-End Development) |
| `skills` | [`[JobPostingSkillInput!]`](JobPostingSkillInput.md) | List of skills |
| `status` | [`SandsJobPostStatus`](../enums/SandsJobPostStatus.md) | Job post status |
| `freetextOccupation` | [`String`](../scalars/String.md) | Free-text occupation description |
| `tags` | [`[String!]`](../scalars/String.md) | Tags for categorization |
| `additionalSkills` | [`[JobPostingAdditionalSkillInput!]`](JobPostingAdditionalSkillInput.md) | Additional skills |
| `occupations` | [`[ID!]`](../scalars/ID.md) | Occupation identifiers |

## Examples

### Example

```json
{
  "occupationId": "abc123",
  "skills": [JobPostingSkillInput],
  "status": "DRAFT",
  "freetextOccupation": "abc123",
  "tags": ["abc123"],
  "additionalSkills": [JobPostingAdditionalSkillInput],
  "occupations": ["4"]
}
```
