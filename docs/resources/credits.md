# credits

[All resources](../methods.md)

## record

Record a credit transaction

[API reference](https://sell.app/docs/api/credits/record-a-credit-transaction) · Effect: **consequential**

```typescript
async record(options: RecordOptions): Promise<SdkRecordCreditTransactionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `RecordOptions` | Yes |

Returns: `Promise<SdkRecordCreditTransactionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.credits.record({
  "customerId": 125,
  "productId": 120,
  "kind": "grant",
  "amountUnits": 1000,
  "idempotencyKey": "credits-grant-01992a65",
  "reason": "Launch cohort allocation"
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

Documented HTTP responses: 200, 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

