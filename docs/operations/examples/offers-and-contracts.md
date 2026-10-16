---
title: "Offers and Contracts"
kind: "section"
html_id: "examples-offers-and-contracts"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#examples-offers-and-contracts"
generated_by: "scripts/convert.mjs"
---


# Offers and Contracts

This is a sample flow for listing and viewing freelancer offers and contracts using the GraphQL API.

**Workflow: Working with Offers and Contracts Sample Flow**
1. **List user's offers** — call [`user`](../../queries/user.md) (query, uses example variant `offer`): List offers for a freelancer
2. **Create offer** — call [`createOffer`](../../mutations/createOffer.md) (mutation): Create an offer as a freelancer.
3. **List client offers** — call [`organization`](../../queries/organization.md) (query, uses example variant `listClientOffers`): List offers posted by your organization.
4. **View client's offer details** — call [`offer`](../../queries/offer.md) (query): View details of a client's offer.

View an active contract and close it when work is complete.

**Workflow: Working with Contracts Sample Flow**
1. **List client contracts** — call [`organization`](../../queries/organization.md) (query, uses example variant `listClientContracts`): List contracts for your organization.
2. **View contract details** — call [`contractDetails`](../../queries/contractDetails.md) (query): Fetch contract terms, status, and related offer information.
3. **Update contract hourly limit** — call [`updateContractHourlyLimit`](../../mutations/updateContractHourlyLimit.md) (mutation): Update the hourly limit for a contract.
4. **Close contract** — call [`endContractByClient`](../../mutations/endContractByClient.md) (mutation): End a contract as the client with a reason reference.

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#examples-offers-and-contracts" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [messaging](messaging.md)   ·   [📚 Docs index](../../README.md)   ·   **Next:** [milestones](milestones.md) ➡️
