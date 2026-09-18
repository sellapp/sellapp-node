# addOns

[All resources](../methods.md)

## list

List add-ons

[API reference](https://sell.app/docs/api/add-ons/list-add-ons) · Effect: **read**

```typescript
async list(options?: AddOnsListOptions): Promise<AutoPaginatable<SdkListAddOnsResponseValue200ApplicationJson, PaginationOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `AddOnsListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<SdkListAddOnsResponseValue200ApplicationJson, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.addOns.list({

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

Create an add-on draft

[API reference](https://sell.app/docs/api/add-ons/create-an-add-on-draft) · Effect: **consequential**

```typescript
async create(options: CreateOptions): Promise<SdkCreateAddOnDraftResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateOptions` | Yes |

Returns: `Promise<SdkCreateAddOnDraftResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.addOns.create({
  "title": "Customer support",
  "description": "Priority support for launches scheduled suspiciously close to Friday.",
  "visibility": "PUBLIC",
  "parentProductIds": [120, 121]
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

Search add-ons

[API reference](https://sell.app/docs/api/add-ons/search-add-ons) · Effect: **read**

```typescript
async search(options: SearchOptions): Promise<SdkSearchAddOnsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SearchOptions` | Yes |

Returns: `Promise<SdkSearchAddOnsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.addOns.search({
  "filters": [{"field": "id", "operator": "=", "value": 410}],
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

Retrieve an add-on

[API reference](https://sell.app/docs/api/add-ons/retrieve-an-add-on) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetAddOnResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetAddOnResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.addOns.get({
  "addon": 410
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

Update an add-on

[API reference](https://sell.app/docs/api/add-ons/replace-an-add-on) · Effect: **consequential**

```typescript
async replace(options: ReplaceOptions): Promise<SdkReplaceAddOnResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOptions` | Yes |

Returns: `Promise<SdkReplaceAddOnResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.addOns.replace({
  "addon": 410,
  "description": "Priority email, chat, and launch-day reassurance.",
  "isDraft": false
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

Update an add-on

[API reference](https://sell.app/docs/api/add-ons/update-an-add-on) · Effect: **consequential**

```typescript
async update(options: UpdateOptions): Promise<SdkUpdateAddOnResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateOptions` | Yes |

Returns: `Promise<SdkUpdateAddOnResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.addOns.update({
  "addon": 410,
  "description": "Priority email, chat, and launch-day reassurance.",
  "isDraft": false
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

Delete an add-on

[API reference](https://sell.app/docs/api/add-ons/delete-an-add-on) · Effect: **consequential**

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

const result = await client.addOns.delete({
  "addon": 410
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

