import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getProductsData } from '../lib/products';

export async function getStaticProps() {
    // const allProductsData = getProductsData();

    const response = await fetch(
        'https://api.commercetools.co/nuts-custom-demo-1/products?offset=0&limit=10',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        }
    );
    const data = await response.json();
    const products = data.results;

    return {
        props: {
            products
        }
    };
}

export default function Home({ products }) {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Product Listing</title>
            </Head>

            <main className={styles.main}>
                <ul>
                    {products.map((product) => {
                        return (
                            <li key={product.id}>
                                <p>{product.masterData.current.name.en}</p>
                                <p>
                                    {product.masterData.current.description.en}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://github.com/j-stuckey"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Created by James Stuckey
                </a>
            </footer>
        </div>
    );
}
