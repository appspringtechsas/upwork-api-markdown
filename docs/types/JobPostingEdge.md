---
title: "JobPostingEdge"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingEdge"
html_id: "definition-JobPostingEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingEdge"
generated_by: "scripts/convert.mjs"
---


# `JobPostingEdge` (object)

## Description

Edge in management job posting connection

## Fields

| Field | Type | Description |
|---|---|---|
| `cursor` | [`String!`](../scalars/String.md) | Cursor for pagination |
| `node` | [`JobPosting`](JobPosting.md) | Job posting node |

## Examples

### Example

```json
{
  "cursor": "xyz789",
  "node": JobPosting
}
```
