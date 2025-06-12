import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/404.module.css";

export default function Custom404() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Oops, that page brewed the wrong bean.</p>
        <Link href="/" className={styles.link}>
          Back to Home
        </Link>
      </div>
    </Layout>
  );
}
