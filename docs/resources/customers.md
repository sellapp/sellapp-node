# customers

[All resources](../methods.md)

## list

List customers

[API reference](https://sell.app/docs/api/customers/list-customers) · Effect: **read**

```typescript
async list(options?: CustomersListOptions): Promise<AutoPaginatable<SdkListCustomersResponseValue200ApplicationJson, CustomersListOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CustomersListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<SdkListCustomersResponseValue200ApplicationJson, CustomersListOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.customers.list({

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

## createCustomer

Create a customer

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **consequential**

```typescript
async createCustomer(options: CreateCustomerOptions): Promise<SdkCreateCustomerResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateCustomerOptions` | Yes |

Returns: `Promise<SdkCreateCustomerResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.customers.createCustomer({
  "externalId": "crm_maya_314",
  "email": "maya.chen@example.com",
  "name": "Maya Chen",
  "locale": "en-GB",
  "metadata": {"plan": "standard", "seats": 3}
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

## search

Search customers

[API reference](https://sell.app/docs/api/customers/search-customers) · Effect: **read**

```typescript
async search(options: SearchOptions): Promise<SdkSearchCustomersResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SearchOptions` | Yes |

Returns: `Promise<SdkSearchCustomersResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.customers.search({
  "filters": [{"field": "id", "operator": "=", "value": 125}],
  "sort": [{"field": "created_at", "direction": "desc"}]
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

Retrieve a customer

[API reference](https://sell.app/docs/api/customers/retrieve-customer) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetCustomerResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetCustomerResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.customers.get({
  "customer": 125
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

## updateCustomer

Update a customer

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **consequential**

```typescript
async updateCustomer(options: UpdateCustomerOptions): Promise<SdkUpdateCustomerResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateCustomerOptions` | Yes |

Returns: `Promise<SdkUpdateCustomerResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.customers.updateCustomer({
  "customer": 314,
  "locale": "en-US"
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

## getCustomerByExternalId

Retrieve a customer by external ID

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **read**

```typescript
async getCustomerByExternalId(options: GetCustomerByExternalIdOptions): Promise<SdkGetCustomerResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetCustomerByExternalIdOptions` | Yes |

Returns: `Promise<SdkGetCustomerResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.customers.getCustomerByExternalId({
  "externalId": "314"
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

## upsertByExternalId

Create or update a customer by external ID

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **consequential**

```typescript
async upsertByExternalId(options: UpsertByExternalIdOptions): Promise<SdkUpsertCustomerResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpsertByExternalIdOptions` | Yes |

Returns: `Promise<SdkUpsertCustomerResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.customers.upsertByExternalId({
  "externalId": "crm_maya_314",
  "email": "maya.chen@example.com",
  "name": "Maya Chen"
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

Documented HTTP responses: 200, 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## updateCustomerByExternalId

Update a customer by external ID

[API reference](https://sell.app/docs/api/customers/identity-and-entitlements) · Effect: **consequential**

```typescript
async updateCustomerByExternalId(options: UpdateCustomerByExternalIdOptions): Promise<SdkUpdateCustomerResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateCustomerByExternalIdOptions` | Yes |

Returns: `Promise<SdkUpdateCustomerResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.customers.updateCustomerByExternalId({
  "externalId": "314",
  "locale": "en-US"
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

