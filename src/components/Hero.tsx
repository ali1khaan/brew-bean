import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`${styles.hero} ${animate ? styles.animate : ''}`}
      aria-label="Hero section welcoming to Brew & Bean Cafe"
      role="region"
    >
      <div className={styles.imageWrapper} role="img" aria-label="Coffee brewing in Brew & Bean Cafe">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={100}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content} style={{ transitionDelay: animate ? '0.3s' : '0s' }}>
        <h1 className={styles.title}>Fresh Coffee, Expertly Crafted</h1>
        <p className={styles.subtitle}>
          At Brew & Bean Café, every cup is a story — rich, warm, and unforgettable.
        </p>
        <Link href="/menu" className={styles.ctaButton}>
          Explore Our Menu
        </Link>
      </div>
    </section>
  );
}
