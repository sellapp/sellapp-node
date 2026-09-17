# events

[All resources](../methods.md)

## listIntegrationEvents

List integration events

[API reference](https://sell.app/docs/api/events) · Effect: **read**

```typescript
async listIntegrationEvents(options?: ListIntegrationEventsOptions): Promise<AutoPaginatable<ListIntegrationEventsResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ListIntegrationEventsOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListIntegrationEventsResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.events.listIntegrationEvents({

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

## listOrderEvents

List order events

[API reference](https://sell.app/docs/api/events) · Effect: **read**

```typescript
async listOrderEvents(options: ListOrderEventsOptions): Promise<AutoPaginatable<ListOrderEventsResponseValue200ApplicationJsonPropertyDataItem, Omit<ListOrderEventsOptions, 'order'>>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ListOrderEventsOptions` | Yes |

Returns: `Promise<AutoPaginatable<ListOrderEventsResponseValue200ApplicationJsonPropertyDataItem, Omit<ListOrderEventsOptions, "order">>>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.events.listOrderEvents({
  "order": 42
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

