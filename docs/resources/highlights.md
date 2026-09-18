# highlights

[All resources](../methods.md)

## list

List highlights

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **read**

```typescript
async list(options?: HighlightsListOptions): Promise<AutoPaginatable<SdkListHighlightsResponseValue200ApplicationJson, HighlightsListOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `HighlightsListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<SdkListHighlightsResponseValue200ApplicationJson, HighlightsListOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlights.list({

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

Create a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **write**

```typescript
async create(options: CreateOptions): Promise<SdkCreateHighlightResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateOptions` | Yes |

Returns: `Promise<SdkCreateHighlightResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlights.create({
  "title": "Stealth-mode launch",
  "hidden": false,
  "files": ["/path/to/example.png"]
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

Documented HTTP responses: 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## search

Search highlights

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **read**

```typescript
async search(options: SearchOptions): Promise<SdkSearchHighlightsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SearchOptions` | Yes |

Returns: `Promise<SdkSearchHighlightsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlights.search({
  "filters": [{"field": "id", "operator": "=", "value": 42}],
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

## reorder

Reorder highlights

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **consequential**

```typescript
async reorder(options: ReorderOptions): Promise<SdkReorderHighlightsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReorderOptions` | Yes |

Returns: `Promise<SdkReorderHighlightsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlights.reorder({
  "resources": [42, 41]
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

## get

Retrieve a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetHighlightResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetHighlightResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlights.get({
  "highlight": 42
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

Update a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **write**

```typescript
async replace(options: ReplaceOptions): Promise<SdkReplaceHighlightResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOptions` | Yes |

Returns: `Promise<SdkReplaceHighlightResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlights.replace({
  "highlight": 42,
  "title": "Stealth-mode launch",
  "hidden": false
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

Update a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **write**

```typescript
async update(options: UpdateOptions): Promise<SdkUpdateHighlightResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateOptions` | Yes |

Returns: `Promise<SdkUpdateHighlightResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlights.update({
  "highlight": 42,
  "title": "Stealth-mode launch",
  "hidden": false
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

Delete a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **consequential**

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

const result = await client.highlights.delete({
  "highlight": 42
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

