import styles from './Modal.module.css';

export default function Modal({ isOpen, product, handleClose }) {
    const showHideClassName = isOpen
        ? `${styles.modal} ${styles.block}`
        : `${styles.modal} ${styles.none}`;

    if (isOpen && product) {
        const isOrganic = product.masterData.current.masterVariant.attributes.find(
            (el) => el.name === 'Organic'
        )

        return (
            <div className={styles.modal}>
                <section className={styles.modalMain}>
                    <button type="button" onClick={handleClose}>
                        X
                    </button>

                    <h1>{product.masterData.current.name.en}</h1>
                    {isOrganic && isOrganic.value ? (
                        <img src="https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/5e85d71501308335-L2AE6hCf-thumb.jpg" />
                    ) : null}
                </section>
            </div>
        );
    }
    return null;
}
