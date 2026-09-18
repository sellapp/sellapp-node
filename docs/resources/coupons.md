# coupons

[All resources](../methods.md)

## list

List all coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```typescript
async list(options?: CouponsListOptions): Promise<AutoPaginatable<ListCouponsResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CouponsListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListCouponsResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.list({

});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## create

Create a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async create(options: CreateOptions): Promise<SdkCreateCouponResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateOptions` | Yes |

Returns: `Promise<SdkCreateCouponResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.create({
  "code": "PLAN10",
  "type": "PERCENTAGE",
  "discount": 10,
  "storeWide": false,
  "products": [123, 456],
  "productVariants": [1001, 1002]
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 201, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## get

Retrieve a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetCouponResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetCouponResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.get({
  "coupon": 1
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## replace

Update a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async replace(options: ReplaceOptions): Promise<SdkReplaceCouponResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOptions` | Yes |

Returns: `Promise<SdkReplaceCouponResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.replace({
  "coupon": 1,
  "storeWide": false,
  "products": [123],
  "productVariants": [1001, 1002]
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## update

Update a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async update(options: UpdateOptions): Promise<SdkUpdateCouponResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateOptions` | Yes |

Returns: `Promise<SdkUpdateCouponResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.update({
  "coupon": 1,
  "storeWide": false,
  "products": [123],
  "productVariants": [1001, 1002]
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## delete

Delete a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async delete(options: DeleteOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `DeleteOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.delete({
  "coupon": 1
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## search

Search coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```typescript
async search(options: SearchOptions): Promise<SdkSearchCouponsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SearchOptions` | Yes |

Returns: `Promise<SdkSearchCouponsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.search({
  "filters": [{"field": "id", "operator": "=", "value": 1}],
  "sort": [{"field": "created_at", "direction": "desc"}]
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## batchCreate

Batch create coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async batchCreate(options: BatchCreateOptions): Promise<SdkBatchCreateCouponsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `BatchCreateOptions` | Yes |

Returns: `Promise<SdkBatchCreateCouponsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.batchCreate({
  "resources": [{"code": "STARTER10", "type": "PERCENTAGE", "discount": 10, "storeWide": false, "products": [123], "productVariants": [1001]}]
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 201, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## batchUpdate

Batch update coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async batchUpdate(options: BatchUpdateOptions): Promise<SdkBatchUpdateCouponsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `BatchUpdateOptions` | Yes |

Returns: `Promise<SdkBatchUpdateCouponsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.batchUpdate({
  "resources": {"1": {"store_wide":false,"products":[123],"product_variants":[1001,1002]}}
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## batchDelete

Batch delete coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async batchDelete(options: BatchDeleteOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `BatchDeleteOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.batchDelete({
  "resources": [1, 2]
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## v2ListCoupons

List all coupons

[API reference](https://sell.app/docs/api/coupons/list-all-coupons) · Effect: **read**

```typescript
async v2ListCoupons(options?: V2ListCouponsOptions): Promise<AutoPaginatable<V2ListCouponsResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2ListCouponsOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<V2ListCouponsResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.v2ListCoupons({

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

## v2CreateCoupon

Create a coupon

[API reference](https://sell.app/docs/api/coupons/create-a-coupon) · Effect: **consequential**

```typescript
async v2CreateCoupon(options: V2CreateCouponOptions): Promise<SdkV2CreateCouponResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2CreateCouponOptions` | Yes |

Returns: `Promise<SdkV2CreateCouponResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.v2CreateCoupon({
  "code": "PLAN10",
  "type": "PERCENTAGE",
  "discount": 10,
  "storeWide": false,
  "products": [123, 456],
  "productVariants": [1001, 1002]
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

Documented HTTP responses: 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## v2SearchCoupons

Search coupons

[API reference](https://sell.app/docs/api/coupons/search-coupons) · Effect: **read**

```typescript
async v2SearchCoupons(options: V2SearchCouponsOptions): Promise<SdkV2SearchCouponsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2SearchCouponsOptions` | Yes |

Returns: `Promise<SdkV2SearchCouponsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.v2SearchCoupons({
  "filters": [{"field": "id", "operator": "=", "value": 1}],
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

## v2GetCoupon

Retrieve a coupon

[API reference](https://sell.app/docs/api/coupons/retrieve-a-coupon) · Effect: **read**

```typescript
async v2GetCoupon(options: V2GetCouponOptions): Promise<SdkV2GetCouponResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2GetCouponOptions` | Yes |

Returns: `Promise<SdkV2GetCouponResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.v2GetCoupon({
  "coupon": 1
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

## v2ReplaceCoupon

Update a coupon

[API reference](https://sell.app/docs/api/coupons/update-a-coupon) · Effect: **consequential**

```typescript
async v2ReplaceCoupon(options: V2ReplaceCouponOptions): Promise<SdkV2ReplaceCouponResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2ReplaceCouponOptions` | Yes |

Returns: `Promise<SdkV2ReplaceCouponResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.v2ReplaceCoupon({
  "coupon": 1,
  "storeWide": false,
  "products": [123],
  "productVariants": [1001, 1002]
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

## v2UpdateCoupon

Update a coupon

[API reference](https://sell.app/docs/api/coupons/update-a-coupon) · Effect: **consequential**

```typescript
async v2UpdateCoupon(options: V2UpdateCouponOptions): Promise<SdkV2UpdateCouponResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2UpdateCouponOptions` | Yes |

Returns: `Promise<SdkV2UpdateCouponResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.v2UpdateCoupon({
  "coupon": 1,
  "storeWide": false,
  "products": [123],
  "productVariants": [1001, 1002]
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

## v2DeleteCoupon

Delete a coupon

[API reference](https://sell.app/docs/api/coupons/delete-a-coupon) · Effect: **consequential**

```typescript
async v2DeleteCoupon(options: V2DeleteCouponOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2DeleteCouponOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.v2DeleteCoupon({
  "coupon": 1
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

## v2BatchCreateCoupons

Batch create coupons

[API reference](https://sell.app/docs/api/coupons/batch-create-coupons) · Effect: **consequential**

```typescript
async v2BatchCreateCoupons(options: V2BatchCreateCouponsOptions): Promise<SdkV2BatchCreateCouponsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2BatchCreateCouponsOptions` | Yes |

Returns: `Promise<SdkV2BatchCreateCouponsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.v2BatchCreateCoupons({
  "resources": [{"code": "STARTER10", "type": "PERCENTAGE", "discount": 10, "storeWide": false, "products": [123], "productVariants": [1001]}]
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

## v2BatchUpdateCoupons

Batch update coupons

[API reference](https://sell.app/docs/api/coupons/batch-update-coupons) · Effect: **consequential**

```typescript
async v2BatchUpdateCoupons(options: V2BatchUpdateCouponsOptions): Promise<SdkV2BatchUpdateCouponsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2BatchUpdateCouponsOptions` | Yes |

Returns: `Promise<SdkV2BatchUpdateCouponsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.v2BatchUpdateCoupons({
  "resources": {"1": {"store_wide":false,"products":[123],"product_variants":[1001,1002]}}
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

## v2BatchDeleteCoupons

Batch delete coupons

[API reference](https://sell.app/docs/api/coupons/batch-delete-coupons) · Effect: **consequential**

```typescript
async v2BatchDeleteCoupons(options: V2BatchDeleteCouponsOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2BatchDeleteCouponsOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.coupons.v2BatchDeleteCoupons({
  "resources": [1, 2]
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

