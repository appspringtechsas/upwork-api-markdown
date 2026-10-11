---
title: "freelancerProfileByProfileKey"
kind: "query"
gql_name: "freelancerProfileByProfileKey"
returns: "FreelancerProfile!"
html_id: "query-freelancerProfileByProfileKey"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-freelancerProfileByProfileKey"
generated_by: "scripts/convert.mjs"
---


# `freelancerProfileByProfileKey`

## Description

Retrieve freelancer profile by the freelancer profile key(ciphertext)

## Required Permissions

"Freelancer Profile - Read And Write Access"

## Response

Returns a [`FreelancerProfile!`](../types/FreelancerProfile.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `profileKey` | [`String!`](../scalars/String.md) | Public profile key |

## Examples

### Detailed structure

#### Query

```graphql
query freelancerProfileByProfileKey($profileKey: String!) {
  freelancerProfileByProfileKey(profileKey: $profileKey) {
    user {
      ...CurrentUserFragment
    }
    userDetails {
      ...GenericUserFragment
    }
    personalData {
      ...FreelancerProfilePersonalDataFragment
    }
    userPreferences {
      ...FreelancerProfileUserPreferencesFragment
    }
    otherExperiences {
      ...FreelancerProfileOtherExperiencesConnectionFragment
    }
    languages {
      ...FreelancerProfileLanguagesConnectionFragment
    }
    educationRecords {
      ...FreelancerProfileEducationRecordFragment
    }
    certificates {
      ...FreelancerProfileCertificateFragment
    }
    employmentRecords {
      ...FreelancerProfileEmploymentRecordFragment
    }
    availability {
      ...FreelancerProfileAvailabilityFragment
    }
    committedResponseTime {
      ...FreelancerProfileCommittedResponseTimeFragment
    }
    project {
      ...FreelancerProfileProjectFragment
    }
    skills {
      ...FreelancerSkillsConnectionFragment
    }
    aggregates {
      ...FreelancerProfileAggregatesFragment
    }
    jobCategories {
      ...FreelancerProfileJobCategoriesConnectionFragment
    }
    profileCompletenessSummary {
      ...FreelancerProfileCompletenessSummaryFragment
    }
    linkedExternalAccountsList {
      ...FreelancerProfileLinkedExternalAccountsConnectionFragment
    }
    verifications {
      ...FreelancerProfileVerificationsFragment
    }
    fullName
    firstName
    lastName
    countryDetails {
      ...CountryFragment
    }
    email
    portrait {
      ...PortraitFragment
    }
    phoneNumber {
      ...PhoneNumberFragment
    }
    privateTalentCloud {
      ...PrivateTalentCloudConnectionFragment
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
    "freelancerProfileByProfileKey": {
      "user": CurrentUser,
      "userDetails": GenericUser,
      "personalData": FreelancerProfilePersonalData,
      "userPreferences": FreelancerProfileUserPreferences,
      "otherExperiences": FreelancerProfileOtherExperiencesConnection,
      "languages": FreelancerProfileLanguagesConnection,
      "educationRecords": [
        FreelancerProfileEducationRecord
      ],
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
      "fullName": "xyz789",
      "firstName": "abc123",
      "lastName": "abc123",
      "countryDetails": Country,
      "email": "xyz789",
      "portrait": Portrait,
      "phoneNumber": PhoneNumber,
      "privateTalentCloud": PrivateTalentCloudConnection
    }
  }
}
```

### Real-life example

#### Query

```graphql
query FreelancerProfileByKey($profileKey: String!) {
  freelancerProfileByProfileKey(profileKey: $profileKey) {
    personalData {
      title
      description
      chargeRate { displayValue currency }
    }
    aggregates {
      totalHourlyJobs
      adjustedFeedbackScore
    }
  }
}
```

#### Variables

```json
{"profileKey": "~016185b0bfd79b92fa"}
```

#### Response

```json
{
  "data": {
    "freelancerProfileByProfileKey": {
      "personalData": {
        "title": "Thor has his Hammer, I have my Code",
        "description": "2026-05-04 10:04:40.695 Hello!\n\nI'm a software developer with a keen focus on PHP, WooCommerce, Shopify, and Laravel, ready to simplify your business processes. Independently, I've built over 100 WooCommerce stores for businesses across the US and Canada, some of which are now generating between $5M to $20M in annual revenue.\n\nOver the years, I've gained valuable experience in the healthcare industry, understanding how to navigate the complex world of compliance to deliver effective solutions. This knowledge extends to other regulated industries, where I can confidently build compliant and efficient software solutions.\n\nA significant part of my work involves building custom Laravel applications for small businesses, creating bespoke WooCommerce plugins, ensuring security, and overseeing dev-ops. Whether you need someone to handle your existing WooCommerce store or need a custom Laravel application for your business, I'm here to help.\n\nMany of my satisfied clients suggested that more businesses on Upwork could benefit from my services, and so here I am! I'm also planning to invite even more of my international clients to this platform for seamless collaboration.\n\nWorking with me, you'll get:\n\nClear, jargon-free communication - I ensure that I understand your needs and keep you updated every step of the way.\n\nCustomized solutions - I build software that fits your business like a glove.\n\nA problem-solving mindset - I love tackling challenges and finding the right solutions for you.\n\nThank you for considering my profile. I'm excited to help your business thrive through effective software solutions.\n\nBest Wishes,\nBalu",
        "chargeRate": {
          "displayValue": "$87.0",
          "currency": "USD"
        }
      },
      "aggregates": {
        "totalHourlyJobs": 3,
        "adjustedFeedbackScore": 4.94
      }
    }
  }
}
```
