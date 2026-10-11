---
title: "Country"
kind: "object"
domain: "Metadata"
gql_name: "Country"
html_id: "definition-Country"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Country"
generated_by: "scripts/convert.mjs"
---


# `Country` (object)

## Description

Information about a country

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Country identifier |
| `name` | [`String`](../scalars/String.md) | Geographical name of a country |
| `twoLetterAbbreviation` | [`String`](../scalars/String.md) | Official two-letter abbrevation of a country. i.e. iso2Code |
| `threeLetterAbbreviation` | [`String`](../scalars/String.md) | Official three-letter abbreviation of a country, i.e. iso3Code |
| `region` | [`CountryRegion!`](../enums/CountryRegion.md) | Region that country belongs to. Currently only EU is recognized |
| `phoneCode` | [`String`](../scalars/String.md) | International phone code |
| `relatedRegion` | [`Region`](Region.md) | Related geographic region |
| `relatedSubRegion` | [`Region`](Region.md) | Related geographic sub-region |
| `active` | [`Boolean`](../scalars/Boolean.md) | Whether country is active |
| `registrationAllowed` | [`Boolean`](../scalars/Boolean.md) | Whether registration is allowed in this country |

## Examples

### Example

```json
{
  "id": 4,
  "name": "xyz789",
  "twoLetterAbbreviation": "abc123",
  "threeLetterAbbreviation": "xyz789",
  "region": "EU",
  "phoneCode": "abc123",
  "relatedRegion": Region,
  "relatedSubRegion": Region,
  "active": true,
  "registrationAllowed": true
}
```
