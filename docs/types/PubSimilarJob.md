---
title: "PubSimilarJob"
kind: "object"
domain: "Other"
gql_name: "PubSimilarJob"
html_id: "definition-PubSimilarJob"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PubSimilarJob"
generated_by: "scripts/convert.mjs"
---


# `PubSimilarJob` (object)

## Description

Similar job details

## Fields

| Field | Type | Description |
|---|---|---|
| `ciphertext` | [`String`](../scalars/String.md) | Encrypted identifier for the job |
| `title` | [`String`](../scalars/String.md) | Title of the similar job posting |
| `description` | [`String`](../scalars/String.md) | Description of the similar job posting |
| `engagement` | [`String`](../scalars/String.md) | Type of engagement (e.g., one-time project, ongoing) |
| `durationLabel` | [`String`](../scalars/String.md) | Human-readable duration label |
| `type` | [`ContractType`](../enums/ContractType.md) | Contract type of the job (HOURLY or FIXED) |
| `createdOn` | [`String`](../scalars/String.md) | Timestamp when the job was created |
| `ontologySkills` | [`[SandsSkill]`](SandsSkill.md) | List of required or relevant skills from SANDS taxonomy |
| `hourlyBudgetMin` | [`Float`](../scalars/Float.md) | Minimum hourly rate (for hourly jobs) |
| `hourlyBudgetMax` | [`Float`](../scalars/Float.md) | Maximum hourly rate (for hourly jobs) |

## Examples

### Example

```json
{
  "ciphertext": "abc123",
  "title": "abc123",
  "description": "xyz789",
  "engagement": "xyz789",
  "durationLabel": "abc123",
  "type": "HOURLY",
  "createdOn": "xyz789",
  "ontologySkills": [SandsSkill],
  "hourlyBudgetMin": 123.45,
  "hourlyBudgetMax": 123.45
}
```
