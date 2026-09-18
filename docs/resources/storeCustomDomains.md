# storeCustomDomains

[All resources](../methods.md)

## list

List custom domains

[API reference](https://sell.app/docs/api/store-settings/list-custom-domains) · Effect: **read**

```typescript
async list(requestOptions: RequestOptions = {}): Promise<SdkListCustomDomainsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `GetOptions` | No |

Returns: `Promise<SdkListCustomDomainsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.storeCustomDomains.list();
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

## connect

Connect a custom domain

[API reference](https://sell.app/docs/api/store-settings/connect-custom-domain) · Effect: **consequential**

```typescript
async connect(options: ConnectOptions): Promise<SdkConnectCustomDomainResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ConnectOptions` | Yes |

Returns: `Promise<SdkConnectCustomDomainResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.storeCustomDomains.connect({
  "domain": "example.com"
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

## get

Retrieve a custom domain

[API reference](https://sell.app/docs/api/store-settings/manage-custom-domain) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetCustomDomainResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetCustomDomainResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.storeCustomDomains.get({
  "customDomain": 1
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

## disconnect

Disconnect a custom domain

[API reference](https://sell.app/docs/api/store-settings/manage-custom-domain) · Effect: **consequential**

```typescript
async disconnect(options: DisconnectOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `DisconnectOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.storeCustomDomains.disconnect({
  "customDomain": 1
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

## refresh

Refresh custom domain status

[API reference](https://sell.app/docs/api/store-settings/refresh-custom-domain) · Effect: **consequential**

```typescript
async refresh(options: RefreshOptions): Promise<SdkRefreshCustomDomainStatusResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `RefreshOptions` | Yes |

Returns: `Promise<SdkRefreshCustomDomainStatusResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.storeCustomDomains.refresh({
  "customDomain": 1
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

