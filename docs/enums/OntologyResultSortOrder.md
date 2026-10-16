---
title: "OntologyResultSortOrder"
kind: "enum"
domain: "Ontology"
gql_name: "OntologyResultSortOrder"
html_id: "definition-OntologyResultSortOrder"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyResultSortOrder"
generated_by: "scripts/convert.mjs"
---


# `OntologyResultSortOrder` (enum)

## Description

- alphabet to order results alphabetically by prefLabel
- match-start to order results by index of filter string in prefLabel. I.e. results starting with filter will appear first

## Values

| Values | Description |
|---|---|
| `RANDOM` | Random order |
| `ALPHABET` | Alphabetical by preferred label |
| `MATCH_START` | Order by match position in preferred label (matches at start appear first) |

## Examples

### Example

```graphql
"RANDOM"
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyResultSortOrder" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [OntologyEntityType](OntologyEntityType.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientActiveInvitationStatusFilter](ClientActiveInvitationStatusFilter.md) ➡️
