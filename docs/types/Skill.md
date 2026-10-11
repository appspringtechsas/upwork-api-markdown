---
title: "Skill"
kind: "object"
domain: "Ontology"
gql_name: "Skill"
html_id: "definition-Skill"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Skill"
generated_by: "scripts/convert.mjs"
---


# `Skill` (object)

## Description

Skills can be seen methods, tools, frameworks, processes, etc that can be used in the industry.

Skills are organized into Attribute Groups. Every Skill can be a member of multiple Attribute groups.

Skills are linked to attribute groups through the skos:broader property.

Attribute Groups are defined using the upworkModel:attributeLevel "Attribute Group" property.

Attribute groups are linked to their member attributes through the narrower property.

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) |  |
| `ontologyId` | [`String!`](../scalars/String.md) | ontologyId is a semantic identifier that unqiuely identifies an ontology element Its value doesn't depend on the environment (same for dev, staging, prod) Example: upwork:AdministrationSoftware |
| `type` | [`[OntologyEntityType]!`](../enums/OntologyEntityType.md) |  |
| `entityStatus` | [`OntologyEntityStatus!`](../enums/OntologyEntityStatus.md) | Defines the status of an occupation. Active: Skill is active and available for use Deprecated: Skill has been deprecated Pending: Skill has been created recently and is not yet active |
| `preferredLabel` | [`String!`](../scalars/String.md) | Defines the label of the entity that is displayed across Upwork. It must be a unique value. Example: "Accounting" |
| `createdDateTime` | [`String`](../scalars/String.md) | Defines (when available) the date (timestamp) of creation for the entity. |
| `modifiedDateTime` | [`String`](../scalars/String.md) | Defines (when available) the date (timestamp) of update for the entity. |
| `definition` | [`String`](../scalars/String.md) |  |
| `altLabel` | [`[String]`](../scalars/String.md) | Defines alternative labels for the entity. |
| `narrower` | [`[String]`](../scalars/String.md) | Defines the narrower entity of an attribute group. It only applies to attribute groups and it defines the member entities of each attribute group. When talking about attribute groups, we actually refer to skills which have narrower relationships, but not broader. See them as the parent in a hierarchy Example: "upworkOccupation:wordpresssetupandconfiguration" |
| `narrowerIds` | [`[ID]`](../scalars/ID.md) | Defines the narrower entity of an attribute group. It only applies to attribute groups and it defines the member entities of each attribute group. When talking about attribute groups, we actually refer to skills which have narrower relationships, but not broader. See them as the parent in a hierarchy Example ids: "1024054176003235840" |
| `broader` | [`[String]`](../scalars/String.md) | Defines the broader entity of a skill. The broader entity is the attribute group that the skill belongs to. Skills can have more than one broader entities. Example: "upworkOccupation:webdevelopmentsubcategory" |
| `broaderIds` | [`[ID]`](../scalars/ID.md) | Defines the broader entity of a skill. The broader entity is the attribute group that the skill belongs to. Skills can have more than one broader entities. Example ids: "531770282584862733" |
| `dependsOn` | [`[String]`](../scalars/String.md) | Defines the dependency between an attribute group and an attribute. The domain of this property can only be an attribute group and the range is an attribute. |
| `dependsOnIds` | [`[ID]`](../scalars/ID.md) | Defines the dependency between an attribute group and an attribute. The domain of this property can only be an attribute group and the range is an attribute. |
| `splitInto` | [`[String]`](../scalars/String.md) | Defines the entities that are the result of splitting a Skill. The resulting entities are also Skills and there must be at least two resulting entities. One of the resulting entities will serve as a primary replacement and must be present in the upwork:replacedBy property too. Split entities must also be deprecated. Example "upwork:socialmediamanagement" |
| `splitIntoIds` | [`[ID]`](../scalars/ID.md) | Defines the entities that are the result of splitting a Skill. The resulting entities are also Skills and there must be at least two resulting entities. One of the resulting entities will serve as a primary replacement and must be present in the upwork:replacedBy property too. Split entities must also be deprecated. Example: 1109421460453785600 |
| `mergedInto` | [`String`](../scalars/String.md) | Defines the entity with which the source entity is merged into. The target entity is also a Skill. The target entity must be present in the upwork:replacedBy property. Merged entities must also be deprecated. |
| `mergedIntoId` | [`ID`](../scalars/ID.md) | Defines the entity with which the source entity is merged into. The target entity is also a Skill. The target entity must be present in the upwork:replacedBy property. Merged entities must also be deprecated. |
| `replacedBy` | [`String`](../scalars/String.md) | Defines the replacement of split, merged and deprecated skills. The replacement entity must be a single entity of the same type and level. |
| `replacedById` | [`ID`](../scalars/ID.md) | Defines the replacement of split, merged and deprecated skills. The replacement entity must be a single entity of the same type and level. |
| `scopeNote` | [`String`](../scalars/String.md) | This property defines the description for each skill. |
| `externalLink` | [`[String]`](../scalars/String.md) | Defines a link to an external resource (preferably Wikipedia link). |
| `exactMatch` | [`[String]`](../scalars/String.md) | This property defines the link between skills, indicating a high degree of confidence that the concepts are highly similar. The purpose of this property is to define a link between a new entity and an existing entity Example: "upwork:accounting" |
| `exactMatchIds` | [`[ID]`](../scalars/ID.md) | This property defines the link between skills, indicating a high degree of confidence that the concepts are highly similar. The purpose of this property is to define a link between a new entity and an existing entity Example id: "1024054015462055936" |
| `closeMatch` | [`[String]`](../scalars/String.md) | This property defines the link between skills, indicating a lower degree of confidence than the exactMatch that the concepts are similar. The purpose of this property is to define a link between a new entity and an existing entity (one that has historical data associated with it). In the future this might be also used for Occupation. Example: "upwork:android_game" |
| `closeMatchIds` | [`[ID]`](../scalars/ID.md) | This property defines the link between skills, indicating a lower degree of confidence than the exactMatch that the concepts are similar. The purpose of this property is to define a link between a new entity and an existing entity (one that has historical data associated with it). In the future this might be also used for Occupation. Example: "1024054086635200512" |
| `comment` | [`String`](../scalars/String.md) | Used internally, defines the source of the skill or a description extracted from dbpedia |
| `attributeLevel` | [`[String]`](../scalars/String.md) | Defines attribute groups. Skills that have this property with the value 'Attribute Group' are attribute groups. |
| `allowMultipleClient` | [`Boolean!`](../scalars/Boolean.md) | Defines if attribute group supports multi-selection of its attributes in the job post flow. Presentation attributes present for attribute groups |
| `allowMultipleFreelancer` | [`Boolean!`](../scalars/Boolean.md) | Whether freelancers can select multiple attributes from this group |
| `allowOther` | [`Boolean!`](../scalars/Boolean.md) | Defines if addition of free text answers is allowed |
| `clientQuestion` | [`String`](../scalars/String.md) | Question text shown to clients for this attribute group |
| `clientTip` | [`String`](../scalars/String.md) | Tip text shown to clients for this attribute group |
| `freelancerQuestion` | [`String`](../scalars/String.md) | Question text shown to freelancers for this attribute group |
| `freelancerTip` | [`String`](../scalars/String.md) | Tip text shown to freelancers for this attribute group |
| `advancedClient` | [`Boolean!`](../scalars/Boolean.md) | Defines advanced attribute groups which are being displayed in the bottom of the page. |
| `client` | [`Boolean!`](../scalars/Boolean.md) | Whether this attribute group is visible to clients |
| `freelancer` | [`Boolean!`](../scalars/Boolean.md) | Whether this attribute group is visible to freelancers |
| `requiredClient` | [`Boolean!`](../scalars/Boolean.md) | Defines if attribute group is required or optional for clients. |
| `requiredFreelancer` | [`Boolean!`](../scalars/Boolean.md) | Defines if attribute group is required or optional for freelancers. |
| `otherClientLabel` | [`String`](../scalars/String.md) | Defines the label that is displayed in the 'see more' dialog in job posts. |
| `otherFreelancerLabel` | [`String`](../scalars/String.md) | Defines the label that is displayed in the 'show more' view in profiles. |
| `presentationMode` | [`String`](../scalars/String.md) | Presentation mode for displaying this attribute group |
| `priority` | [`Int`](../scalars/Int.md) | Defines the order in which attributes and attribute groups appear in. |
| `isRequiredBy` | [`[String]`](../scalars/String.md) | This is the inverse property of upworkModel:requires. It links an attribute group with the L3 that requires it. `requires` is linking an L3 to an attribute group and the inverse property links the same attribute group with that L3 through isRequiredBy Example: "upworkOccupation:brandidentitydesign |
| `isRequiredByIds` | [`[ID]`](../scalars/ID.md) | This is the inverse property of upworkModel:requires. It links an attribute group with the L3 that requires it. `requires` is linking an L3 to an attribute group and the inverse property links the same attribute group with that L3 through isRequiredBy Example: "1044578476142100497" |
| `legacySkillNid` | [`String`](../scalars/String.md) | Legacy Skills are skills that existed prior to Ontology Skills. This is the skill name associated with the legacy skills and used to mapping ontology skills with legacy skills and viceversa. |
| `prettyName` | [`String`](../scalars/String.md) | LegacySkillNid value pretty formatted |
| `legacySkillId` | [`ID`](../scalars/ID.md) | The uid identifier of the legacy skill |

## Examples

### Example

```json
{
  "id": "4",
  "ontologyId": "xyz789",
  "type": ["OCCUPATION"],
  "entityStatus": "ACTIVE",
  "preferredLabel": "abc123",
  "createdDateTime": "abc123",
  "modifiedDateTime": "abc123",
  "definition": "xyz789",
  "altLabel": ["abc123"],
  "narrower": ["xyz789"],
  "narrowerIds": ["4"],
  "broader": ["abc123"],
  "broaderIds": ["4"],
  "dependsOn": ["xyz789"],
  "dependsOnIds": ["4"],
  "splitInto": ["xyz789"],
  "splitIntoIds": ["4"],
  "mergedInto": "abc123",
  "mergedIntoId": 4,
  "replacedBy": "xyz789",
  "replacedById": "4",
  "scopeNote": "xyz789",
  "externalLink": ["abc123"],
  "exactMatch": ["abc123"],
  "exactMatchIds": [4],
  "closeMatch": ["xyz789"],
  "closeMatchIds": [4],
  "comment": "xyz789",
  "attributeLevel": ["abc123"],
  "allowMultipleClient": true,
  "allowMultipleFreelancer": false,
  "allowOther": false,
  "clientQuestion": "xyz789",
  "clientTip": "xyz789",
  "freelancerQuestion": "abc123",
  "freelancerTip": "abc123",
  "advancedClient": false,
  "client": true,
  "freelancer": false,
  "requiredClient": false,
  "requiredFreelancer": false,
  "otherClientLabel": "abc123",
  "otherFreelancerLabel": "abc123",
  "presentationMode": "abc123",
  "priority": 123,
  "isRequiredBy": ["abc123"],
  "isRequiredByIds": ["4"],
  "legacySkillNid": "xyz789",
  "prettyName": "xyz789",
  "legacySkillId": 4
}
```
