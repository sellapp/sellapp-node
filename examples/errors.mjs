import { SellApp, SellAppApiError, SellAppTimeoutError, SellAppTransportError } from '@sell.app/sdk';

// Explicit endpoint selection keeps examples from accidentally calling a live store.
const baseUrl = process.env.SELLAPP_API_BASE_URL;
if (!baseUrl) throw new Error('Set SELLAPP_API_BASE_URL before running this example');
const client = new SellApp({ baseUrl }); // Reads SELLAPP_API_KEY and SELLAPP_STORE.

try {
  const page = await client.products.list({ limit: 1 });
  console.log('Products on this page:', page.data.length);
} catch (error) {
  if (error instanceof SellAppApiError) {
    console.error(error.status, error.code, error.message, error.requestId);
  } else if (error instanceof SellAppTimeoutError) {
    console.error('Request timed out:', error.message);
  } else if (error instanceof SellAppTransportError) {
    console.error('Connection failed:', error.message);
  } else {
    throw error; // Configuration and unexpected errors deserve attention too.
  }
  process.exitCode = 1;
}
