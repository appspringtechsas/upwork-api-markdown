---
title: "talentSpecializedProfile"
kind: "query"
gql_name: "talentSpecializedProfile"
returns: "TalentProfileList"
html_id: "query-talentSpecializedProfile"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-talentSpecializedProfile"
generated_by: "scripts/convert.mjs"
---


# `talentSpecializedProfile`

## Description

Primary or specialized profile can be retrieved.

## Required Permissions

"Talent Profile - Read And Write Access public"

## Response

Returns a [`TalentProfileList`](../types/TalentProfileList.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `personId` | [`ID!`](../scalars/ID.md) | User identifier |
| `profileId` | [`ID!`](../scalars/ID.md) | Specialized profile identifier |

## Examples

### Detailed structure

#### Query

```graphql
query talentSpecializedProfile(
  $personId: ID!,
  $profileId: ID!
) {
  talentSpecializedProfile(
    personId: $personId,
    profileId: $profileId
  ) {
    profiles {
      ...TalentProfileFragment
    }
  }
}
```

#### Variables

```json
{"personId": "4", "profileId": 4}
```

#### Response

```json
{
  "data": {
    "talentSpecializedProfile": {
      "profiles": [TalentProfile]
    }
  }
}
```
