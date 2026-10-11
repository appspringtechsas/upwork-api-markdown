---
title: "TalentSpecializedProfilesProject"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentSpecializedProfilesProject"
html_id: "definition-TalentSpecializedProfilesProject"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentSpecializedProfilesProject"
generated_by: "scripts/convert.mjs"
---


# `TalentSpecializedProfilesProject` (object)

## Description

Project associated with a specialized profile

## Fields

| Field | Type | Description |
|---|---|---|
| `personId` | [`ID`](../scalars/ID.md) | Person identifier |
| `profileId` | [`ID`](../scalars/ID.md) | Profile identifier |
| `project` | [`TalentProfileSpecializedProject`](TalentProfileSpecializedProject.md) | Project details |

## Examples

### Example

```json
{
  "personId": "4",
  "profileId": 4,
  "project": TalentProfileSpecializedProject
}
```
