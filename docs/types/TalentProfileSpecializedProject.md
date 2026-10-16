---
title: "TalentProfileSpecializedProject"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileSpecializedProject"
html_id: "definition-TalentProfileSpecializedProject"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileSpecializedProject"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileSpecializedProject` (object)

## Description

Portfolio project for a specialized profile

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
| `creationDateTime` | [`String`](../scalars/String.md) | When project was created |
| `categoryId` | [`ID`](../scalars/ID.md) | Category identifier |
| `videoUrl` | [`String`](../scalars/String.md) | URL to project video |
| `occupationId` | [`String`](../scalars/String.md) | Occupation identifier |
| `projectType` | [`FreelancerProfileProjectType`](../enums/FreelancerProfileProjectType.md) | Type of project |
| `role` | [`String`](../scalars/String.md) | Role in the project |
| `projectGoal` | [`String`](../scalars/String.md) | Goal of the project |
| `solution` | [`String`](../scalars/String.md) | Solution provided |
| `primaryImageId` | [`String`](../scalars/String.md) | Primary image identifier |
| `modificationDateTime` | [`String`](../scalars/String.md) | When project was last modified |
| `thumbnailId` | [`String`](../scalars/String.md) | Thumbnail image identifier |
| `thumbnailOriginalId` | [`String`](../scalars/String.md) | Original thumbnail image identifier |
| `category` | [`String`](../scalars/String.md) | Category name |
| `subCategory` | [`String`](../scalars/String.md) | Subcategory name |

## Examples

### Example

```json
{
  "id": "4",
  "title": "abc123",
  "description": "abc123",
  "projectContractLink": TalentProjectContractLink,
  "thumbnail": "abc123",
  "thumbnailOriginal": "xyz789",
  "projectUrl": "abc123",
  "completionDateTime": "xyz789",
  "public": false,
  "rank": 123,
  "attachments": [TalentProfileProjectAttachment],
  "creationDateTime": "xyz789",
  "categoryId": 4,
  "videoUrl": "xyz789",
  "occupationId": "abc123",
  "projectType": "CLASSIC_VIEW",
  "role": "abc123",
  "projectGoal": "abc123",
  "solution": "abc123",
  "primaryImageId": "xyz789",
  "modificationDateTime": "abc123",
  "thumbnailId": "abc123",
  "thumbnailOriginalId": "xyz789",
  "category": "xyz789",
  "subCategory": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileSpecializedProject" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentProfileSettings](TalentProfileSettings.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentProfileUserPreferences](TalentProfileUserPreferences.md) ➡️
