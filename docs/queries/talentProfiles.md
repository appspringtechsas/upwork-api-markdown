---
title: "talentProfiles"
kind: "query"
gql_name: "talentProfiles"
returns: "TalentProfileList!"
html_id: "query-talentProfiles"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-talentProfiles"
generated_by: "scripts/convert.mjs"
---


# `talentProfiles`

## Description

Loads general profile by personId list and profileIds

## Required Permissions

"Talent Profile - Read And Write Access public"

## Response

Returns a [`TalentProfileList!`](../types/TalentProfileList.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `personIds` | [`[ID!]!`](../scalars/ID.md) | List of user identifiers |
| `profileIds` | [`[ID]`](../scalars/ID.md) | Optional list of profile identifiers |

## Examples

### Detailed structure

#### Query

```graphql
query talentProfiles(
  $personIds: [ID!]!,
  $profileIds: [ID]
) {
  talentProfiles(
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
    "talentProfiles": {"profiles": [TalentProfile]}
  }
}
```
