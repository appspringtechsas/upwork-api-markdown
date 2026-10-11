---
title: "OfferMetadataInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferMetadataInput"
html_id: "definition-OfferMetadataInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferMetadataInput"
generated_by: "scripts/convert.mjs"
---


# `OfferMetadataInput` (input object)

## Description

Offer metadata and source information

## Fields

| Field | Type | Description |
|---|---|---|
| `sourceType` | [`SourceTypeInput!`](../enums/SourceTypeInput.md) | Source type of the offer |
| `sourceId` | [`ID`](../scalars/ID.md) | Following options available: sourceType=JobPosting, sourceId must contain job posting ID sourceType=JobApplication, sourceId must contain application ID and jobPostingId=Job posting id sourceType=Direct, sourceId must be null |
| `occupationId` | [`ID`](../scalars/ID.md) | Required for Direct offer |
| `jobPostingId` | [`ID`](../scalars/ID.md) | Job posting identifier |
| `data` | [`String`](../scalars/String.md) | Additional metadata |
| `checkoutId` | [`ID`](../scalars/ID.md) | Checkout identifier |

## Examples

### Example

```json
{
  "sourceType": "JobPosting",
  "sourceId": "4",
  "occupationId": 4,
  "jobPostingId": 4,
  "data": "xyz789",
  "checkoutId": "4"
}
```
