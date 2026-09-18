# customerSessions

[All resources](../methods.md)

## createCustomerSession

Create a customer session

[API reference](https://sell.app/docs/api/customer-sessions) · Effect: **consequential**

```typescript
async createCustomerSession(options: CreateCustomerSessionOptions): Promise<SdkCreateCustomerSessionResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateCustomerSessionOptions` | Yes |

Returns: `Promise<SdkCreateCustomerSessionResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.customerSessions.createCustomerSession({
  "externalCustomerId": "crm_maya_314"
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

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## revokeCustomerSession

Revoke a customer session

[API reference](https://sell.app/docs/api/customer-sessions) · Effect: **consequential**

```typescript
async revokeCustomerSession(options: RevokeCustomerSessionOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `RevokeCustomerSessionOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.customerSessions.revokeCustomerSession({
  "session": "session_01K4CUSTOMER"
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

