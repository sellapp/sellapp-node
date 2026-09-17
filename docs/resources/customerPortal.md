# customerPortal

[All resources](../methods.md)

## getCustomerPortalProfile

Retrieve the signed-in customer

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```typescript
async getCustomerPortalProfile(requestOptions: RequestOptions = {}): Promise<SdkGetCustomerPortalProfileResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `GetOptions` | No |

Returns: `Promise<SdkGetCustomerPortalProfileResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.getCustomerPortalProfile();
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## updateCustomerPortalProfile

Update the signed-in customer

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```typescript
async updateCustomerPortalProfile(options: UpdateCustomerPortalProfileOptions): Promise<SdkUpdateCustomerPortalProfileResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateCustomerPortalProfileOptions` | Yes |

Returns: `Promise<SdkUpdateCustomerPortalProfileResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.updateCustomerPortalProfile({
  "locale": "en-US"
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## listCustomerPortalOrders

List customer orders

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```typescript
async listCustomerPortalOrders(options?: ListCustomerPortalOrdersOptions): Promise<AutoPaginatable<CustomerPortalOrder, ListCustomerPortalOrdersOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PaginationOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<CustomerPortalOrder, PaginationOptions>>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.listCustomerPortalOrders();
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getCustomerPortalOrder

Retrieve a customer order

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```typescript
async getCustomerPortalOrder(options: GetCustomerPortalOrderOptions): Promise<SdkGetCustomerPortalOrderResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetCustomerPortalOrderOptions` | Yes |

Returns: `Promise<SdkGetCustomerPortalOrderResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.getCustomerPortalOrder({
  "order": 9001
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## listCustomerPortalSubscriptions

List customer subscriptions

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```typescript
async listCustomerPortalSubscriptions(requestOptions: RequestOptions = {}): Promise<SdkListCustomerPortalSubscriptionsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `GetOptions` | No |

Returns: `Promise<SdkListCustomerPortalSubscriptionsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.listCustomerPortalSubscriptions();
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getCustomerPortalSubscription

Retrieve a customer subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```typescript
async getCustomerPortalSubscription(options: GetCustomerPortalSubscriptionOptions): Promise<SdkGetCustomerPortalSubscriptionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetCustomerPortalSubscriptionOptions` | Yes |

Returns: `Promise<SdkGetCustomerPortalSubscriptionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.getCustomerPortalSubscription({
  "subscription": 991
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getCustomerPortalSubscriptionCapabilities

Retrieve subscription capabilities

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```typescript
async getCustomerPortalSubscriptionCapabilities(options: GetCustomerPortalSubscriptionCapabilitiesOptions): Promise<SdkGetCustomerPortalSubscriptionCapabilitiesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetCustomerPortalSubscriptionCapabilitiesOptions` | Yes |

Returns: `Promise<SdkGetCustomerPortalSubscriptionCapabilitiesResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.getCustomerPortalSubscriptionCapabilities({
  "subscription": 42
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## listCustomerPortalEntitlements

List customer entitlements

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```typescript
async listCustomerPortalEntitlements(requestOptions: RequestOptions = {}): Promise<SdkListCustomerPortalEntitlementsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `GetOptions` | No |

Returns: `Promise<SdkListCustomerPortalEntitlementsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.listCustomerPortalEntitlements();
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## cancelCustomerSubscriptionAtPeriodEnd

Cancel at period end

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```typescript
async cancelCustomerSubscriptionAtPeriodEnd(options: CancelCustomerSubscriptionAtPeriodEndOptions): Promise<SdkCancelCustomerSubscriptionAtPeriodEndResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CancelCustomerSubscriptionAtPeriodEndOptions` | Yes |

Returns: `Promise<SdkCancelCustomerSubscriptionAtPeriodEndResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.cancelCustomerSubscriptionAtPeriodEnd({
  "productSubscription": 42,
  "reason": "Customer requested this change",
  requestOptions: { headers: { "Idempotency-Key": "example-mutation-001" } }
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## cancelCustomerSubscriptionImmediately

Cancel immediately

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```typescript
async cancelCustomerSubscriptionImmediately(options: CancelCustomerSubscriptionImmediatelyOptions): Promise<SdkCancelCustomerSubscriptionImmediatelyResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CancelCustomerSubscriptionImmediatelyOptions` | Yes |

Returns: `Promise<SdkCancelCustomerSubscriptionImmediatelyResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.cancelCustomerSubscriptionImmediately({
  "productSubscription": 42,
  "reason": "Customer requested this change",
  requestOptions: { headers: { "Idempotency-Key": "example-mutation-001" } }
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## pauseCustomerSubscription

Pause a subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```typescript
async pauseCustomerSubscription(options: PauseCustomerSubscriptionOptions): Promise<SdkPauseCustomerSubscriptionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PauseCustomerSubscriptionOptions` | Yes |

Returns: `Promise<SdkPauseCustomerSubscriptionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.pauseCustomerSubscription({
  "productSubscription": 42,
  "reason": "Customer requested this change",
  requestOptions: { headers: { "Idempotency-Key": "example-mutation-001" } }
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## resumeCustomerSubscription

Resume a subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```typescript
async resumeCustomerSubscription(options: ResumeCustomerSubscriptionOptions): Promise<SdkResumeCustomerSubscriptionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ResumeCustomerSubscriptionOptions` | Yes |

Returns: `Promise<SdkResumeCustomerSubscriptionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.resumeCustomerSubscription({
  "productSubscription": 42,
  "reason": "Customer requested this change",
  requestOptions: { headers: { "Idempotency-Key": "example-mutation-001" } }
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## updateCustomerSubscriptionPaymentMethod

Update payment method

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```typescript
async updateCustomerSubscriptionPaymentMethod(options: UpdateCustomerSubscriptionPaymentMethodOptions): Promise<SdkUpdateCustomerSubscriptionPaymentMethodResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateCustomerSubscriptionPaymentMethodOptions` | Yes |

Returns: `Promise<SdkUpdateCustomerSubscriptionPaymentMethodResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.updateCustomerSubscriptionPaymentMethod({
  "productSubscription": 42,
  "reason": "Customer requested this change",
  requestOptions: { headers: { "Idempotency-Key": "example-mutation-001" } }
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## previewCustomerSubscriptionPlanChange

Preview a plan change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```typescript
async previewCustomerSubscriptionPlanChange(options: PreviewCustomerSubscriptionPlanChangeOptions): Promise<SdkPreviewCustomerSubscriptionPlanChangeResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PreviewCustomerSubscriptionPlanChangeOptions` | Yes |

Returns: `Promise<SdkPreviewCustomerSubscriptionPlanChangeResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.previewCustomerSubscriptionPlanChange({
  "productSubscription": 42,
  "productVariantId": 84,
  requestOptions: { headers: { "Idempotency-Key": "example-mutation-001" } }
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## confirmCustomerSubscriptionPlanChange

Confirm a plan change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```typescript
async confirmCustomerSubscriptionPlanChange(options: ConfirmCustomerSubscriptionPlanChangeOptions): Promise<SdkConfirmCustomerSubscriptionPlanChangeResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ConfirmCustomerSubscriptionPlanChangeOptions` | Yes |

Returns: `Promise<SdkConfirmCustomerSubscriptionPlanChangeResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.confirmCustomerSubscriptionPlanChange({
  "productSubscription": 42,
  "previewId": "preview_01K4",
  requestOptions: { headers: { "Idempotency-Key": "example-mutation-001" } }
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## previewCustomerSubscriptionRenewalDateChange

Preview a renewal-date change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```typescript
async previewCustomerSubscriptionRenewalDateChange(options: PreviewCustomerSubscriptionRenewalDateChangeOptions): Promise<SdkPreviewCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `PreviewCustomerSubscriptionRenewalDateChangeOptions` | Yes |

Returns: `Promise<SdkPreviewCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.previewCustomerSubscriptionRenewalDateChange({
  "productSubscription": 42,
  "renewalDate": "2026-10-15",
  requestOptions: { headers: { "Idempotency-Key": "example-mutation-001" } }
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## confirmCustomerSubscriptionRenewalDateChange

Confirm a renewal-date change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```typescript
async confirmCustomerSubscriptionRenewalDateChange(options: ConfirmCustomerSubscriptionRenewalDateChangeOptions): Promise<SdkConfirmCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `ConfirmCustomerSubscriptionRenewalDateChangeOptions` | Yes |

Returns: `Promise<SdkConfirmCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson>`.

```ts
import { SellApp } from 'sellapp';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  customerSession: process.env.SELLAPP_CUSTOMER_SESSION!,
  store: "",
});

const result = await client.customerPortal.confirmCustomerSubscriptionRenewalDateChange({
  "productSubscription": 42,
  "previewId": "preview_01K4",
  requestOptions: { headers: { "Idempotency-Key": "example-mutation-001" } }
});
console.log(result);
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

