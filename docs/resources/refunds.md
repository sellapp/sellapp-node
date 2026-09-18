# refunds

[All resources](../methods.md)

## listRefunds

List refunds

[API reference](https://sell.app/docs/api/refunds) · Effect: **read**

```typescript
async listRefunds(options?: ListRefundsOptions): Promise<AutoPaginatable<ListRefundsResponseValue200ApplicationJsonPropertyDataItem, ListRefundsOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PaginationOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListRefundsResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.refunds.listRefunds();
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getRefund

Retrieve a refund

[API reference](https://sell.app/docs/api/refunds) · Effect: **read**

```typescript
async getRefund(options: GetRefundOptions): Promise<SdkGetRefundResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetRefundOptions` | Yes |

Returns: `Promise<SdkGetRefundResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.refunds.getRefund({
  "refund": 781
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

