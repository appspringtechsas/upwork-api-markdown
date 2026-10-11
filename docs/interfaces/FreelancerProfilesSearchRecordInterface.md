---
title: "FreelancerProfilesSearchRecordInterface"
kind: "interface"
domain: "Search"
gql_name: "FreelancerProfilesSearchRecordInterface"
html_id: "definition-FreelancerProfilesSearchRecordInterface"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfilesSearchRecordInterface"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfilesSearchRecordInterface` (interface)

## Description

Interface for freelancer profile search records Interface for freelancer profiles search record

## Fields

| Field | Type | Description |
|---|---|---|
| `shortName` | [`String`](../scalars/String.md) | Short name of the freelancer |
| `ciphertext` | [`String`](../scalars/String.md) | Freelancer's ciphertext |

## Possible Types

| Value | Description |
|---|---|
| [`FreelancerProfilesSearchRecord`](../types/FreelancerProfilesSearchRecord.md) |
| [`UserFreelancerProfilesSearchRecord`](../types/UserFreelancerProfilesSearchRecord.md) |

## Examples

### Example

```json
{
  "shortName": "abc123",
  "ciphertext": "abc123"
}
```
