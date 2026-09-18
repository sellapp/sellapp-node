# disputes

[All resources](../methods.md)

## listDisputes

List disputes

[API reference](https://sell.app/docs/api/disputes) · Effect: **read**

```typescript
async listDisputes(options?: ListDisputesOptions): Promise<AutoPaginatable<ListDisputesResponseValue200ApplicationJsonPropertyDataItem, ListDisputesOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PaginationOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListDisputesResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.disputes.listDisputes();
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

## getDispute

Retrieve a dispute

[API reference](https://sell.app/docs/api/disputes) · Effect: **read**

```typescript
async getDispute(options: GetDisputeOptions): Promise<SdkGetDisputeResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetDisputeOptions` | Yes |

Returns: `Promise<SdkGetDisputeResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.disputes.getDispute({
  "dispute": "01992b10-a7d2-7b91-9822-32e8d7454e7c"
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

