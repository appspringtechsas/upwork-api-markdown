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
{"limit": 987, "offset": 123}
```

#### Response

```json
{
  "data": {
    "ontologySkills": [
      {
        "id": "4",
        "ontologyId": "abc123",
        "type": ["OCCUPATION"],
        "entityStatus": "ACTIVE",
        "preferredLabel": "abc123",
        "createdDateTime": "xyz789",
        "modifiedDateTime": "abc123",
        "definition": "xyz789",
        "altLabel": ["xyz789"],
        "narrower": ["xyz789"],
        "narrowerIds": [4],
        "broader": ["abc123"],
        "broaderIds": ["4"],
        "dependsOn": ["abc123"],
        "dependsOnIds": ["4"],
        "splitInto": ["abc123"],
        "splitIntoIds": ["4"],
        "mergedInto": "xyz789",
        "mergedIntoId": "4",
        "replacedBy": "xyz789",
        "replacedById": "4",
        "scopeNote": "xyz789",
        "externalLink": ["xyz789"],
        "exactMatch": ["xyz789"],
        "exactMatchIds": [4],
        "closeMatch": ["abc123"],
        "closeMatchIds": ["4"],
        "comment": "abc123",
        "attributeLevel": ["xyz789"],
        "allowMultipleClient": true,
        "allowMultipleFreelancer": false,
        "allowOther": true,
        "clientQuestion": "abc123",
        "clientTip": "xyz789",
        "freelancerQuestion": "xyz789",
        "freelancerTip": "xyz789",
        "advancedClient": true,
        "client": false,
        "freelancer": false,
        "requiredClient": false,
        "requiredFreelancer": false,
        "otherClientLabel": "xyz789",
        "otherFreelancerLabel": "abc123",
        "presentationMode": "abc123",
        "priority": 987,
        "isRequiredBy": ["abc123"],
        "isRequiredByIds": [4],
        "legacySkillNid": "abc123",
        "prettyName": "xyz789",
        "legacySkillId": 4
      }
    ]
  }
}
```
