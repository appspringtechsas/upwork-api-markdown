---
title: "OrganizationFlag"
kind: "object"
domain: "Users and teams"
gql_name: "OrganizationFlag"
html_id: "definition-OrganizationFlag"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OrganizationFlag"
generated_by: "scripts/convert.mjs"
---


# `OrganizationFlag` (object)

## Description

Organization category flags

## Fields

| Field | Type | Description |
|---|---|---|
| `client` | [`Boolean`](../scalars/Boolean.md) | Whether organization is a client |
| `vendor` | [`Boolean`](../scalars/Boolean.md) | Whether organization is a vendor |
| `agency` | [`Boolean`](../scalars/Boolean.md) | Whether organization is an agency |
| `individual` | [`Boolean`](../scalars/Boolean.md) | Whether organization is an individual |

## Examples

### Example

```json
{"client": true, "vendor": false, "agency": true, "individual": true}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OrganizationFlag" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MessageAttachments](MessageAttachments.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Page](Page.md) ➡️
