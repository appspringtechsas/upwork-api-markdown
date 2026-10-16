---
title: "VendorProposalStatusName"
kind: "enum"
domain: "Proposals"
gql_name: "VendorProposalStatusName"
html_id: "definition-VendorProposalStatusName"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalStatusName"
generated_by: "scripts/convert.mjs"
---


# `VendorProposalStatusName` (enum)

## Description

vendor proposal status name

## Values

| Values | Description |
|---|---|
| ⚠️ `Created` | **⚠️ Deprecated — No longer supported** |
| `Accepted` | Application has been created and fully validated. (i.e. FL has submitted a proposal). |
| `Declined` | Application was declined by the client |
| `Withdrawn` | Application was wihtdrawn by the freelancer |
| ⚠️ `Replaced` | **⚠️ Deprecated — No longer supported** |
| `Offered` | The freelancer has been sent an Offer by the client \| Vendor accepted invite with pending offer |
| `Activated` | Application is created as a result of an invite accepted by freelancer. (i.e messaging has been initiated between FL and CL) |
| `Archived` | When job posting is closed, SystemArchive event is called to Archive all the active applications of that jobposting |
| ⚠️ `Rejected` | **⚠️ Deprecated — No longer supported** |
| `Hired` | Freelancer acceped the offer \| Vendor accepted invite with accepted offer |
| `Pending` | When a new application is created, if there is a temp failure in any validation, the application is set with Pending status. |
| `Invalid` | Application which was in Pending due to temp-validation-failure possibly because of internal errors, when the validation was repeated. SOme validation failed. |

## Examples

### Example

```graphql
"Created"
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalStatusName" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [VendorProposalStatusFilterInput](VendorProposalStatusFilterInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfileSearchUserTypeEnum](FreelancerProfileSearchUserTypeEnum.md) ➡️
