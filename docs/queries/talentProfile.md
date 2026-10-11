---
title: "talentProfile"
kind: "query"
gql_name: "talentProfile"
returns: "TalentProfileList"
html_id: "query-talentProfile"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-talentProfile"
generated_by: "scripts/convert.mjs"
---


# `talentProfile`

## Description

Primary or specialized profile can be retrieved. In order to get specialized profile set primary to false The general profile will be returned when primary input is not supplied.

## Required Permissions

"Talent Profile - Read And Write Access public"

## Response

Returns a [`TalentProfileList`](../types/TalentProfileList.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `personId` | [`ID!`](../scalars/ID.md) | User identifier |

## Examples

### Detailed structure

#### Query

```graphql
query talentProfile($personId: ID!) {
  talentProfile(personId: $personId) {
    profiles {
      ...TalentProfileFragment
    }
  }
}
```

#### Variables

```json
{"personId": 4}
```

#### Response

```json
{"data": {"talentProfile": {"profiles": [TalentProfile]}}}
```
