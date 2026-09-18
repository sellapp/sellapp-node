# walletTransactions

[All resources](../methods.md)

## list

List wallet transactions

[API reference](https://sell.app/docs/api/wallet/retrieve-customer-wallet) · Effect: **read**

```typescript
async list(options: WalletTransactionsListOptions): Promise<AutoPaginatable<ListWalletTransactionsResponseValue200ApplicationJsonPropertyDataItem, Omit<WalletTransactionsListOptions, 'customer'>>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `WalletTransactionsListOptions` | Yes |

Returns: `Promise<AutoPaginatable<ListWalletTransactionsResponseValue200ApplicationJsonPropertyDataItem, Omit<WalletTransactionsListOptions, "customer">>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.walletTransactions.list({
  "customer": 42
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

