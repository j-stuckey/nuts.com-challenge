import { getRequest, getRequestWithToken, getNewToken } from './http';

export async function getProductsData() {
    const data = await getRequestWithToken(
        'https://api.commercetools.co/nuts-custom-demo-1/products?offset=0&limit=10',
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
