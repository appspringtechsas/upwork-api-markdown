---
title: "FreelancerProfile"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfile"
html_id: "definition-FreelancerProfile"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfile"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfile` (object)

## Description

Freelancer Profile details.

## Fields

| Field | Type | Description |
|---|---|---|
| `user` | [`CurrentUser!`](CurrentUser.md) | The user (freelancer) who owns this profile (must be used only for current user use case) |
| `userDetails` | [`GenericUser!`](GenericUser.md) | The user (freelancer) who owns this profile (can be used for any user use case) |
| `personalData` | [`FreelancerProfilePersonalData!`](FreelancerProfilePersonalData.md) | Personal data of the profile (firstName, lastName, etc) |
| `userPreferences` | [`FreelancerProfileUserPreferences!`](FreelancerProfileUserPreferences.md) | User preferences of the profile (e.g., profileAccess, hideEarnings, etc) |
| `otherExperiences` | [`FreelancerProfileOtherExperiencesConnection!`](FreelancerProfileOtherExperiencesConnection.md) | List of other experiences (e.g., otherExperiences with subject eq 'Web Development') |
| `languages` | [`FreelancerProfileLanguagesConnection!`](FreelancerProfileLanguagesConnection.md) | List of languages that freelancer can speak |
| `educationRecords` | [`[FreelancerProfileEducationRecord!]!`](FreelancerProfileEducationRecord.md) | List of education records (e.g., educationRecords where areaOfStudy eq Computer Engineering) |
| `certificates` | [`[FreelancerProfileCertificate]`](FreelancerProfileCertificate.md) | List of certificates earned by freelancer |
| `employmentRecords` | [`[FreelancerProfileEmploymentRecord!]!`](FreelancerProfileEmploymentRecord.md) | List of employment records (e.g., employmentRecords where country eq US) |
| `availability` | [`FreelancerProfileAvailability`](FreelancerProfileAvailability.md) | Freelancer's availability |
| `committedResponseTime` | [`FreelancerProfileCommittedResponseTime`](FreelancerProfileCommittedResponseTime.md) | Response times committed by Freelancer (can be immediate, soon or never) |
| `project` | [`FreelancerProfileProject`](FreelancerProfileProject.md) | Project of the profile by its ID |
| `skills` | [`FreelancerSkillsConnection!`](FreelancerSkillsConnection.md) | List of freelancer skills |
| `aggregates` | [`FreelancerProfileAggregates!`](FreelancerProfileAggregates.md) | Freelancer profile aggregates |
| `jobCategories` | [`FreelancerProfileJobCategoriesConnection`](FreelancerProfileJobCategoriesConnection.md) | Job categories selected by the freelancer on their profile |
| `profileCompletenessSummary` | [`FreelancerProfileCompletenessSummary`](FreelancerProfileCompletenessSummary.md) | Profile completeness summary |
| `linkedExternalAccountsList` | [`FreelancerProfileLinkedExternalAccountsConnection!`](FreelancerProfileLinkedExternalAccountsConnection.md) | List of external social network accounts |
| `verifications` | [`FreelancerProfileVerifications`](FreelancerProfileVerifications.md) | Verification data (phone verified, webcam verified) of the profile |
| `fullName` | [`String!`](../scalars/String.md) | Freelancer first name + last name |
| `firstName` | [`String!`](../scalars/String.md) | Freelancer first name |
| `lastName` | [`String!`](../scalars/String.md) | Freelancer last name |
| `countryDetails` | [`Country`](Country.md) | Country details |
| `email` | [`String`](../scalars/String.md) | Email address |
| `portrait` | [`Portrait`](Portrait.md) | Profile portrait |
| `phoneNumber` | [`PhoneNumber`](PhoneNumber.md) | Phone number visible only for the current user |
| `privateTalentCloud` | [`PrivateTalentCloudConnection!`](PrivateTalentCloudConnection.md) | Talent clouds that the freelancer is part of |

## Field arguments

### `otherExperiences`

| Argument | Type | Description |
|---|---|---|
| `filter` | [`FreelancerProfileOtherExperiencesFilter`](../inputs/FreelancerProfileOtherExperiencesFilter.md) |  |
| `SortAttribute` | [`SortAttribute`](../inputs/SortAttribute.md) |  |
| `pagination` | [`Pagination`](../inputs/Pagination.md) |  |

### `educationRecords`

| Argument | Type | Description |
|---|---|---|
| `filter` | [`FreelancerProfileEducationRecordsFilter`](../inputs/FreelancerProfileEducationRecordsFilter.md) |  |
| `SortAttribute` | [`SortAttribute`](../inputs/SortAttribute.md) |  |
| `pagination` | [`Pagination`](../inputs/Pagination.md) |  |

### `project`

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Project identifier |

## Examples

### Example

```json
{
  "user": CurrentUser,
  "userDetails": GenericUser,
  "personalData": FreelancerProfilePersonalData,
  "userPreferences": FreelancerProfileUserPreferences,
  "otherExperiences": FreelancerProfileOtherExperiencesConnection,
  "languages": FreelancerProfileLanguagesConnection,
  "educationRecords": [FreelancerProfileEducationRecord],
  "certificates": [FreelancerProfileCertificate],
  "employmentRecords": [
    FreelancerProfileEmploymentRecord
  ],
  "availability": FreelancerProfileAvailability,
  "committedResponseTime": FreelancerProfileCommittedResponseTime,
  "project": FreelancerProfileProject,
  "skills": FreelancerSkillsConnection,
  "aggregates": FreelancerProfileAggregates,
  "jobCategories": FreelancerProfileJobCategoriesConnection,
  "profileCompletenessSummary": FreelancerProfileCompletenessSummary,
  "linkedExternalAccountsList": FreelancerProfileLinkedExternalAccountsConnection,
  "verifications": FreelancerProfileVerifications,
  "fullName": "abc123",
  "firstName": "abc123",
  "lastName": "abc123",
  "countryDetails": Country,
  "email": "abc123",
  "portrait": Portrait,
  "phoneNumber": PhoneNumber,
  "privateTalentCloud": PrivateTalentCloudConnection
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfile" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerLocation](FreelancerLocation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfileAggregates](FreelancerProfileAggregates.md) ➡️
