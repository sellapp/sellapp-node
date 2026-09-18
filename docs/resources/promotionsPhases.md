# promotionsPhases

[All resources](../methods.md)

## list

List promotion phases

[API reference](https://sell.app/docs/api/promotions/replace-promotion-phases) · Effect: **read**

```typescript
async list(options: PromotionsPhasesListOptions): Promise<SdkListPromotionPhasesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PromotionsPhasesListOptions` | Yes |

Returns: `Promise<SdkListPromotionPhasesResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.promotionsPhases.list({
  "promotion": 1
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

Replace promotion phases

[API reference](https://sell.app/docs/api/promotions/replace-promotion-phases) · Effect: **consequential**

```typescript
async replace(options: ReplaceOptions): Promise<SdkReplacePromotionPhasesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOptions` | Yes |

Returns: `Promise<SdkReplacePromotionPhasesResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.promotionsPhases.replace({
  "promotion": 1,
  "phases": [{"discountType": "percentage", "discountValue": "20", "endsAt": new Date("2026-08-04T00:00:00Z"), "maxRedemptions": 200, "minimumAmount": "10"}, {"discountType": "fixed", "discountValue": "5", "endsAt": null, "maxRedemptions": null, "minimumAmount": "25"}]
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

