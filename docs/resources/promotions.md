# promotions

[All resources](../methods.md)

## list

List promotions

[API reference](https://sell.app/docs/api/promotions/list-promotions) · Effect: **read**

```typescript
async list(options?: PromotionsListOptions): Promise<AutoPaginatable<SdkListPromotionsResponseValue200ApplicationJson, PromotionsListOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PromotionsListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<SdkListPromotionsResponseValue200ApplicationJson, PromotionsListOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.promotions.list({

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

## create

Create a promotion

[API reference](https://sell.app/docs/api/promotions/create-promotion) · Effect: **consequential**

```typescript
async create(options: CreateOptions): Promise<SdkCreatePromotionResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateOptions` | Yes |

Returns: `Promise<SdkCreatePromotionResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.promotions.create({
  "name": "Ship Week",
  "status": "active",
  "startsAt": new Date("2026-08-01T00:00:00Z"),
  "endsAt": new Date("2026-08-08T00:00:00Z"),
  "priority": 1,
  "isStackable": false,
  "maxRedemptions": 500,
  "phases": [{"discountType": "percentage", "discountValue": "20", "endsAt": new Date("2026-08-04T00:00:00Z"), "maxRedemptions": 200, "minimumAmount": "10"}, {"discountType": "fixed", "discountValue": "5", "endsAt": null, "maxRedemptions": null, "minimumAmount": "25"}]
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

## search

Search promotions

[API reference](https://sell.app/docs/api/promotions/search-promotions) · Effect: **read**

```typescript
async search(options: SearchOptions): Promise<SdkSearchPromotionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SearchOptions` | Yes |

Returns: `Promise<SdkSearchPromotionsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.promotions.search({
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

## get

Retrieve a promotion

[API reference](https://sell.app/docs/api/promotions/retrieve-promotion) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetPromotionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetPromotionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.promotions.get({
  "promotion": 1
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

## replace

Update a promotion

[API reference](https://sell.app/docs/api/promotions/update-promotion) · Effect: **consequential**

```typescript
async replace(options: ReplaceOptions): Promise<SdkReplacePromotionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOptions` | Yes |

Returns: `Promise<SdkReplacePromotionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.promotions.replace({
  "promotion": 1,
  "name": "One More Sprint",
  "isStackable": true
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

## update

Update a promotion

[API reference](https://sell.app/docs/api/promotions/update-promotion) · Effect: **consequential**

```typescript
async update(options: UpdateOptions): Promise<SdkUpdatePromotionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateOptions` | Yes |

Returns: `Promise<SdkUpdatePromotionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.promotions.update({
  "promotion": 1,
  "name": "One More Sprint",
  "isStackable": true
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

## delete

Delete a promotion

[API reference](https://sell.app/docs/api/promotions/delete-promotion) · Effect: **consequential**

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

const result = await client.promotions.delete({
  "promotion": 1
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

## restore

Restore a promotion

[API reference](https://sell.app/docs/api/promotions/restore-promotion) · Effect: **consequential**

```typescript
async restore(options: RestoreOptions): Promise<SdkRestorePromotionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `RestoreOptions` | Yes |

Returns: `Promise<SdkRestorePromotionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.promotions.restore({
  "promotion": 1,
  "name": "Ship Week",
  "status": "active",
  "startsAt": new Date("2026-08-01T00:00:00Z"),
  "endsAt": new Date("2026-08-08T00:00:00Z"),
  "priority": 1,
  "isStackable": false,
  "maxRedemptions": 500,
  "phases": [{"discountType": "percentage", "discountValue": "20", "endsAt": new Date("2026-08-04T00:00:00Z"), "maxRedemptions": 200, "minimumAmount": "10"}, {"discountType": "fixed", "discountValue": "5", "endsAt": null, "maxRedemptions": null, "minimumAmount": "25"}]
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

