import { getProductsData } from 'lib/products';

const handler = async (req, res) => {
    const { page } = req.query;

    const data = await getProductsData(parseInt(page));

    res.status(200).json(data);
};

export default handler;
