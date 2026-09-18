# oauth

[All resources](../methods.md)

## getOAuthAuthorizationServerMetadata

Read OAuth server metadata

[API reference](https://sell.app/docs/api/oauth) · Effect: **read**

```typescript
async getOAuthAuthorizationServerMetadata(requestOptions: RequestOptions = {}): Promise<SdkGetOAuthAuthorizationServerMetadataResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `GetOptions` | No |

Returns: `Promise<SdkGetOAuthAuthorizationServerMetadataResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: "",
  store: "",
});

const result = await client.oauth.getOAuthAuthorizationServerMetadata();
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[]
```

Documented HTTP responses: 200, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getOAuthAuthorizationRequest

Review CLI authorization

[API reference](https://sell.app/docs/api/oauth) · Effect: **read**

```typescript
async getOAuthAuthorizationRequest(options: GetOAuthAuthorizationRequestOptions): Promise<string>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOAuthAuthorizationRequestOptions` | Yes |

Returns: `Promise<string>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: "",
  store: "",
});

const result = await client.oauth.getOAuthAuthorizationRequest({
  "responseType": "code",
  "clientId": "01992a65-e064-71ba-b38f-902b7966a6be",
  "redirectUri": "http://127.0.0.1:49152/callback",
  "state": "RANDOM_STATE",
  "codeChallenge": "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
  "codeChallengeMethod": "S256"
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[]
```

Documented HTTP responses: 200, 302, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## approveOAuthAuthorization

Approve CLI access

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```typescript
async approveOAuthAuthorization(options: ApproveOAuthAuthorizationOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ApproveOAuthAuthorizationOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  browserSession: process.env.SELLAPP_BROWSER_SESSION!,
  store: "",
});

const result = await client.oauth.approveOAuthAuthorization({
  "authToken": "CONSENT_AUTH_TOKEN",
  "clientId": "01992a65-e064-71ba-b38f-902b7966a6be",
  "state": "RANDOM_STATE",
  "token": "CSRF_TOKEN"
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthBrowserSession": []
  }
]
```

Documented HTTP responses: 302, 400, 401, 403, 419, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## denyOAuthAuthorization

Deny CLI access

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```typescript
async denyOAuthAuthorization(options: DenyOAuthAuthorizationOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `DenyOAuthAuthorizationOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  browserSession: process.env.SELLAPP_BROWSER_SESSION!,
  store: "",
});

const result = await client.oauth.denyOAuthAuthorization({
  "authToken": "CONSENT_AUTH_TOKEN",
  "token": "CSRF_TOKEN"
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthBrowserSession": []
  }
]
```

Documented HTTP responses: 302, 400, 401, 419, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## exchangeOAuthToken

Exchange or refresh OAuth tokens

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```typescript
async exchangeOAuthToken(options: ExchangeOAuthTokenOptions): Promise<SdkExchangeOAuthTokenResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ExchangeOAuthTokenOptions` | Yes |

Returns: `Promise<SdkExchangeOAuthTokenResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: "",
  store: "",
});

const result = await client.oauth.exchangeOAuthToken({
  "clientId": "01992a65-e064-71ba-b38f-902b7966a6be",
  "grantType": "authorization_code",
  "code": "AUTHORIZATION_CODE",
  "redirectUri": "http://127.0.0.1:49152/callback",
  "codeVerifier": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {},
  {
    "oauthClientBasic": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## revokeOAuthToken

Revoke an OAuth token

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```typescript
async revokeOAuthToken(options: RevokeOAuthTokenOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `RevokeOAuthTokenOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: "",
  store: "",
});

const result = await client.oauth.revokeOAuthToken({
  "clientId": "01992a65-e064-71ba-b38f-902b7966a6be",
  "token": "REFRESH_TOKEN",
  "tokenTypeHint": "refresh_token"
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {},
  {
    "oauthClientBasic": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

