---
title: "talentProfileByProfileKey"
kind: "query"
gql_name: "talentProfileByProfileKey"
returns: "TalentProfile"
html_id: "query-talentProfileByProfileKey"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-talentProfileByProfileKey"
generated_by: "scripts/convert.mjs"
---


# `talentProfileByProfileKey`

## Description

Primary profile by profile key

## Required Permissions

"Talent Profile - Read And Write Access public"

## Response

Returns a [`TalentProfile`](../types/TalentProfile.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `profileKey` | [`String!`](../scalars/String.md) | Public profile key string |

## Examples

### Detailed structure

#### Query

```graphql
query talentProfileByProfileKey($profileKey: String!) {
  talentProfileByProfileKey(profileKey: $profileKey) {
    personId
    identity {
      ...TalentProfileIdentityFragment
    }
    personalData {
      ...TalentProfilePersonalDataFragment
    }
    preferences {
      ...TalentProfileUserPreferencesFragment
    }
    settings {
      ...TalentProfileSettingsFragment
    }
    personAvailability {
      ...TalentPersonAvailabilityFragment
    }
    projectList {
      ...TalentProjectListFragment
    }
    communityCertificates {
      ...TalentProfileCommunityCertificateFragment
    }
    profileCompleteness {
      ...TalentProfileCompletenessSummaryFragment
    }
    otherExperiences {
      ...TalentProfileOtherExperienceFragment
    }
    educationRecords {
      ...TalentEducationRecordFragment
    }
    employmentRecords {
      ...TalentProfileEmploymentRecordFragment
    }
    skills {
      ...TalentProfilePersonSkillFragment
    }
    jobCategories {
      ...TalentJobCategoryGroupFragment
    }
    profileAggregates {
      ...TalentProfileAggregateFragment
    }
    specializedProfiles {
      ...TalentSpecializedProfileFragment
    }
    specializedProfilesSkills {
      ...TalentSpecializedProfileSkillFragment
    }
    specializedProfilesProjects {
      ...TalentSpecializedProfilesProjectFragment
    }
  }
}
```

#### Variables

```json
{"profileKey": "abc123"}
```

#### Response

```json
{
  "data": {
    "talentProfileByProfileKey": {
      "personId": "4",
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
      "employmentRecords": [
        TalentProfileEmploymentRecord
      ],
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
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-talentProfileByProfileKey" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [talentProfile](talentProfile.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [talentProfiles](talentProfiles.md) ➡️
