# affiliateReferralSessions

[All resources](../methods.md)

## list

List affiliate referral sessions

[API reference](https://sell.app/docs/api/affiliates/list-referral-sessions) · Effect: **read**

```typescript
async list(options?: AffiliateReferralSessionsListOptions): Promise<AutoPaginatable<ListAffiliateReferralSessionsResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `AffiliateReferralSessionsListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListAffiliateReferralSessionsResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.affiliateReferralSessions.list({

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

Retrieve an affiliate referral session

[API reference](https://sell.app/docs/api/affiliates/list-referral-sessions) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetAffiliateReferralSessionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetAffiliateReferralSessionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.affiliateReferralSessions.get({
  "referralSession": 1
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

