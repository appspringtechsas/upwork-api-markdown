---
title: "VendorProposalStatusFilterInput"
kind: "enum"
domain: "Proposals"
gql_name: "VendorProposalStatusFilterInput"
html_id: "definition-VendorProposalStatusFilterInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalStatusFilterInput"
generated_by: "scripts/convert.mjs"
---


# `VendorProposalStatusFilterInput` (enum)

## Description

Possible Status filter input for Vendor Proposal Query

## Values

| Values | Description |
|---|---|
| `Accepted` | Application has been created and fully validated |
| `Declined` | Application has been declined by the client |
| `Withdrawn` | Application was withdrawn by the freelancer |
| `Offered` | The freelancer has been sent an Offer, or the Vendor has accepted the invite |
| `Activated` | Application has been created as a result of an invite accepted by a freelancer |
| `Archived` | The system has archived all the active applications when the associated job posting is closed |
| `Hired` | Freelancer accepted the offer, or Vendor accepted the invite with an accepted offer |
| `Pending` | If the application creation failed temporarily |

## Examples

### Example

```graphql
"Accepted"
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalStatusFilterInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [VendorProposalSortAttributeType](VendorProposalSortAttributeType.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [VendorProposalStatusName](VendorProposalStatusName.md) ➡️
