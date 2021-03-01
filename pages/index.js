import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getProductsData } from '../lib/products';

export async function getStaticProps() {
    const products = await getProductsData();

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

                        console.log(product.masterData.current.masterVariant.prices[0].value.type);
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
