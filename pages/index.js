import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getProductsData } from '../lib/products';
import Image from 'next/image';

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
                        const { current } = product.masterData;
                        return (
                            <li key={product.id}>
                                <p>{current.name.en}</p>
                                {current.masterVariant.images.length ? (
                                    <Image
                                        src={
                                            current.masterVariant.images[0]
                                                .url ||
                                            'https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/ece4edb2868a8225.cro-U2aFaCJE.jpg'
                                        }
                                        height={150}
                                        width={150}
                                    />
                                ) : (
                                    <Image
                                        src="https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/ece4edb2868a8225.cro-U2aFaCJE.jpg"
                                        height={150}
                                        width={150}
                                    />
                                )}
                                {current.masterVariant.prices.length ? (
                                    <p>
                                        $
                                        {current.masterVariant.prices[0].value
                                            .centAmount / 100}
                                    </p>
                                ) : (
                                    <p>'n/a'</p>
                                )}
                                <p>{current.description.en}</p>
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
