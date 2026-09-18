# creditsBalancesTransactions

[All resources](../methods.md)

## list

List credit balance transactions

[API reference](https://sell.app/docs/api/credits/retrieve-a-credit-balance) · Effect: **read**

```typescript
async list(options: CreditsBalancesTransactionsListOptions): Promise<AutoPaginatable<ListCreditBalanceTransactionsResponseValue200ApplicationJsonPropertyDataItem, Omit<CreditsBalancesTransactionsListOptions, 'customer' | 'creditProduct'>>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreditsBalancesTransactionsListOptions` | Yes |

Returns: `Promise<AutoPaginatable<ListCreditBalanceTransactionsResponseValue200ApplicationJsonPropertyDataItem, Omit<CreditsBalancesTransactionsListOptions, "customer" | "creditProduct">>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.creditsBalancesTransactions.list({
  "customer": 42,
  "creditProduct": 42
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

