---
title: "AccessRestictionReason"
kind: "enum"
domain: "Users and teams"
gql_name: "AccessRestictionReason"
html_id: "definition-AccessRestictionReason"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-AccessRestictionReason"
generated_by: "scripts/convert.mjs"
---


# `AccessRestictionReason` (enum)

## Description

Reason why access is restricted for a user

## Values

| Value | Description |
|---|---|
| `ROLES_MISMATCH` | User roles do not match requirements |
| `SUSPENSION` | User or organization is suspended |
| `MONETIZATION` | Monetization-related restrictions |
| `ACTION_DOESNT_EXIST` | Requested action does not exist |
| `ORGANIZATION` | Organization-level restriction |

## Examples

### Example

```graphql
"ROLES_MISMATCH"
```
