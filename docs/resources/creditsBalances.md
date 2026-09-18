# creditsBalances

[All resources](../methods.md)

## list

List credit balances

[API reference](https://sell.app/docs/api/credits/list-credit-balances) · Effect: **read**

```typescript
async list(options?: CreditsBalancesListOptions): Promise<AutoPaginatable<SdkListCreditBalancesResponseValue200ApplicationJson, PaginationOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreditsBalancesListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<SdkListCreditBalancesResponseValue200ApplicationJson, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.creditsBalances.list({

});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## get

Retrieve a credit balance

[API reference](https://sell.app/docs/api/credits/retrieve-a-credit-balance) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetCreditBalanceResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetCreditBalanceResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.creditsBalances.get({
  "customer": 1,
  "creditProduct": 1
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

