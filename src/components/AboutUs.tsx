import { motion } from 'framer-motion';
import styles from './AboutUs.module.css';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 id="about-title" className={styles.title}>
          Our Story
        </h2>
        <p className={styles.text}>
          <strong>Brew & Bean Café</strong> was born from a passion for exceptional coffee and{' '}
          a desire to build a cozy haven where the community feels at home.
          Every cup is crafted with intention using ethically sourced beans and{' '}
          a love for the process.
        </p>
        <p className={styles.text}>
          Whether you&apos;re catching up with friends, grabbing a moment of peace,
          or working on your next big idea — Brew & Bean is your daily retreat.
        </p>
      </motion.div>

      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src="/about-coffee-cup.jpg"
          alt="Latte art coffee in a ceramic mug on a rustic wooden table"
          width={600}
          height={400}
          className={styles.image}
          priority
        />
      </motion.div>
    </section>
  );
}
