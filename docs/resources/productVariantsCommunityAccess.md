# productVariantsCommunityAccess

[All resources](../methods.md)

## replace

Replace variant community access

[API reference](https://sell.app/docs/api/product-variants/replace-variant-community-access) · Effect: **write**

```typescript
async replace(options: ReplaceOptions): Promise<SdkReplaceVariantCommunityAccessResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOptions` | Yes |

Returns: `Promise<SdkReplaceVariantCommunityAccessResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.productVariantsCommunityAccess.replace({
  "product": 1,
  "variant": 2,
  "community": {"platform": "discord", "serverId": "1187040134912155648", "roleIds": ["1187040299781210112"], "required": true, "removeOnExpire": true},
  "expectedUpdatedAt": new Date("2024-01-10T18:47:22.000000Z")
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

