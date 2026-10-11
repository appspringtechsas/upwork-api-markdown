---
title: "talentSpecializedProfiles"
kind: "query"
gql_name: "talentSpecializedProfiles"
returns: "TalentProfileList"
html_id: "query-talentSpecializedProfiles"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-talentSpecializedProfiles"
generated_by: "scripts/convert.mjs"
---


# `talentSpecializedProfiles`

## Description

Primary or specialized profile can be retrieved.

## Required Permissions

"Talent Profile - Read And Write Access public"

## Response

Returns a [`TalentProfileList`](../types/TalentProfileList.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `personIds` | [`[ID!]!`](../scalars/ID.md) | List of user identifiers |
| `profileIds` | [`[ID!]`](../scalars/ID.md) | List of specialized profile identifiers |

## Examples

### Detailed structure

#### Query

```graphql
query talentSpecializedProfiles(
  $personIds: [ID!]!,
  $profileIds: [ID!]
) {
  talentSpecializedProfiles(
    personIds: $personIds,
    profileIds: $profileIds
  ) {
    profiles {
      ...TalentProfileFragment
    }
  }
}
```

#### Variables

```json
{"personIds": [4], "profileIds": ["4"]}
```

#### Response

```json
{
  "data": {
    "talentSpecializedProfiles": {
      "profiles": [TalentProfile]
    }
  }
}
```
