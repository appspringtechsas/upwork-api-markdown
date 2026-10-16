---
title: "ontologySkills"
kind: "query"
gql_name: "ontologySkills"
returns: "[Skill!]!"
html_id: "query-ontologySkills"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologySkills"
generated_by: "scripts/convert.mjs"
---


# `ontologySkills`

## Description

Get the list of skills paginated with limit and offset

## Required Permissions

One of: "Common Entities - Read-Only Access" OR "Common Functionality - Read And Write Access"

## Response

Returns [`[Skill!]!`](../types/Skill.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `limit` | [`Int!`](../scalars/Int.md) | Maximum number of skills to return |
| `offset` | [`Int`](../scalars/Int.md) | Number of skills to skip |

## Examples

### Detailed structure

#### Query

```graphql
query ontologySkills(
  $limit: Int!,
  $offset: Int
) {
  ontologySkills(
    limit: $limit,
    offset: $offset
  ) {
    id
    ontologyId
    type
    entityStatus
    preferredLabel
    createdDateTime
    modifiedDateTime
    definition
    altLabel
    narrower
    narrowerIds
    broader
    broaderIds
    dependsOn
    dependsOnIds
    splitInto
    splitIntoIds
    mergedInto
    mergedIntoId
    replacedBy
    replacedById
    scopeNote
    externalLink
    exactMatch
    exactMatchIds
    closeMatch
    closeMatchIds
    comment
    attributeLevel
    allowMultipleClient
    allowMultipleFreelancer
    allowOther
    clientQuestion
    clientTip
    freelancerQuestion
    freelancerTip
    advancedClient
    client
    freelancer
    requiredClient
    requiredFreelancer
    otherClientLabel
    otherFreelancerLabel
    presentationMode
    priority
    isRequiredBy
    isRequiredByIds
    legacySkillNid
    prettyName
    legacySkillId
  }
}
```

#### Variables

```json
{"limit": 123, "offset": 123}
```

#### Response

```json
{
  "data": {
    "ontologySkills": [
      {
        "id": 4,
        "ontologyId": "xyz789",
        "type": ["OCCUPATION"],
        "entityStatus": "ACTIVE",
        "preferredLabel": "abc123",
        "createdDateTime": "abc123",
        "modifiedDateTime": "abc123",
        "definition": "abc123",
        "altLabel": ["abc123"],
        "narrower": ["abc123"],
        "narrowerIds": [4],
        "broader": ["xyz789"],
        "broaderIds": [4],
        "dependsOn": ["xyz789"],
        "dependsOnIds": [4],
        "splitInto": ["abc123"],
        "splitIntoIds": [4],
        "mergedInto": "xyz789",
        "mergedIntoId": "4",
        "replacedBy": "xyz789",
        "replacedById": "4",
        "scopeNote": "xyz789",
        "externalLink": ["xyz789"],
        "exactMatch": ["xyz789"],
        "exactMatchIds": [4],
        "closeMatch": ["xyz789"],
        "closeMatchIds": [4],
        "comment": "xyz789",
        "attributeLevel": ["xyz789"],
        "allowMultipleClient": false,
        "allowMultipleFreelancer": false,
        "allowOther": false,
        "clientQuestion": "xyz789",
        "clientTip": "xyz789",
        "freelancerQuestion": "xyz789",
        "freelancerTip": "abc123",
        "advancedClient": false,
        "client": false,
        "freelancer": true,
        "requiredClient": false,
        "requiredFreelancer": true,
        "otherClientLabel": "xyz789",
        "otherFreelancerLabel": "xyz789",
        "presentationMode": "xyz789",
        "priority": 987,
        "isRequiredBy": ["xyz789"],
        "isRequiredByIds": [4],
        "legacySkillNid": "abc123",
        "prettyName": "xyz789",
        "legacySkillId": "4"
      }
    ]
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologySkills" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ontologyOccupationsCategoriesServices](ontologyOccupationsCategoriesServices.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [clientInvitation](clientInvitation.md) ➡️
