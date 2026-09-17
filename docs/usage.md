# Node.js usage details

[Back to onboarding](../README.md)

## Pagination

Need more than the first page? Ask for the next batch, process it, then continue.
You can stop as soon as you have what you need.

Product pages expose the response's raw `meta` through `listMetadata`; its keys
remain snake_case. [pagination.mjs](../examples/pagination.mjs) requests explicit
`page` values and stops at `last_page`, or a 100-page budget.
The iterator uses trusted `current_page`/`last_page` metadata and rejects
malformed or cyclic progress. It never follows an arbitrary next URL.

## Errors and request IDs

An API error means the server answered and rejected the request. A transport error
means the client couldn't complete the conversation. That distinction tells you
whether to inspect the request or the connection first.

`SellAppApiError` exposes `status`, `type`, `code`, `message`, `param`,
`requestId`/`request_id`, and `docsUrl`/`docs_url` from the error body.
Optional fields may be absent. Request IDs fall back to `X-Request-ID`.
Low-level calls return `{ data, status, headers, requestId }`, allowing
successful-response header inspection; generated resource methods return their
domain result instead. Do not log credentials.

`SellAppTimeoutError` extends `SellAppTransportError`, so catch it first.
`SellAppSerializationError` describes invalid JSON; model-shape failures can
instead surface as validation errors. Missing credentials and invalid timeout or
retry settings raise `SellAppConfigurationError` before transport.

## Retries, timeouts, and writes

Retries give a failed request another chance. Timeouts limit how long an attempt
can wait. Together they help with temporary failures, but the total wait can be
longer than a single timeout. Here are the exact rules.

The default is two retries after the initial attempt. GET, HEAD, OPTIONS, TRACE,
PUT and DELETE are eligible. Other methods need a nonempty `Idempotency-Key`.
Eligible requests retry transport failures and HTTP 408, 409, 429, and 5xx.
Timeouts and explicit cancellation are not retried. Backoff starts at 250 ms and
doubles with bounded jitter, capped at 30 seconds; a valid integer-seconds or
HTTP-date `Retry-After` overrides it, also capped at 30 seconds. The timeout is per
attempt, not an overall deadline; waiting and retries can extend total time.

For writes, an idempotency key identifies one intended change, so a supporting
endpoint can recognize another attempt at that same change.
Idempotency support is endpoint-specific. Supply the declared idempotency parameter
for operations that offer it; this runtime does not generate a key for you. Reuse
one key only for retries of the same intended change. The presence of an SDK option
does not make an endpoint idempotent. See the
[API idempotency guide](https://sell.app/docs/api/idempotency) and
[errors guide](https://sell.app/docs/api/errors).

Low-level methods accept per-request `timeout`, `maxRetries`, headers, and `signal`.
Aborting also interrupts retry waiting. Generated resource signatures do not all
expose these low-level request controls.

## Client configuration

The example reads your credentials from the environment. To set them in your app,
pass options to `new SellApp(options)`; explicit credentials take precedence.
The SDK selects credentials for each operation. API-key v2 operations can omit
`store`; legacy operations require it. OAuth store operations require it.
Use `new SellApp({ accessToken, store })` for OAuth; this suppresses the API-key
environment fallback. Use `customerSession` on a client or in a call's
`requestOptions` for customer-portal operations. Anonymous operations send no
credentials. Customer-session and OAuth protocol requests are never replayed
automatically.

OAuth protocol operations use `https://sell.app`; a custom `baseUrl` also
sets their origin. Token requests use URL-encoded forms. Redirects are returned
without following them. Inspect status and `Location` through `withRawResponse`
before making a separate download request without API credentials.

| Option | Default | Meaning |
| --- | --- | --- |
| `apiKey` | `SELLAPP_API_KEY` | Secret key, without the Bearer prefix |
| `store` | `SELLAPP_STORE` | Store slug, not numeric ID |
| `baseUrl` | `https://sell.app/api` | API base, including `/api` |
| `timeout` | `60000` | Positive milliseconds per attempt |
| `maxRetries` | `2` | Additional attempts; `0` disables retries |
| `fetch` | `globalThis.fetch` | Fetch-compatible transport |

There is no timeout environment override in this SDK. Reuse a client; it has no
disposal method. Paginated resource calls accept transport controls through
`requestOptions`, including `AbortSignal`, per-call timeout, headers, and retries.

## Pages and failures

One product proves the connection. To read a catalog, fetch it a page at a time:
that's pagination. The [pagination example](https://github.com/sellapp/sellapp-node/blob/main/examples/pagination.mjs) stops when it
reaches the end or its page budget, so a large store won't keep it running forever.
The automatic async iterator understands numeric-page and cursor metadata,
continues through empty intermediate pages, and accepts item/page budgets.

When a request fails, the [error example](https://github.com/sellapp/sellapp-node/blob/main/examples/errors.mjs) helps you tell an
API rejection from a timeout or connection problem. It prints the API error's
request ID when present: a useful reference when investigating that request.
Start with the status:
401 means check the key, 403 means check permissions, and 404 means check the store
slug or resource ID. See [usage](https://github.com/sellapp/sellapp-node/blob/main/docs/usage.md) for retry and error details.
