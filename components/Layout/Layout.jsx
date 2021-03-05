import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
        <div
          className={styles.bottomDiv}
        >
          <button
            className={styles.backToTop}
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
            }
          >
            Back to top
          </button>
        </div>
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

export default Layout;
