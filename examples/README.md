# Node.js examples

Pick a small task: read a product, walk the catalog, or see how to handle a failed
request. Each file is a complete program you can run and adapt.

From the SDK checkout, run `npm install` and `npm run build`. The examples import
the package by its public name (sellapp); Node resolves the checkout's
own package exports. Alternatively copy the files into an app with the packed SDK installed.

Set the three variables in [onboarding](../README.md#your-first-request), then run:

```sh
node examples/first-request.mjs
node examples/pagination.mjs
node examples/errors.mjs
```

All requests are read-only. The error example reports a real failure if one occurs;
it does not deliberately invalidate your credentials. These files require an explicit
`SELLAPP_API_BASE_URL` and never choose production on your behalf.

`npm test` executes these exact files against a localhost mock with dummy
credentials, checking first/empty responses, two-page traversal, and a 401 request ID.
The tests also install an actual npm tarball in a temporary consumer and execute the
examples there. No real store or credentials are needed for verification.
