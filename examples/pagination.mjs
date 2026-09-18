import { SellApp } from '@sell.app/sdk';

// Explicit endpoint selection keeps examples from accidentally calling a live store.
const baseUrl = process.env.SELLAPP_API_BASE_URL;
if (!baseUrl) throw new Error('Set SELLAPP_API_BASE_URL before running this example');
const client = new SellApp({ baseUrl }); // Reads SELLAPP_API_KEY and SELLAPP_STORE.

// Product listings use page numbers. Keep a finite budget for large catalogs.
for (let pageNumber = 1; pageNumber <= 100; pageNumber += 1) {
  const page = await client.products.list({ page: pageNumber, limit: 20 });
  for (const product of page.data) console.log(product.id, product.title);
  const lastPage = page.listMetadata?.last_page;
  if ((typeof lastPage === 'number' && pageNumber >= lastPage)) break;
  if (pageNumber === 100) throw new Error('Page budget reached; resume from page 101');
}
