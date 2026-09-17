# oauthManagement

[All resources](../methods.md)

## getOAuthInstallation

Read your CLI connection

[API reference](https://sell.app/docs/api/oauth) · Effect: **read**

```typescript
async getOAuthInstallation(requestOptions: RequestOptions = {}): Promise<SdkGetOAuthInstallationResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `GetOptions` | No |

Returns: `Promise<SdkGetOAuthInstallationResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  accessToken: process.env.SELLAPP_ACCESS_TOKEN!,
  store: "",
});

const result = await client.oauthManagement.getOAuthInstallation();
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthAccessToken": [
      "admin"
    ]
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## deleteOAuthInstallation

Disconnect your CLI connection

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```typescript
async deleteOAuthInstallation(): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |

Returns: `Promise<void>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  accessToken: process.env.SELLAPP_ACCESS_TOKEN!,
  store: "",
});

const result = await client.oauthManagement.deleteOAuthInstallation();
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthAccessToken": [
      "admin"
    ]
  }
]
```

Documented HTTP responses: 204, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

