---
title: "FreelancerProfileProject"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileProject"
html_id: "definition-FreelancerProfileProject"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileProject"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileProject` (object)

## Description

Portfolio projects of the Freelancer

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Project identifier |
| `title` | [`String`](../scalars/String.md) | Portfolio project title |
| `description` | [`String`](../scalars/String.md) | Description of the portfolio project |
| `contractLink` | [`FreelancerProfileProjectContractLink`](FreelancerProfileProjectContractLink.md) | Connection to the Upwork contract if the project is done on Upwork |
| `thumbnailId` | [`String`](../scalars/String.md) | Pointer to the thumbnail |
| `thumbnailOriginalId` | [`String`](../scalars/String.md) | Pointer to the thumbnail in original |
| `thumbnail` | [`String`](../scalars/String.md) | Link to the thumbnail |
| `thumbnailOriginal` | [`String`](../scalars/String.md) | Link to the original thumbnail |
| `projectUrl` | [`String`](../scalars/String.md) | URL if exists for the portfolio project |
| `completionDateTime` | [`String`](../scalars/String.md) | The date when this project was completed |
| `public` | [`Boolean`](../scalars/Boolean.md) | If this project is visible for Upwork users or publicly |
| `rank` | [`Int`](../scalars/Int.md) | Order of this portfolio project in all of the portfolio projects |
| `attachments` | [`[FreelancerProfileProjectAttachment!]`](FreelancerProfileProjectAttachment.md) | Filtered list of project attachments (e.g., type eq JPG) |
| ⚠️ `skills` | [`FreelancerSkillsConnection`](FreelancerSkillsConnection.md) | List of skills associated with this freelancer's project Deprecated by TACT-1501 / TACT-1411. Fetcher config parked under marked-for-removal/TACT-1501/FreelancerProfileProject.skills.json, so this field now resolves to null. Ticket references stay in this comment and out of the @deprecated reason: that string is rendered to external API consumers. Customer notice tracked on API-1084. Removal target 2026-09-30. **⚠️ Deprecated — Removal planned for 2026-09-30. Select portfolio project skills via talentProfileByProfileKey { projectList { projects { tags { skill } } } }, which returns the same Skill type. Requires the pub-talent-profiles scope.** |
| `category` | [`JobCategory`](JobCategory.md) | The top level category associated to this portfolio project |
| `subCategory` | [`JobCategory`](JobCategory.md) | Level 2 category associated with this portfolio project |
| `occupationId` | [`String`](../scalars/String.md) | Associated occupation from the ontology for this portfolio project |
| `projectType` | [`FreelancerProfileProjectType`](../enums/FreelancerProfileProjectType.md) | Case study, gallery or general |
| `role` | [`String`](../scalars/String.md) | Role played by the freelancer on this project |
| `projectGoal` | [`String`](../scalars/String.md) | Project goal |
| `solution` | [`String`](../scalars/String.md) | Project solution in case study for example |
| `primaryImageId` | [`String`](../scalars/String.md) | Primary image file identifier |
| `createdDateTime` | [`String!`](../scalars/String.md) | Creation timestamp |
| `videoUrl` | [`String`](../scalars/String.md) | Project video URL |

## Examples

### Example

```json
{
  "id": "4",
  "title": "abc123",
  "description": "xyz789",
  "contractLink": FreelancerProfileProjectContractLink,
  "thumbnailId": "abc123",
  "thumbnailOriginalId": "abc123",
  "thumbnail": "abc123",
  "thumbnailOriginal": "xyz789",
  "projectUrl": "xyz789",
  "completionDateTime": "xyz789",
  "public": false,
  "rank": 987,
  "attachments": [FreelancerProfileProjectAttachment],
  "skills": FreelancerSkillsConnection,
  "category": JobCategory,
  "subCategory": JobCategory,
  "occupationId": "xyz789",
  "projectType": "CLASSIC_VIEW",
  "role": "xyz789",
  "projectGoal": "xyz789",
  "solution": "abc123",
  "primaryImageId": "abc123",
  "createdDateTime": "abc123",
  "videoUrl": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileProject" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerProfilePersonalData](FreelancerProfilePersonalData.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfileProjectAttachment](FreelancerProfileProjectAttachment.md) ➡️
