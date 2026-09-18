# productsAddons

[All resources](../methods.md)

## list

List a product's add-ons

[API reference](https://sell.app/docs/api/add-ons/list-product-add-ons) · Effect: **read**

```typescript
async list(options: ProductsAddonsListOptions): Promise<AutoPaginatable<SdkListProductSAddOnsResponseValue200ApplicationJson, Omit<ProductsAddonsListOptions, 'product'>>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ProductsAddonsListOptions` | Yes |

Returns: `Promise<AutoPaginatable<SdkListProductSAddOnsResponseValue200ApplicationJson, Omit<ProductsAddonsListOptions, "product">>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.productsAddons.list({
  "product": 120
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

Replace a product's add-ons

[API reference](https://sell.app/docs/api/add-ons/replace-product-add-ons) · Effect: **consequential**

```typescript
async replace(options: ReplaceOptions): Promise<SdkReplaceProductSAddOnsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ReplaceOptions` | Yes |

Returns: `Promise<SdkReplaceProductSAddOnsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.productsAddons.replace({
  "product": 120,
  "resources": [411, 410]
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

