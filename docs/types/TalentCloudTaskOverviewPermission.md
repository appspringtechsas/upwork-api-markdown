---
title: "TalentCloudTaskOverviewPermission"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentCloudTaskOverviewPermission"
html_id: "definition-TalentCloudTaskOverviewPermission"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentCloudTaskOverviewPermission"
generated_by: "scripts/convert.mjs"
---


# `TalentCloudTaskOverviewPermission` (object)

## Description

Permission mapping for a specific role on a task

## Fields

| Field | Type | Description |
|---|---|---|
| `role` | [`TalentCloudTaskRole`](../enums/TalentCloudTaskRole.md) | The role this permission applies to |
| `permission` | [`TalentCloudTaskPermission`](../enums/TalentCloudTaskPermission.md) | The permission level (NO, VIEW, WRITE) |

## Examples

### Example

```json
{"role": "FREELANCER", "permission": "NO"}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentCloudTaskOverviewPermission" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentCloudTaskOverview](TalentCloudTaskOverview.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentCloudTaskSection](TalentCloudTaskSection.md) ➡️
