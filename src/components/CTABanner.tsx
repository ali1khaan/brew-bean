import styles from './CTABanner.module.css';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.text}>Ready for your next cup of happiness?</h2>
      <Link href="/menu" className={styles.button}>View Full Menu</Link>
    </section>
  );
}
