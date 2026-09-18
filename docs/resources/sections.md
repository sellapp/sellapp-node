# sections

[All resources](../methods.md)

## list

List all sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```typescript
async list(options?: SectionsListOptions): Promise<AutoPaginatable<ListSectionsResponseValue200ApplicationJsonPropertyDataItem, SectionsListOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SectionsListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListSectionsResponseValue200ApplicationJsonPropertyDataItem, SectionsListOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.list({

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

Create a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async create(options: CreateOptions): Promise<SdkCreateSectionResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateOptions` | Yes |

Returns: `Promise<SdkCreateSectionResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.create({
  "title": "Founder resources",
  "hidden": false
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

Retrieve a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetSectionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetSectionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.get({
  "section": 1
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

Update a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async replace(options: ReplaceOptions): Promise<SdkReplaceSectionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOptions` | Yes |

Returns: `Promise<SdkReplaceSectionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.replace({
  "section": 1,
  "title": "Founder resources",
  "hidden": false
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

Update a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async update(options: UpdateOptions): Promise<SdkUpdateSectionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateOptions` | Yes |

Returns: `Promise<SdkUpdateSectionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.update({
  "section": 1,
  "title": "Founder resources",
  "hidden": false
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

Delete a section

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

const result = await client.sections.delete({
  "section": 1
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

## replaceOrder

Replace section order

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async replaceOrder(options: ReplaceOrderOptions): Promise<SdkReplaceSectionOrderResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOrderOptions` | Yes |

Returns: `Promise<SdkReplaceSectionOrderResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.replaceOrder({
  "resources": [3, 1, 2]
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

## replaceProducts

Replace section products

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async replaceProducts(options: ReplaceProductsOptions): Promise<SdkReplaceSectionProductsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceProductsOptions` | Yes |

Returns: `Promise<SdkReplaceSectionProductsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.replaceProducts({
  "section": 1,
  "resources": [3, 1, 2]
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

## replaceGroups

Replace section groups

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async replaceGroups(options: ReplaceGroupsOptions): Promise<SdkReplaceSectionGroupsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceGroupsOptions` | Yes |

Returns: `Promise<SdkReplaceSectionGroupsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.replaceGroups({
  "section": 1,
  "resources": [3, 1, 2]
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

Search sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```typescript
async search(options: SearchOptions): Promise<SdkSearchSectionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SearchOptions` | Yes |

Returns: `Promise<SdkSearchSectionsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.search({
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

Batch create sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async batchCreate(options: BatchCreateOptions): Promise<SdkBatchCreateSectionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `BatchCreateOptions` | Yes |

Returns: `Promise<SdkBatchCreateSectionsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.batchCreate({
  "resources": [{"title": "Featured", "hidden": false}]
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

Batch update sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async batchUpdate(options: BatchUpdateOptions): Promise<SdkBatchUpdateSectionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `BatchUpdateOptions` | Yes |

Returns: `Promise<SdkBatchUpdateSectionsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.batchUpdate({
  "resources": {"1": {"title":"Featured","hidden":false}}
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

Batch delete sections

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

const result = await client.sections.batchDelete({
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

## v2ListSections

List all sections

[API reference](https://sell.app/docs/api/sections/list-all-sections) · Effect: **read**

```typescript
async v2ListSections(options?: V2ListSectionsOptions): Promise<AutoPaginatable<V2ListSectionsResponseValue200ApplicationJsonPropertyDataItem, V2ListSectionsOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2ListSectionsOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<V2ListSectionsResponseValue200ApplicationJsonPropertyDataItem, V2ListSectionsOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2ListSections({

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

## v2CreateSection

Create a section

[API reference](https://sell.app/docs/api/sections/create-a-section) · Effect: **write**

```typescript
async v2CreateSection(options: V2CreateSectionOptions): Promise<SdkV2CreateSectionResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2CreateSectionOptions` | Yes |

Returns: `Promise<SdkV2CreateSectionResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2CreateSection({
  "title": "Founder resources",
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

Documented HTTP responses: 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## v2SearchSections

Search sections

[API reference](https://sell.app/docs/api/sections/search-sections) · Effect: **read**

```typescript
async v2SearchSections(options: V2SearchSectionsOptions): Promise<SdkV2SearchSectionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2SearchSectionsOptions` | Yes |

Returns: `Promise<SdkV2SearchSectionsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2SearchSections({
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

## v2GetSection

Retrieve a section

[API reference](https://sell.app/docs/api/sections/retrieve-a-section) · Effect: **read**

```typescript
async v2GetSection(options: V2GetSectionOptions): Promise<SdkV2GetSectionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2GetSectionOptions` | Yes |

Returns: `Promise<SdkV2GetSectionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2GetSection({
  "section": 1
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

## v2ReplaceSection

Update a section

[API reference](https://sell.app/docs/api/sections/update-a-section) · Effect: **write**

```typescript
async v2ReplaceSection(options: V2ReplaceSectionOptions): Promise<SdkV2ReplaceSectionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2ReplaceSectionOptions` | Yes |

Returns: `Promise<SdkV2ReplaceSectionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2ReplaceSection({
  "section": 1,
  "title": "Founder resources",
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

## v2UpdateSection

Update a section

[API reference](https://sell.app/docs/api/sections/update-a-section) · Effect: **write**

```typescript
async v2UpdateSection(options: V2UpdateSectionOptions): Promise<SdkV2UpdateSectionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2UpdateSectionOptions` | Yes |

Returns: `Promise<SdkV2UpdateSectionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2UpdateSection({
  "section": 1,
  "title": "Founder resources",
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

## v2DeleteSection

Delete a section

[API reference](https://sell.app/docs/api/sections/delete-a-section) · Effect: **consequential**

```typescript
async v2DeleteSection(options: V2DeleteSectionOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2DeleteSectionOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2DeleteSection({
  "section": 1
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

## v2BatchCreateSections

Batch create sections

[API reference](https://sell.app/docs/api/sections/batch-create-sections) · Effect: **consequential**

```typescript
async v2BatchCreateSections(options: V2BatchCreateSectionsOptions): Promise<SdkV2BatchCreateSectionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2BatchCreateSectionsOptions` | Yes |

Returns: `Promise<SdkV2BatchCreateSectionsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2BatchCreateSections({
  "resources": [{"title": "Featured", "hidden": false}]
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

## v2BatchUpdateSections

Batch update sections

[API reference](https://sell.app/docs/api/sections/batch-update-sections) · Effect: **consequential**

```typescript
async v2BatchUpdateSections(options: V2BatchUpdateSectionsOptions): Promise<SdkV2BatchUpdateSectionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2BatchUpdateSectionsOptions` | Yes |

Returns: `Promise<SdkV2BatchUpdateSectionsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2BatchUpdateSections({
  "resources": {"1": {"title":"Featured","hidden":false}}
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

## v2BatchDeleteSections

Batch delete sections

[API reference](https://sell.app/docs/api/sections/batch-delete-sections) · Effect: **consequential**

```typescript
async v2BatchDeleteSections(options: V2BatchDeleteSectionsOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2BatchDeleteSectionsOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2BatchDeleteSections({
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

## v2ReplaceSectionOrder

Replace section order

[API reference](https://sell.app/docs/api/sections/order-sections) · Effect: **consequential**

```typescript
async v2ReplaceSectionOrder(options: V2ReplaceSectionOrderOptions): Promise<SdkV2ReplaceSectionOrderResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2ReplaceSectionOrderOptions` | Yes |

Returns: `Promise<SdkV2ReplaceSectionOrderResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2ReplaceSectionOrder({
  "resources": [3, 1, 2]
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

## v2ReplaceSectionProducts

Replace section products

[API reference](https://sell.app/docs/api/sections/replace-section-products) · Effect: **consequential**

```typescript
async v2ReplaceSectionProducts(options: V2ReplaceSectionProductsOptions): Promise<SdkV2ReplaceSectionProductsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2ReplaceSectionProductsOptions` | Yes |

Returns: `Promise<SdkV2ReplaceSectionProductsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2ReplaceSectionProducts({
  "section": 1,
  "resources": [3, 1, 2]
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

## v2ReplaceSectionGroups

Replace section groups

[API reference](https://sell.app/docs/api/sections/replace-section-groups) · Effect: **consequential**

```typescript
async v2ReplaceSectionGroups(options: V2ReplaceSectionGroupsOptions): Promise<SdkV2ReplaceSectionGroupsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2ReplaceSectionGroupsOptions` | Yes |

Returns: `Promise<SdkV2ReplaceSectionGroupsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.sections.v2ReplaceSectionGroups({
  "section": 1,
  "resources": [3, 1, 2]
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

