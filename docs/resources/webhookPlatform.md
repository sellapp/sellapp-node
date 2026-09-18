# webhookPlatform

[All resources](../methods.md)

## listWebhookEventTypes

List webhook event types

[API reference](https://sell.app/docs/api/events) · Effect: **read**

```typescript
async listWebhookEventTypes(requestOptions: RequestOptions = {}): Promise<SdkListWebhookEventTypesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `GetOptions` | No |

Returns: `Promise<SdkListWebhookEventTypesResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookPlatform.listWebhookEventTypes();
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

## listWebhookDeliveries

List webhook deliveries

[API reference](https://sell.app/docs/api/events) · Effect: **read**

```typescript
async listWebhookDeliveries(options?: ListWebhookDeliveriesOptions): Promise<AutoPaginatable<ListWebhookDeliveriesResponseValue200ApplicationJsonPropertyDataItem, ListWebhookDeliveriesOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PaginationOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListWebhookDeliveriesResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookPlatform.listWebhookDeliveries();
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

## getWebhookDelivery

Retrieve a webhook delivery

[API reference](https://sell.app/docs/api/events) · Effect: **read**

```typescript
async getWebhookDelivery(options: GetWebhookDeliveryOptions): Promise<SdkGetWebhookDeliveryResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetWebhookDeliveryOptions` | Yes |

Returns: `Promise<SdkGetWebhookDeliveryResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookPlatform.getWebhookDelivery({
  "delivery": "01992b31-c8bd-75b5-b02d-6ae0aa418940"
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

## replayWebhookDelivery

Replay a webhook delivery

[API reference](https://sell.app/docs/api/events) · Effect: **consequential**

```typescript
async replayWebhookDelivery(options: ReplayWebhookDeliveryOptions): Promise<SdkReplayWebhookDeliveryResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplayWebhookDeliveryOptions` | Yes |

Returns: `Promise<SdkReplayWebhookDeliveryResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookPlatform.replayWebhookDelivery({
  "delivery": "delivery_01K4CUSTOMER",
  requestOptions: { headers: { "Idempotency-Key": "example-mutation-001" } }
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

