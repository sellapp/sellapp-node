# invoices

[All resources](../methods.md)

## list

List all invoices

[API reference](https://sell.app/docs/api/invoices/list-all-invoices) · Effect: **read**

```typescript
async list(options?: InvoicesListOptions): Promise<AutoPaginatable<ListInvoicesResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `InvoicesListOptions \| undefined` | No |

Returns: `Promise<AutoPaginatable<ListInvoicesResponseValue200ApplicationJsonPropertyDataItem, PaginationOptions>>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.list({

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

## create

Create an invoice

[API reference](https://sell.app/docs/api/invoices/create-an-invoice) · Effect: **consequential**

```typescript
async create(options: CreateOptions): Promise<SdkCreateInvoiceResponseValue201ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateOptions` | Yes |

Returns: `Promise<SdkCreateInvoiceResponseValue201ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.create({
  "customerEmail": "maya.chen@example.com",
  "paymentMethod": "STRIPE",
  "productVariants": {"4321": {"quantity":1}}
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

Documented HTTP responses: 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## search

Search invoices

[API reference](https://sell.app/docs/api/invoices/search-invoices) · Effect: **read**

```typescript
async search(options: SearchOptions): Promise<SdkSearchInvoicesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SearchOptions` | Yes |

Returns: `Promise<SdkSearchInvoicesResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.search({
  "id": "1",
  "sort": "-created_at"
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

Retrieve an invoice

[API reference](https://sell.app/docs/api/invoices/retrieve-an-invoice) · Effect: **read**

```typescript
async get(options: GetOptions): Promise<SdkGetInvoiceResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetOptions` | Yes |

Returns: `Promise<SdkGetInvoiceResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.get({
  "invoice": 1
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

## goToCheckout

Create a checkout session

[API reference](https://sell.app/docs/api/invoices/create-a-checkout-session) · Effect: **consequential**

```typescript
async goToCheckout(options: GoToCheckoutOptions): Promise<SdkCreateCheckoutSessionResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GoToCheckoutOptions` | Yes |

Returns: `Promise<SdkCreateCheckoutSessionResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.goToCheckout({
  "invoice": 9001
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

Documented HTTP responses: 200, 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## getDeliverables

View invoice deliverables

[API reference](https://sell.app/docs/api/invoices/view-invoice-deliverables) · Effect: **read**

```typescript
async getDeliverables(options: GetDeliverablesOptions): Promise<SdkGetInvoiceDeliverablesResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `GetDeliverablesOptions` | Yes |

Returns: `Promise<SdkGetInvoiceDeliverablesResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.getDeliverables({
  "invoice": 1234
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

## markCompleted

Mark pending invoice completed

[API reference](https://sell.app/docs/api/invoices/mark-pending-invoice-completed) · Effect: **consequential**

```typescript
async markCompleted(options: MarkCompletedOptions): Promise<SdkMarkPendingInvoiceCompletedResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `MarkCompletedOptions` | Yes |

Returns: `Promise<SdkMarkPendingInvoiceCompletedResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.markCompleted({
  "invoice": 1,
  "expectedStatus": "PENDING"
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

## markVoided

Mark pending invoice voided

[API reference](https://sell.app/docs/api/invoices/mark-pending-invoice-voided) · Effect: **consequential**

```typescript
async markVoided(options: MarkVoidedOptions): Promise<SdkMarkPendingInvoiceVoidedResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `MarkVoidedOptions` | Yes |

Returns: `Promise<SdkMarkPendingInvoiceVoidedResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.markVoided({
  "invoice": 1,
  "expectedStatus": "PENDING"
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

## issueReplacement

Issue replacement for completed invoice

[API reference](https://sell.app/docs/api/invoices/issue-replacement-for-completed-invoice) · Effect: **consequential**

```typescript
async issueReplacement(options: IssueReplacementOptions): Promise<SdkIssueReplacementForCompletedInvoiceResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `IssueReplacementOptions` | Yes |

Returns: `Promise<SdkIssueReplacementForCompletedInvoiceResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.issueReplacement({
  "invoice": 1,
  "productVariants": {"0": 117214}
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

## updateStatus

Update invoice status

[API reference](https://sell.app/docs/api/invoices/update-invoice-status) · Effect: **consequential**

```typescript
async updateStatus(options: UpdateStatusOptions): Promise<SdkUpdateInvoiceStatusResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `UpdateStatusOptions` | Yes |

Returns: `Promise<SdkUpdateInvoiceStatusResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.updateStatus({
  "invoice": 1,
  "status": "REVIEW",
  "expectedStatus": "PENDING"
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

## createRefund

Create invoice refund

[API reference](https://sell.app/docs/api/invoices/refund-an-invoice) · Effect: **consequential**

```typescript
async createRefund(options: CreateRefundOptions): Promise<SdkCreateInvoiceRefundResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreateRefundOptions` | Yes |

Returns: `Promise<SdkCreateInvoiceRefundResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.createRefund({
  "invoice": 1,
  "amount": "12.50"
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

## retryFulfillment

Create fulfillment retry

[API reference](https://sell.app/docs/api/invoices/retry-invoice-fulfillment) · Effect: **consequential**

```typescript
async retryFulfillment(options: RetryFulfillmentOptions): Promise<SdkCreateFulfillmentRetryResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `RetryFulfillmentOptions` | Yes |

Returns: `Promise<SdkCreateFulfillmentRetryResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.retryFulfillment({
  "invoice": 1
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

## retryDynamicDelivery

Create dynamic delivery retry

[API reference](https://sell.app/docs/api/invoices/retry-dynamic-delivery) · Effect: **consequential**

```typescript
async retryDynamicDelivery(options: RetryDynamicDeliveryOptions): Promise<SdkCreateDynamicDeliveryRetryResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `RetryDynamicDeliveryOptions` | Yes |

Returns: `Promise<SdkCreateDynamicDeliveryRetryResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.retryDynamicDelivery({
  "invoice": 1,
  "deliveredProductId": 42
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

## notifyFulfillment

Create fulfillment notifications

[API reference](https://sell.app/docs/api/invoices/resend-invoice-deliverables) · Effect: **consequential**

```typescript
async notifyFulfillment(options: NotifyFulfillmentOptions): Promise<SdkCreateFulfillmentNotificationsResponseValue200ApplicationJson>
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `NotifyFulfillmentOptions` | Yes |

Returns: `Promise<SdkCreateFulfillmentNotificationsResponseValue200ApplicationJson>`.

```ts
import { SellApp } from '@sell.app/sdk';

const client = new SellApp({
  baseUrl: process.env.SELLAPP_API_BASE_URL!,
  apiKey: process.env.SELLAPP_API_KEY!,
  store: process.env.SELLAPP_STORE!,
});

const result = await client.invoices.notifyFulfillment({
  "invoice": 1
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

