# webhookChannels

[All resources](../methods.md)

## list

List webhook channels

[API reference](https://sell.app/docs/api/webhook-channels/list-webhook-channels) · Effect: **read**

```typescript
async list(options?: WebhookChannelsListOptions): Promise<AutoPaginatable<ListWebhookChannelsResponseValue200ApplicationJsonPropertyDataItem, WebhookChannelsListOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `WebhookChannelsListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListWebhookChannelsResponseValue200ApplicationJsonPropertyDataItem, WebhookChannelsListOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookChannels.list({

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

Create a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/create-a-webhook-channel) · Effect: **consequential**

```typescript
async create(options: CreateOptions): Promise<SdkCreateWebhookChannelResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateOptions` | Yes |

Returns: `Promise<SdkCreateWebhookChannelResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookChannels.create({
  "name": "Ship It webhook",
  "url": "https://example.com/webhooks/ship-it",
  "allowedNotifications": ["order.created", "order.paid"]
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

Search webhook channels

[API reference](https://sell.app/docs/api/webhook-channels/search-webhook-channels) · Effect: **read**

```typescript
async search(options: SearchOptions): Promise<SdkSearchWebhookChannelsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SearchOptions` | Yes |

Returns: `Promise<SdkSearchWebhookChannelsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookChannels.search({
  "search": {"value": "orders"},
  "event": "order.paid"
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

## rotate

Rotate the webhook signing secret

[API reference](https://sell.app/docs/api/webhook-channels/rotate-the-signing-secret) · Effect: **consequential**

```typescript
async rotate(options: RotateOptions): Promise<SdkRotateWebhookSigningSecretResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `RotateOptions` | Yes |

Returns: `Promise<SdkRotateWebhookSigningSecretResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookChannels.rotate({
  "signingSecret": "replace-with-a-random-secret-at-least-32-characters-long"
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

Retrieve a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/retrieve-a-webhook-channel) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetWebhookChannelResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetWebhookChannelResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookChannels.get({
  "webhookChannel": "0f33d01f-f9f8-45e8-80c8-7734d057196d"
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

Replace a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/replace-a-webhook-channel) · Effect: **consequential**

```typescript
async replace(options: ReplaceOptions): Promise<SdkReplaceWebhookChannelResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOptions` | Yes |

Returns: `Promise<SdkReplaceWebhookChannelResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookChannels.replace({
  "webhookChannel": "0f33d01f-f9f8-45e8-80c8-7734d057196d",
  "name": "Primary Ship It webhook",
  "url": "https://example.com/webhooks/ship-it",
  "allowedNotifications": ["order.paid"]
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

Update a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/update-a-webhook-channel) · Effect: **consequential**

```typescript
async update(options: UpdateOptions): Promise<SdkUpdateWebhookChannelResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateOptions` | Yes |

Returns: `Promise<SdkUpdateWebhookChannelResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookChannels.update({
  "webhookChannel": "0f33d01f-f9f8-45e8-80c8-7734d057196d",
  "name": "Primary Ship It webhook",
  "allowedNotifications": ["order.paid"]
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

Delete a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/delete-a-webhook-channel) · Effect: **consequential**

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

const result = await client.webhookChannels.delete({
  "webhookChannel": "0f33d01f-f9f8-45e8-80c8-7734d057196d"
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

## send

Send a test webhook

[API reference](https://sell.app/docs/api/webhook-channels/send-a-test-webhook) · Effect: **consequential**

```typescript
async send(options: SendOptions): Promise<SdkSendTestWebhookResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SendOptions` | Yes |

Returns: `Promise<SdkSendTestWebhookResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.webhookChannels.send({
  "webhookChannel": "0f33d01f-f9f8-45e8-80c8-7734d057196d",
  "event": "order.created"
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

