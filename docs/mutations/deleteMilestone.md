---
title: "deleteMilestone"
kind: "mutation"
gql_name: "deleteMilestone"
returns: "Boolean!"
html_id: "mutation-deleteMilestone"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-deleteMilestone"
generated_by: "scripts/convert.mjs"
---


# `deleteMilestone`

## Description

Client deletes an existing milestone

## Required Permissions

"Offer - Read And Write Access"

## Response

Returns a [`Boolean!`](../scalars/Boolean.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`DeleteMilestoneInput`](../inputs/DeleteMilestoneInput.md) | Milestone deletion details |

## Examples

### Detailed structure

#### Query

```graphql
mutation deleteMilestone($input: DeleteMilestoneInput) {
  deleteMilestone(input: $input)
}
```

#### Variables

```json
{"input": DeleteMilestoneInput}
```

#### Response

```json
{"data": {"deleteMilestone": true}}
```
