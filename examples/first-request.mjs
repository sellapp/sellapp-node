import { SellApp } from '@sell.app/sdk';

// Explicit endpoint selection keeps examples from accidentally calling a live store.
const baseUrl = process.env.SELLAPP_API_BASE_URL;
if (!baseUrl) throw new Error('Set SELLAPP_API_BASE_URL before running this example');
const client = new SellApp({ baseUrl }); // Reads SELLAPP_API_KEY and SELLAPP_STORE.

const page = await client.products.list({ limit: 1 });
for (const product of page.data) {
  console.log(product.id, product.title);
}
if (page.data.length === 0) console.log('No products yet. The request worked!');
