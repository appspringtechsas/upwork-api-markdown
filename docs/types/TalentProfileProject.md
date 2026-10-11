---
title: "TalentProfileProject"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileProject"
html_id: "definition-TalentProfileProject"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileProject"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileProject` (object)

## Description

Portfolio project showcasing freelancer work

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Project identifier |
| `title` | [`String`](../scalars/String.md) | Project title |
| `description` | [`String`](../scalars/String.md) | Project description |
| `projectContractLink` | [`TalentProjectContractLink`](TalentProjectContractLink.md) | Link to related contract if applicable |
| `thumbnail` | [`String`](../scalars/String.md) | URL to project thumbnail image |
| `thumbnailOriginal` | [`String`](../scalars/String.md) | URL to original thumbnail image |
| `projectUrl` | [`String`](../scalars/String.md) | External URL to the project |
| `completionDateTime` | [`String`](../scalars/String.md) | When the project was completed |
| `public` | [`Boolean`](../scalars/Boolean.md) | Whether project is publicly visible |
| `rank` | [`Int`](../scalars/Int.md) | Display order rank |
| `attachments` | [`[TalentProfileProjectAttachment]`](TalentProfileProjectAttachment.md) | Project attachments |
| `skills` | [`[String]`](../scalars/String.md) | Skills used in the project |
| `creationDateTime` | [`String`](../scalars/String.md) | When project was created |
| `categoryId` | [`ID`](../scalars/ID.md) | Category identifier |
| `videoUrl` | [`String`](../scalars/String.md) | URL to project video |
| `occupationId` | [`String`](../scalars/String.md) | Occupation identifier |
| `projectType` | [`FreelancerProfileProjectType`](../enums/FreelancerProfileProjectType.md) | Type of project |
| `role` | [`String`](../scalars/String.md) | Role in the project |
| `projectGoal` | [`String`](../scalars/String.md) | Goal of the project |
| `solution` | [`String`](../scalars/String.md) | Solution provided |
| `primaryImageId` | [`String`](../scalars/String.md) | Primary image identifier |
| `tags` | [`[TalentProfileProjectTag]`](TalentProfileProjectTag.md) | Tags associated with the project |
| `modificationDateTime` | [`String`](../scalars/String.md) | When project was last modified |
| `developerId` | [`String`](../scalars/String.md) | Developer identifier |
| `thumbnailId` | [`String`](../scalars/String.md) | Thumbnail image identifier |
| `thumbnailOriginalId` | [`String`](../scalars/String.md) | Original thumbnail image identifier |
| `category` | [`String`](../scalars/String.md) | Category name |
| `subCategory` | [`String`](../scalars/String.md) | Subcategory name |

## Examples

### Example

```json
{
  "id": 4,
  "title": "xyz789",
  "description": "xyz789",
  "projectContractLink": TalentProjectContractLink,
  "thumbnail": "xyz789",
  "thumbnailOriginal": "xyz789",
  "projectUrl": "xyz789",
  "completionDateTime": "xyz789",
  "public": false,
  "rank": 123,
  "attachments": [TalentProfileProjectAttachment],
  "skills": ["xyz789"],
  "creationDateTime": "abc123",
  "categoryId": "4",
  "videoUrl": "xyz789",
  "occupationId": "abc123",
  "projectType": "CLASSIC_VIEW",
  "role": "xyz789",
  "projectGoal": "xyz789",
  "solution": "abc123",
  "primaryImageId": "xyz789",
  "tags": [TalentProfileProjectTag],
  "modificationDateTime": "xyz789",
  "developerId": "abc123",
  "thumbnailId": "xyz789",
  "thumbnailOriginalId": "abc123",
  "category": "abc123",
  "subCategory": "abc123"
}
```
