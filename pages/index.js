import Head from 'next/head';
import { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import styles from '../styles/Home.module.css';
import { getProductsData } from '../lib/products';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';

export async function getServerSideProps(context) {
    const products = await getProductsData();

    if (!products) {
        return {
            props: {
                products: []
            }
        };
    }

    return {
        props: {
            products
        }
    };
}

export default function Home({ products }) {
    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProductList(products);
        window.scrollTo(100, 100);
    }, [page]);

    async function fetchData() {
        setPage(page + 1);
        const response = await fetch(`/api/products?page=${page + 1}`);
        const data = await response.json();

        const newList = productList.concat(data);
        setProductList(newList);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Product Listing</title>
            </Head>

            <main className={styles.main}>
                <p>Showing {productList.length} products</p>
                <Modal
                    isOpen={isOpen}
                    product={product}
                    handleClose={() => setIsOpen(!isOpen)}
                />
                <ul className={styles.cards}>
                    <InfiniteScroll
                        dataLength={productList.length}
                        next={fetchData}
                        hasMore={productList.length < 50}
                        scrollThreshold="20px"
                        className={styles.scroller}
                        loader={
                            <h4 style={{ textAlign: 'center' }}>Loading...</h4>
                        }
                        endMessage={
                            <h4 style={{ textAlign: 'center' }}>
                                End of product list
                            </h4>
                        }
                    >
                        {productList.map((product) => {
                            const { current } = product.masterData;
                            return (
                                <li
                                    key={product.id}
                                    className={styles.card}
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        setProduct(product);
                                    }}
                                >
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
                                </li>
                            );
                        })}
                    </InfiniteScroll>
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
