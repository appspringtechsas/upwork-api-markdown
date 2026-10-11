---
title: "TalentCloudTaskOverview"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentCloudTaskOverview"
html_id: "definition-TalentCloudTaskOverview"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentCloudTaskOverview"
generated_by: "scripts/convert.mjs"
---


# `TalentCloudTaskOverview` (object)

## Description

Overview of a talent cloud task

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Task identifier |
| `taskSectionIds` | [`[ID]`](../scalars/ID.md) | List of section IDs this task belongs to |
| `name` | [`String`](../scalars/String.md) | Task name |
| `completionRequired` | [`Boolean`](../scalars/Boolean.md) | Whether completion of this task is required |
| `active` | [`Boolean`](../scalars/Boolean.md) | Whether this task is active |
| `permissions` | [`[TalentCloudTaskOverviewPermission]`](TalentCloudTaskOverviewPermission.md) | List of permissions for different roles |
| `primaryTaskOwner` | [`TalentCloudTaskRole`](../enums/TalentCloudTaskRole.md) | Primary owner role for this task |

## Examples

### Example

```json
{
  "id": "4",
  "taskSectionIds": [4],
  "name": "abc123",
  "completionRequired": false,
  "active": false,
  "permissions": [TalentCloudTaskOverviewPermission],
  "primaryTaskOwner": "FREELANCER"
}
```
