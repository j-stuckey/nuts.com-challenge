import { getRequest, getRequestWithToken, getNewToken } from './http';

export async function getProductsData(page = 0) {
    const data = await getRequestWithToken(
        `https://api.commercetools.co/nuts-custom-demo-1/products?offset=${page * 10}&limit=10`,
        process.env.ACCESS_TOKEN
    );

    if (data.statusCode === 401) {
        const newToken = await getNewToken();

        const newReq = await getRequestWithToken(
            'https://api.commercetools.co/nuts-custom-demo-1/products?offset=0&limit=10',
            newToken
        );

        return await newReq.results;
    }

    return await data.results;
}

export async function getProductById(id) {
    const response = await fetch(
        `https://api.commercetools.co/nuts-custom-demo-1/products/${id}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        }
    );

    const productData = await response.json();
    return productData;
}
