---
title: "TalentCloudTask"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentCloudTask"
html_id: "definition-TalentCloudTask"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentCloudTask"
generated_by: "scripts/convert.mjs"
---


# `TalentCloudTask` (object)

## Description

Talent cloud task overview with sections

## Fields

| Field | Type | Description |
|---|---|---|
| `talentCloud` | [`PrivateTalentCloud`](PrivateTalentCloud.md) | The talent cloud this task belongs to |
| `taskSections` | [`[TalentCloudTaskSection]`](TalentCloudTaskSection.md) | List of task sections |

## Examples

### Example

```json
{
  "talentCloud": PrivateTalentCloud,
  "taskSections": [TalentCloudTaskSection]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentCloudTask" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentCloudSection](TalentCloudSection.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentCloudTaskOverview](TalentCloudTaskOverview.md) ➡️
