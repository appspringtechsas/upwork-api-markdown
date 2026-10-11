---
title: "TalentProfile"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfile"
html_id: "definition-TalentProfile"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfile"
generated_by: "scripts/convert.mjs"
---


# `TalentProfile` (object)

## Description

Freelancer profile containing all profile information and settings

## Fields

| Field | Type | Description |
|---|---|---|
| `personId` | [`ID!`](../scalars/ID.md) | Unique identifier for the person |
| `identity` | [`TalentProfileIdentity`](TalentProfileIdentity.md) | Profile identity information |
| `personalData` | [`TalentProfilePersonalData`](TalentProfilePersonalData.md) | Personal data including name, title, description |
| `preferences` | [`TalentProfileUserPreferences`](TalentProfileUserPreferences.md) | User preferences for profile visibility and privacy |
| `settings` | [`TalentProfileSettings`](TalentProfileSettings.md) | Profile settings and status |
| `personAvailability` | [`TalentPersonAvailability`](TalentPersonAvailability.md) | Availability information for the freelancer |
| `projectList` | [`TalentProjectList`](TalentProjectList.md) | List of portfolio projects |
| `communityCertificates` | [`[TalentProfileCommunityCertificate]`](TalentProfileCommunityCertificate.md) | Community and diversity certificates |
| `profileCompleteness` | [`TalentProfileCompletenessSummary`](TalentProfileCompletenessSummary.md) | Profile completeness summary with PCI score |
| `otherExperiences` | [`[TalentProfileOtherExperience]`](TalentProfileOtherExperience.md) | Other professional experiences |
| `educationRecords` | [`[TalentEducationRecord]`](TalentEducationRecord.md) | Education history records |
| `employmentRecords` | [`[TalentProfileEmploymentRecord]`](TalentProfileEmploymentRecord.md) | Employment history records |
| `skills` | [`[TalentProfilePersonSkill]`](TalentProfilePersonSkill.md) | Skills listed on the profile |
| `jobCategories` | [`[TalentJobCategoryGroup]`](TalentJobCategoryGroup.md) | Job categories and subcategories |
| `profileAggregates` | [`TalentProfileAggregate`](TalentProfileAggregate.md) | Aggregated profile statistics and metrics |
| `specializedProfiles` | [`[TalentSpecializedProfile!]`](TalentSpecializedProfile.md) | Specialized profiles for different services |
| `specializedProfilesSkills` | [`[TalentSpecializedProfileSkill!]`](TalentSpecializedProfileSkill.md) | Skills for specialized profiles |
| `specializedProfilesProjects` | [`[TalentSpecializedProfilesProject!]`](TalentSpecializedProfilesProject.md) | Projects for specialized profiles |

## Examples

### Example

```json
{
  "personId": 4,
  "identity": TalentProfileIdentity,
  "personalData": TalentProfilePersonalData,
  "preferences": TalentProfileUserPreferences,
  "settings": TalentProfileSettings,
  "personAvailability": TalentPersonAvailability,
  "projectList": TalentProjectList,
  "communityCertificates": [
    TalentProfileCommunityCertificate
  ],
  "profileCompleteness": TalentProfileCompletenessSummary,
  "otherExperiences": [TalentProfileOtherExperience],
  "educationRecords": [TalentEducationRecord],
  "employmentRecords": [TalentProfileEmploymentRecord],
  "skills": [TalentProfilePersonSkill],
  "jobCategories": [TalentJobCategoryGroup],
  "profileAggregates": TalentProfileAggregate,
  "specializedProfiles": [TalentSpecializedProfile],
  "specializedProfilesSkills": [
    TalentSpecializedProfileSkill
  ],
  "specializedProfilesProjects": [
    TalentSpecializedProfilesProject
  ]
}
```
