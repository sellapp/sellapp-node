# subscriptions

[All resources](../methods.md)

## cancel

Cancel a subscription

[API reference](https://sell.app/docs/api/subscriptions/cancel-a-subscription-immediately-with-a-refund) · Effect: **consequential**

```typescript
async cancel(options: CancelOptions): Promise<SdkCancelSubscriptionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CancelOptions` | Yes |

Returns: `Promise<SdkCancelSubscriptionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.cancel({
  "subscription": 55,
  "cancelAtPeriodEnd": true,
  "idempotencyKey": "design-kit-subscription-55-cancel-v1"
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

## getCapabilities

View subscription capabilities

[API reference](https://sell.app/docs/api/subscriptions/view-subscription-capabilities) · Effect: **read**

```typescript
async getCapabilities(options: GetCapabilitiesOptions): Promise<SdkGetSubscriptionCapabilitiesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetCapabilitiesOptions` | Yes |

Returns: `Promise<SdkGetSubscriptionCapabilitiesResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.getCapabilities({
  "productSubscription": 1
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

## cancelAtPeriodEnd

Cancel a subscription at period end

[API reference](https://sell.app/docs/api/subscriptions/cancel-at-period-end) · Effect: **consequential**

```typescript
async cancelAtPeriodEnd(options: CancelAtPeriodEndOptions): Promise<SdkCancelSubscriptionAtPeriodEndResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CancelAtPeriodEndOptions` | Yes |

Returns: `Promise<SdkCancelSubscriptionAtPeriodEndResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.cancelAtPeriodEnd({
  "productSubscription": 55,
  "reason": "Customer request"
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

## cancelImmediately

Cancel a subscription immediately

[API reference](https://sell.app/docs/api/subscriptions/cancel-immediately) · Effect: **consequential**

```typescript
async cancelImmediately(options: CancelImmediatelyOptions): Promise<SdkCancelSubscriptionImmediatelyResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CancelImmediatelyOptions` | Yes |

Returns: `Promise<SdkCancelSubscriptionImmediatelyResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.cancelImmediately({
  "productSubscription": 55,
  "reason": "Customer request"
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

## pause

Pause a subscription

[API reference](https://sell.app/docs/api/subscriptions/pause-a-subscription) · Effect: **consequential**

```typescript
async pause(options: PauseOptions): Promise<SdkPauseSubscriptionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PauseOptions` | Yes |

Returns: `Promise<SdkPauseSubscriptionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.pause({
  "productSubscription": 55,
  "resumeAt": new Date("2026-10-10T12:00:00Z"),
  "reason": "Customer request"
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

## resume

Resume a subscription

[API reference](https://sell.app/docs/api/subscriptions/resume-a-subscription) · Effect: **consequential**

```typescript
async resume(options: ResumeOptions): Promise<SdkResumeSubscriptionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ResumeOptions` | Yes |

Returns: `Promise<SdkResumeSubscriptionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.resume({
  "productSubscription": 55
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

## updatePaymentMethod

Update a subscription payment method

[API reference](https://sell.app/docs/api/subscriptions/update-payment-method) · Effect: **consequential**

```typescript
async updatePaymentMethod(options: UpdatePaymentMethodOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdatePaymentMethodOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.updatePaymentMethod({
  "productSubscription": 1
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

Documented HTTP responses: 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## previewPlanChange

Preview a subscription plan change

[API reference](https://sell.app/docs/api/subscriptions/preview-plan-change) · Effect: **consequential**

```typescript
async previewPlanChange(options: PreviewPlanChangeOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PreviewPlanChangeOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.previewPlanChange({
  "productSubscription": 1,
  "targetVariantId": 4321,
  "effectiveTiming": "immediate",
  "prorationBehavior": "provider_default"
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

Documented HTTP responses: 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## confirmPlanChange

Confirm a subscription plan change

[API reference](https://sell.app/docs/api/subscriptions/confirm-plan-change) · Effect: **consequential**

```typescript
async confirmPlanChange(options: ConfirmPlanChangeOptions): Promise<void>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ConfirmPlanChangeOptions` | Yes |

Returns: `Promise<void>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.confirmPlanChange({
  "productSubscription": 1,
  "targetVariantId": 4321,
  "previewToken": "subprev_9c4b2f"
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

Documented HTTP responses: 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## previewRenewalDate

Preview a subscription renewal date change

[API reference](https://sell.app/docs/api/subscriptions/preview-renewal-date-change) · Effect: **consequential**

```typescript
async previewRenewalDate(options: PreviewRenewalDateOptions): Promise<SdkPreviewSubscriptionRenewalDateChangeResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PreviewRenewalDateOptions` | Yes |

Returns: `Promise<SdkPreviewSubscriptionRenewalDateChangeResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.previewRenewalDate({
  "productSubscription": 1,
  "renewalDate": new Date("2026-10-01T12:00:00Z"),
  "reason": "Align Maya's membership with the monthly reading circle."
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

## confirmRenewalDate

Confirm a subscription renewal date change

[API reference](https://sell.app/docs/api/subscriptions/confirm-renewal-date-change) · Effect: **consequential**

```typescript
async confirmRenewalDate(options: ConfirmRenewalDateOptions): Promise<SdkConfirmSubscriptionRenewalDateChangeResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ConfirmRenewalDateOptions` | Yes |

Returns: `Promise<SdkConfirmSubscriptionRenewalDateChangeResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.confirmRenewalDate({
  "productSubscription": 1,
  "renewalDate": new Date("2026-10-01T12:00:00Z"),
  "previewToken": "subprev_project_library_55",
  "reason": "Align Maya's membership with the monthly reading circle."
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

## listSubscriptions

List subscriptions

[API reference](https://sell.app/docs/api/subscriptions/read-subscriptions) · Effect: **read**

```typescript
async listSubscriptions(options?: ListSubscriptionsOptions): Promise<AutoPaginatable<ListSubscriptionsResponseValue200ApplicationJsonPropertyDataItem, ListSubscriptionsOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PaginationOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListSubscriptionsResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.listSubscriptions();
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

## searchSubscriptions

Search subscriptions

[API reference](https://sell.app/docs/api/subscriptions/read-subscriptions) · Effect: **read**

```typescript
async searchSubscriptions(options: SearchSubscriptionsOptions): Promise<SdkSearchSubscriptionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SearchSubscriptionsOptions` | Yes |

Returns: `Promise<SdkSearchSubscriptionsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.searchSubscriptions({
  "search": "maya.chen@example.com",
  "status": "active"
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

## getSubscription

Retrieve a subscription

[API reference](https://sell.app/docs/api/subscriptions/read-subscriptions) · Effect: **read**

```typescript
async getSubscription(options: GetSubscriptionOptions): Promise<SdkGetSubscriptionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetSubscriptionOptions` | Yes |

Returns: `Promise<SdkGetSubscriptionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.subscriptions.getSubscription({
  "productSubscription": 991
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

