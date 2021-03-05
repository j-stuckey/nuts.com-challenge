import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Modal, Card, Layout } from 'components';
import styles from 'styles/Home.module.css';
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
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!productList.length) {
      setProductList(products);
      window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
    }
  }, [page]);

  async function fetchData() {
    setPage(page + 1);
    const response = await fetch(`/api/products?page=${page + 1}`);
    const data = await response.json();

    if (data.length < 10) {
      setLoading(false);
    }
    const newList = [...productList, ...data];
    setProductList(newList);
  }

  return (
    <div className={styles.container}>
      <Layout>
        <Head>
          <title>Product Listing</title>
        </Head>

        <main className={styles.main}>
          <p className={styles.title}>Showing {productList.length} products</p>
          <Modal
            isOpen={isOpen}
            product={product}
            handleClose={() => setIsOpen(!isOpen)}
          />
          <ul className={styles.cards}>
            <InfiniteScroll
              dataLength={productList.length}
              next={fetchData}
              hasMore={loading}
              scrollThreshold="20px"
              className={styles.scroller}
              loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
              endMessage={
                <h4 style={{ textAlign: 'center' }}>End of product list</h4>
              }
            >
              {productList.map((product) => {
                const { current } = product.masterData;
                return (
                  <Card
                    id={product.id}
                    name={current.name.en}
                    images={current.masterVariant.images}
                    prices={current.masterVariant.prices}
                    handleClose={() => {
                      setIsOpen(!isOpen);
                      setProduct(product);
                    }}
                  />
                );
              })}
            </InfiniteScroll>
          </ul>
          
        </main>
      </Layout>
    </div>
  );
}
