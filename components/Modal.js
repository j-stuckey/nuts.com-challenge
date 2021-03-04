import Image from 'next/image';
import styles from './Modal.module.css';

export default function Modal({ isOpen, product, handleClose }) {
    const showHideClassName = isOpen
        ? `${styles.modal} ${styles.block}`
        : `${styles.modal} ${styles.none}`;

    if (isOpen && product) {
        const isOrganic = product.masterData.current.masterVariant.attributes.find(
            (el) => el.name === 'Organic'
        );
        console.log(product);
        return (
            <div className={styles.modal}>
                <section className={styles.modalMain}>
                    <button
                        type="button"
                        onClick={handleClose}
                        className={styles.close}
                    >
                        X
                    </button>
                    <div className={styles.content}>
                        <h1 className={styles.name}>
                            {product.masterData.current.name.en}
                        </h1>
                        <div className={styles.images}>
                            {isOrganic && isOrganic.value ? (
                                <Image
                                    src="https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/5e85d71501308335-L2AE6hCf-thumb.jpg"
                                    layout="intrinsic"
                                    width={40}
                                    height={30}
                                />
                            ) : null}
                            <Image
                                src={
                                    product.masterData.current.masterVariant
                                        .images[0]
                                        ? product.masterData.current
                                              .masterVariant.images[0].url
                                        : 'https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/ece4edb2868a8225.cro-U2aFaCJE.jpg'
                                }
                                width={220}
                                height={300}
                                layout="intrinsic"
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    return null;
}
