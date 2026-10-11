---
title: "TnsRuleStructureInput"
kind: "input_object"
domain: "Other"
gql_name: "TnsRuleStructureInput"
html_id: "definition-TnsRuleStructureInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TnsRuleStructureInput"
generated_by: "scripts/convert.mjs"
---


# `TnsRuleStructureInput` (input object)

## Description

Input for rule structure - polymorphic type representing either a leaf node or group node Type field determines which fields are used

## Fields

| Field | Type | Description |
|---|---|---|
| `type` | [`String!`](../scalars/String.md) | Type of node: 'rule' for leaf or 'group' for group node |
| `attributeType` | [`Int`](../scalars/Int.md) | For leaf nodes: attribute type code (1-9). Optional, must be provided for attribute-type based rules, not needed for checkpoint-based rules |
| `leftDataPointId` | [`ID`](../scalars/ID.md) | For leaf nodes: data point ID to evaluate rule on (left operand). Optional, must be provided for checkpoint-type based rules, not needed for attribute-based rules |
| `rightDataPointId` | [`ID`](../scalars/ID.md) | For leaf nodes: data point ID to evaluate rule on (right operand). Optional, could be provided for checkpoint-type based rules, not needed for attribute-based rules |
| `ruleOperator` | [`Int`](../scalars/Int.md) | For leaf nodes: rule operator code (1=CONTAINS, 2=EQUALS, 3=STARTS_WITH, 4=ENDS_WITH, 5=MATCHES_REGEX, 6=NOT_CONTAINS, 7=NOT_EQUALS) |
| `value` | [`String`](../scalars/String.md) | For leaf nodes: value to compare against |
| `mergingOperator` | [`Int`](../scalars/Int.md) | For group nodes: merging operator code (1=AND, 2=OR) |
| `children` | [`[TnsRuleStructureInput!]`](TnsRuleStructureInput.md) | For group nodes: child rules |

## Examples

### Example

```json
{
  "type": "xyz789",
  "attributeType": 987,
  "leftDataPointId": 4,
  "rightDataPointId": "4",
  "ruleOperator": 987,
  "value": "abc123",
  "mergingOperator": 123,
  "children": [TnsRuleStructureInput]
}
```
