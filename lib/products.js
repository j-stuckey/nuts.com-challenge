import { getRequest } from './http';

export async function getProductsData() {
    const data = await getRequest(
        'https://api.commercetools.co/nuts-custom-demo-1/products?offset=30&limit=10',
        {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        }
    );

    return await data.results;
}
