# licenseInstances

[All resources](../methods.md)

## list

List all license instances

[API reference](https://sell.app/docs/api/license-instances/list-all-license-instances) · Effect: **read**

```typescript
async list(options?: LicenseInstancesListOptions): Promise<AutoPaginatable<ListLicenseInstancesResponseValue200ApplicationJsonPropertyDataItem, LicenseInstancesListOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `LicenseInstancesListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ActivateLicenseKeyResponseValue200ApplicationJsonPropertyData, LicenseInstancesListOptions>>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.licenseInstances.list({

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

