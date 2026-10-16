---
title: "Application Permissions"
kind: "section"
html_id: "getting-started-application-permissions"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#getting-started-application-permissions"
generated_by: "scripts/convert.mjs"
---


# Application Permissions

When you register a new application, you are asked to define a list of permissions to access third-party resource data; we call them “Application Permissions”. You can later modify the application permissions you request, but note that doing so makes all previously generated access tokens invalid. You will also have to request authorization from resource owners again.

> Take into account that caching shouldn't go against Upwork ToS. Specifically, we don't allow storing data for more than 24 hours.

[See the list of your registered applications (keys)](https://www.upwork.com/developer/keys/)

## What are Scopes

Scopes are collections of permissions to access a specific set of APIs. They are usually grouped by domain and provide more control over sharing your account resources with different roles within your organization.

During the API [key request](preparation.md) process through the [API Center](https://www.upwork.com/developer/keys/), you are required to select the API Key scopes. At that point, your selection defines what APIs can be accessed by that specific API Key.

## Permissions Troubleshooting

When executing API queries, Upwork checks for permissions granted to the API Key in context. If the API Key does not have the required permissions to execute the query, the following message is returned:

> The client or authentication token doesn't have enough oauth2 permissions/scopes to access <list of fields>

Contact the Upwork [support team](https://support.upwork.com) if you need help extending or customizing your API Key Scopes.

> Please note that the scope "Common Entities - Read-Only Access" will be required for all the cases.

## Security

Security is a paramount thing, especially when it comes to accessing sensitive data and resources through APIs. However, static API credentials may cause a security risk if leaked. In order to mitigate this risk, Upwork provides the way for rotating API credentials regularly.

> While creating an API key, you can choose the rotation period. The default one corresponds to 12 months. Any key can be rotated at any time manually.

Contact the Upwork [support team](https://support.upwork.com) if you need help.

## Requests limits

The rate limit of the API is primarily considered on a per-IP basis. We allow 300 requests per minute per IP address. When an application exceeds the rate limit for our API, we return an HTTP 429 “Too Many Requests” response code. — Caching is not allowed for more than 24 hours according to our

Terms of Service

.

To avoid being rate-limited, please use caching in your application. Store API responses in your application if you expect a lot of use. For example, don’t try to call the Upwork API on every page load. Instead, call the API infrequently, and load the response into a local cache. When users hit your website, load the cached version of the results.

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#getting-started-application-permissions" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [keys-management](keys-management.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [authentication](authentication.md) ➡️
