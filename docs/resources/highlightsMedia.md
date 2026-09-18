# highlightsMedia

[All resources](../methods.md)

## list

List highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **read**

```typescript
async list(options: HighlightsMediaListOptions): Promise<SdkListHighlightMediaResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `HighlightsMediaListOptions` | Yes |

Returns: `Promise<SdkListHighlightMediaResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlightsMedia.list({
  "highlight": 1
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

## add

Add highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```typescript
async add(options: AddOptions): Promise<SdkAddHighlightMediaResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `AddOptions` | Yes |

Returns: `Promise<SdkAddHighlightMediaResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlightsMedia.add({
  "highlight": 1,
  "file": "/path/to/example.png",
  "ctaTitle": "View product",
  "productId": 123
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

## reorder

Reorder highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **consequential**

```typescript
async reorder(options: ReorderOptions): Promise<SdkReorderHighlightMediaResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReorderOptions` | Yes |

Returns: `Promise<SdkReorderHighlightMediaResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlightsMedia.reorder({
  "highlight": 1,
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

## replace

Replace highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```typescript
async replace(options: ReplaceOptions): Promise<SdkReplaceHighlightMediaResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOptions` | Yes |

Returns: `Promise<SdkReplaceHighlightMediaResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlightsMedia.replace({
  "highlight": 1,
  "media": 84,
  "file": "/path/to/example.png",
  "ctaTitle": "View product",
  "productId": 123
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

## replaceMetadata

Update highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```typescript
async replaceMetadata(options: ReplaceMetadataOptions): Promise<SdkReplaceHighlightMediaMetadataResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceMetadataOptions` | Yes |

Returns: `Promise<SdkReplaceHighlightMediaMetadataResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlightsMedia.replaceMetadata({
  "highlight": 1,
  "media": 84,
  "ctaTitle": "View product",
  "productId": 123
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

Update highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```typescript
async update(options: UpdateOptions): Promise<SdkUpdateHighlightMediaResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateOptions` | Yes |

Returns: `Promise<SdkUpdateHighlightMediaResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.highlightsMedia.update({
  "highlight": 1,
  "media": 84,
  "ctaTitle": "View product",
  "productId": 123
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

Delete highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **consequential**

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

const result = await client.highlightsMedia.delete({
  "highlight": 1,
  "media": 84
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

