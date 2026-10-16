---
title: "TalentCloudTaskSection"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentCloudTaskSection"
html_id: "definition-TalentCloudTaskSection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentCloudTaskSection"
generated_by: "scripts/convert.mjs"
---


# `TalentCloudTaskSection` (object)

## Description

Task section containing section details and tasks

## Fields

| Field | Type | Description |
|---|---|---|
| `taskSectionDetails` | [`TalentCloudSection`](TalentCloudSection.md) | Details of the task section |
| `tasks` | [`[TalentCloudTaskOverview]`](TalentCloudTaskOverview.md) | List of tasks in this section |

## Examples

### Example

```json
{
  "taskSectionDetails": TalentCloudSection,
  "tasks": [TalentCloudTaskOverview]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentCloudTaskSection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentCloudTaskOverviewPermission](TalentCloudTaskOverviewPermission.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentCommunityCertificate](TalentCommunityCertificate.md) ➡️
