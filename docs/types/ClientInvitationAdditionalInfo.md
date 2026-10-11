---
title: "ClientInvitationAdditionalInfo"
kind: "object"
domain: "Proposals"
gql_name: "ClientInvitationAdditionalInfo"
html_id: "definition-ClientInvitationAdditionalInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationAdditionalInfo"
generated_by: "scripts/convert.mjs"
---


# `ClientInvitationAdditionalInfo` (object)

## Fields

| Field | Type | Description |
|---|---|---|
| `suppressEmail` | [`Boolean`](../scalars/Boolean.md) |  |
| `referred` | [`Boolean`](../scalars/Boolean.md) |  |
| `invitedByRecruiter` | [`Boolean`](../scalars/Boolean.md) |  |
| `viewed` | [`Boolean`](../scalars/Boolean.md) | Whether the freelancer has viewed this invitation |

## Examples

### Example

```json
{
  "suppressEmail": false,
  "referred": false,
  "invitedByRecruiter": true,
  "viewed": true
}
```
