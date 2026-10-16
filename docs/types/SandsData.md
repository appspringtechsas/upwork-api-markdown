---
title: "SandsData"
kind: "object"
domain: "Other"
gql_name: "SandsData"
html_id: "definition-SandsData"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SandsData"
generated_by: "scripts/convert.mjs"
---


# `SandsData` (object)

## Description

Sands data

## Fields

| Field | Type | Description |
|---|---|---|
| `occupation` | [`SandsOccupation`](SandsOccupation.md) | Primary occupation classification from SANDS taxonomy |
| `occupations` | [`[SandsOccupation]`](SandsOccupation.md) | List of all occupation classifications for this job |
| `ontologySkills` | [`[SandsSkill]`](SandsSkill.md) | List of skills from the SANDS ontology |
| `additionalSkills` | [`[SandsSkill]`](SandsSkill.md) | List of additional skills not in the standard SANDS ontology |

## Examples

### Example

```json
{
  "occupation": SandsOccupation,
  "occupations": [SandsOccupation],
  "ontologySkills": [SandsSkill],
  "additionalSkills": [SandsSkill]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SandsData" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [PubSimilarJob](PubSimilarJob.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [SandsOccupation](SandsOccupation.md) ➡️
