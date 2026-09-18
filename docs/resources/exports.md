# exports

[All resources](../methods.md)

## listExports

List exports

[API reference](https://sell.app/docs/api/exports) · Effect: **read**

```typescript
async listExports(options?: ListExportsOptions): Promise<AutoPaginatable<ListExportsResponseValue200ApplicationJsonPropertyDataItem, ListExportsOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PaginationOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListExportsResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.exports.listExports();
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

## createExport

Create an export

[API reference](https://sell.app/docs/api/exports) · Effect: **consequential**

```typescript
async createExport(options: CreateExportOptions): Promise<SdkCreateExportResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateExportOptions` | Yes |

Returns: `Promise<SdkCreateExportResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.exports.createExport({
  "type": "sales",
  "format": "csv",
  "parameters": {"from": "2026-08-01", "to": "2026-08-31"}
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

## getExport

Retrieve an export

[API reference](https://sell.app/docs/api/exports) · Effect: **read**

```typescript
async getExport(options: GetExportOptions): Promise<SdkGetExportResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetExportOptions` | Yes |

Returns: `Promise<SdkGetExportResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.exports.getExport({
  "export": "01992a65-e064-71ba-b38f-902b7966a6be"
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

## downloadExport

Download an export

[API reference](https://sell.app/docs/api/exports) · Effect: **read**

```typescript
async downloadExport(options: DownloadExportOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `DownloadExportOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.exports.downloadExport({
  "export": "01992a65-e064-71ba-b38f-902b7966a6be",
  "expires": 1788513423,
  "signature": "2c91df645a086ec399153a932b741f809d2b85c69740eaf3612384ebfb913a65"
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

Documented HTTP responses: 302, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

