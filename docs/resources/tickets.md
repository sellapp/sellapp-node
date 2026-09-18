# tickets

[All resources](../methods.md)

## list

List all tickets

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```typescript
async list(options?: TicketsListOptions): Promise<AutoPaginatable<ListTicketsResponseValue200ApplicationJsonPropertyDataItem, TicketsListOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `TicketsListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListTicketsResponseValue200ApplicationJsonPropertyDataItem, TicketsListOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.tickets.list({

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

## get

Retrieve specific ticket

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetTicketResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetTicketResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.tickets.get({
  "ticket": 1
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

Search tickets

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```typescript
async search(options: SearchOptions): Promise<SdkSearchTicketsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SearchOptions` | Yes |

Returns: `Promise<SdkSearchTicketsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.tickets.search({
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

## v2ListTickets

List all tickets

[API reference](https://sell.app/docs/api/tickets/list-all-tickets) · Effect: **read**

```typescript
async v2ListTickets(options?: V2ListTicketsOptions): Promise<AutoPaginatable<V2ListTicketsResponseValue200ApplicationJsonPropertyDataItem, V2ListTicketsOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2ListTicketsOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<V2ListTicketsResponseValue200ApplicationJsonPropertyDataItem, V2ListTicketsOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.tickets.v2ListTickets({

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

## v2SearchTickets

Search tickets

[API reference](https://sell.app/docs/api/tickets/search-tickets) · Effect: **read**

```typescript
async v2SearchTickets(options: V2SearchTicketsOptions): Promise<SdkV2SearchTicketsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2SearchTicketsOptions` | Yes |

Returns: `Promise<SdkV2SearchTicketsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.tickets.v2SearchTickets({
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

## v2GetTicket

Retrieve specific ticket

[API reference](https://sell.app/docs/api/tickets/retrieve-specific-ticket) · Effect: **read**

```typescript
async v2GetTicket(options: V2GetTicketOptions): Promise<SdkV2GetTicketResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `V2GetTicketOptions` | Yes |

Returns: `Promise<SdkV2GetTicketResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.tickets.v2GetTicket({
  "ticket": 1
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

Close, reopen, or archive a ticket

[API reference](https://sell.app/docs/api/tickets/retrieve-specific-ticket) · Effect: **consequential**

```typescript
async update(options: UpdateOptions): Promise<SdkUpdateTicketResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateOptions` | Yes |

Returns: `Promise<SdkUpdateTicketResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.tickets.update({
  "ticket": 42,
  "status": "CLOSED",
  "archived": true
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

