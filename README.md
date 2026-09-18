# SellApp for Node.js and TypeScript

Give your app a connection to your SellApp store. Read products, work with orders,
or build a checkout using JavaScript or TypeScript. The SDK is a library that turns
method calls into API requests and gives you typed results to work with.

Let's start by asking your store for one product. No checkout to build, no order to
place: just a small request, a product title, and proof that everything is connected.
Already know your way around? Jump to [configuration](https://github.com/sellapp/sellapp-node/blob/main/docs/usage.md#client-configuration) or the
[method index](https://github.com/sellapp/sellapp-node/blob/main/docs/methods.md).

## Installation

Install the SDK in your server-side application:

```sh
npm install @sell.app/sdk
```

Use Node.js **20 or newer**. The package supports ES module imports and
CommonJS `require()`; both include TypeScript declarations. Prefer a currently
supported Node.js release for your application.

```javascript
// CommonJS applications:
const { SellApp } = require('@sell.app/sdk');
```

To build from [source](https://github.com/sellapp/sellapp-node), use
Node.js 24.19.0, run `npm install && npm run build && npm pack` in the checkout,
then install the resulting `sell.app-sdk-0.1.0.tgz` in your app.

## Your first request

The SDK needs two things: an API key to identify your account, and a store slug
to choose the store. For `launch-lab.sell.app`, the slug is `launch-lab`.
Give the key the `listing` ability: permission to read the catalog. The
[authentication guide](https://sell.app/docs/api/authentication) covers key setup
and access rules. This is a server-side library; keep the secret key out of browser code.

Set these environment variables in a Bash-compatible terminal, replacing the key and store.
They're settings your program can read without putting secrets in its source files:

```sh
export SELLAPP_API_KEY='replace-with-your-key'
export SELLAPP_STORE='launch-lab'
export SELLAPP_API_BASE_URL='https://sell.app/api'
```

This address connects to your real store; our first request only reads it.
The SDK sends the key as a bearer token and the slug in `X-STORE`. It reads
`SELLAPP_STORE`.
`SELLAPP_API_BASE_URL` is an example variable passed explicitly to the client;
it is not a built-in SDK environment setting.

Save this complete example as `first-request.mjs` and run `node first-request.mjs`
in your installed application. The same source is in [examples](https://github.com/sellapp/sellapp-node/blob/main/examples/README.md).

```javascript
import { SellApp } from '@sell.app/sdk';

// Explicit endpoint selection keeps examples from accidentally calling a live store.
const baseUrl = process.env.SELLAPP_API_BASE_URL;
if (!baseUrl) throw new Error('Set SELLAPP_API_BASE_URL before running this example');
const client = new SellApp({ baseUrl }); // Reads SELLAPP_API_KEY and SELLAPP_STORE.

const page = await client.products.list({ limit: 1 });
for (const product of page.data) {
  console.log(product.id, product.title);
}
if (page.data.length === 0) console.log('No products yet. The request worked!');
```

A successful call returns a page: one batch of results, with the products inside
`data`. Here, `limit: 1` asks for at most one product. The script prints its ID
and title. No products yet? The success message still confirms you're connected.
Domain fields use camelCase, such as `createdAt`; date-time fields become `Date` objects.

## Account access and first-store setup

Create a user-owned key in [API keys](https://sell.app/user/api-tokens), even
before you have a store. Enable `account:read` for identity, store discovery and
permission inspection, and `stores:create` separately for store creation.
Identity, discovery, store detail by ID and creation omit `X-STORE`; permission
inspection and business requests select a store explicitly.

An unrestricted key covers current and future accessible stores. A selected-store
key covers only its fixed list; an empty list covers none. Membership and role
changes still apply. Selected-store keys cannot create stores. Existing keys do
not gain abilities automatically; `*` satisfies the new abilities while retaining
membership, role and restriction checks.

The [account guide](https://sell.app/docs/api/authentication#discover-your-account-before-selecting-a-store)
shows first-store creation, required idempotency keys, and bounded reads across
several stores with partial failures. Creation returns an ID and slug; use the
slug for subsequent product requests. Find your language's methods in the
[resource reference](https://github.com/sellapp/sellapp-node/blob/main/docs/methods.md). CLI and MCP connections retain browser OAuth.

## If the request fails

| Result | Next step |
| --- | --- |
| Empty product list | The read succeeded. Create a product when you are ready. |
| 401 | Check the selected credential and whether it has expired or been revoked. |
| 403 | Check the key's listing ability, selected-store restrictions and the account's current store permissions. Official CLI OAuth also requires its active grant. |
| 400 with a missing-store message | Set SELLAPP_STORE to an authorized store slug. |
| 429 | Follow Retry-After and the SDK's documented retry behavior. |

Keep the request ID when reporting an API failure. Never include credentials.

## Three useful next actions

1. [Create and edit a product](https://github.com/sellapp/sellapp-node/blob/main/docs/resources/products.md): exact signatures and complete examples.
2. [Read orders or create a checkout](https://github.com/sellapp/sellapp-node/blob/main/docs/resources/orders.md): inspect permissions and effects before changing a purchase.
3. [Read more than one page](https://github.com/sellapp/sellapp-node/blob/main/docs/usage.md): pagination, request controls, errors, and retry behavior.

## Reference and examples

- [Resource reference](https://github.com/sellapp/sellapp-node/blob/main/docs/methods.md)
- [Runnable examples](https://github.com/sellapp/sellapp-node/blob/main/examples/README.md)
- [API documentation](https://sell.app/docs/api)

## Support and releases

This source candidate is not a verified registry release. Use the source installation above.
[Report an SDK issue](https://github.com/sellapp/sellapp-node/issues) if you have repository access.
Include the SDK version, runtime version, and a redacted reproduction.
Licensed under [MIT](https://github.com/sellapp/sellapp-node/blob/main/LICENSE.txt); see [third-party notices](https://github.com/sellapp/sellapp-node/blob/main/NOTICE.txt).
