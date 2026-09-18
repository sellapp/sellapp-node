# bundleItems

[All resources](../methods.md)

## get

Retrieve a bundle item

[API reference](https://sell.app/docs/api/products) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetBundleItemResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetBundleItemResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.bundleItems.get({
  "bundle": 1,
  "item": 2
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

## list

List bundle items

[API reference](https://sell.app/docs/api/products) · Effect: **read**

```typescript
async list(options: BundleItemsListOptions): Promise<AutoPaginatable<ListBundleItemsResponseValue200ApplicationJsonPropertyDataItem, Omit<BundleItemsListOptions, 'bundle'>>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `BundleItemsListOptions` | Yes |

Returns: `Promise<AutoPaginatable<ListBundleItemsResponseValue200ApplicationJsonPropertyDataItem, Omit<BundleItemsListOptions, "bundle">>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.bundleItems.list({
  "bundle": 1
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

## attach

Attach bundle items

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```typescript
async attach(options: AttachOptions): Promise<SdkAttachBundleItemsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `AttachOptions` | Yes |

Returns: `Promise<SdkAddProductsToGroupResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.bundleItems.attach({
  "bundle": 1,
  "resources": {"1": {"quantity":1}}
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

## detach

Detach bundle items

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```typescript
async detach(options: DetachOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `DetachOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.bundleItems.detach({
  "bundle": 1,
  "resources": [1]
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

