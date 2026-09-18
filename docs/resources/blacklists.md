# blacklists

[All resources](../methods.md)

## list

List all blacklist rules

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```typescript
async list(options?: BlacklistsListOptions): Promise<AutoPaginatable<Blacklist, BlacklistsListOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `BlacklistsListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<Blacklist, BlacklistsListOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.blacklists.list({

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

Create a blacklist rule

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async create(options: CreateOptions): Promise<BlacklistResponse>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateOptions` | Yes |

Returns: `Promise<BlacklistResponse>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.blacklists.create({
  "type": "ASN",
  "data": "@blocked.example",
  "description": "Retired after the growth experiment ended."
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

Retrieve a blacklist rule

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<BlacklistResponse>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<BlacklistResponse>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.blacklists.get({
  "blacklist": 1
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

Update a blacklist rule

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```typescript
async update(options: UpdateOptions): Promise<BlacklistResponse>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateOptions` | Yes |

Returns: `Promise<BlacklistResponse>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.blacklists.update({
  "blacklist": 1
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

Delete a blacklist rule

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

const result = await client.blacklists.delete({
  "blacklist": 1
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

## v2ListBlacklists

List blacklist rules

[API reference](https://sell.app/docs/api/blacklists/list-blacklists) · Effect: **read**

```typescript
async v2ListBlacklists(options?: V2ListBlacklistsOptions): Promise<AutoPaginatable<Blacklist, V2ListBlacklistsOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PaginationOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<Blacklist, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.blacklists.v2ListBlacklists();
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

## v2CreateBlacklist

Create a blacklist rule

[API reference](https://sell.app/docs/api/blacklists/create-blacklist) · Effect: **consequential**

```typescript
async v2CreateBlacklist(options: V2CreateBlacklistOptions): Promise<BlacklistResponse>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2CreateBlacklistOptions` | Yes |

Returns: `Promise<BlacklistResponse>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.blacklists.v2CreateBlacklist({
  "type": "EMAIL",
  "data": "blocked@example.com",
  "description": "Blocked after a verified fraud report."
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

## v2GetBlacklist

Retrieve a blacklist rule

[API reference](https://sell.app/docs/api/blacklists/retrieve-blacklist) · Effect: **read**

```typescript
async v2GetBlacklist(options: V2GetBlacklistOptions): Promise<BlacklistResponse>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2GetBlacklistOptions` | Yes |

Returns: `Promise<BlacklistResponse>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.blacklists.v2GetBlacklist({
  "blacklist": 42
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

## v2ReplaceBlacklist

Replace a blacklist rule

[API reference](https://sell.app/docs/api/blacklists) · Effect: **consequential**

```typescript
async v2ReplaceBlacklist(options: V2ReplaceBlacklistOptions): Promise<BlacklistResponse>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2ReplaceBlacklistOptions` | Yes |

Returns: `Promise<BlacklistResponse>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.blacklists.v2ReplaceBlacklist({
  "blacklist": 42,
  "description": "Blocked after a verified fraud report."
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

## v2UpdateBlacklist

Update a blacklist rule

[API reference](https://sell.app/docs/api/blacklists/update-blacklist) · Effect: **consequential**

```typescript
async v2UpdateBlacklist(options: V2UpdateBlacklistOptions): Promise<BlacklistResponse>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2UpdateBlacklistOptions` | Yes |

Returns: `Promise<BlacklistResponse>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.blacklists.v2UpdateBlacklist({
  "blacklist": 42,
  "description": "Blocked after a verified fraud report."
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

## v2DeleteBlacklist

Delete a blacklist rule

[API reference](https://sell.app/docs/api/blacklists/delete-blacklist) · Effect: **consequential**

```typescript
async v2DeleteBlacklist(options: V2DeleteBlacklistOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2DeleteBlacklistOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.blacklists.v2DeleteBlacklist({
  "blacklist": 42
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

