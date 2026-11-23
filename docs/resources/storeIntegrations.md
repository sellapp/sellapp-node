# storeIntegrations

[All resources](../methods.md)

## get

Retrieve store integrations

[API reference](https://sell.app/docs/api/store-settings/integrations) · Effect: **read**

```typescript
async get(requestOptions: RequestOptions = {}): Promise<SdkGetStoreIntegrationsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `GetOptions` | No |

Returns: `Promise<SdkGetStoreIntegrationsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.storeIntegrations.get();
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

## disconnectGoogleCalendar

Disconnect Google Calendar

[API reference](https://sell.app/docs/api/store-settings/integrations) · Effect: **consequential**

```typescript
async disconnectGoogleCalendar(options: DisconnectGoogleCalendarOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `DisconnectGoogleCalendarOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.storeIntegrations.disconnectGoogleCalendar({
  "connectionId": 7
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

