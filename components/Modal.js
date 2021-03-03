import styles from './Modal.module.css';

export default function Modal({ isOpen, product, handleClose }) {
    const showHideClassName = isOpen
        ? `${styles.modal} ${styles.block}`
        : `${styles.modal} ${styles.none}`;

    const { current } = product.masterData;
    if (isOpen) {
        return (
            <div className={styles.modal}>
                <section className={styles.modalMain}>
                    <button type="button" onClick={handleClose}>
                        X
                    </button>

                    <h1>{current.name.en}</h1>
                </section>
            </div>
        );
    }
    return null;
}
