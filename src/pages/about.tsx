import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './About.module.css';
import Link from 'next/link'; 

const stats = [
  { label: 'Years Brewing', value: 7 },
  { label: 'Happy Customers', value: 1200 },
  { label: 'Beans Roasted', value: 35000 },
];

const team = [
  { name: 'Ali', role: 'Head Barista', img: '/ali.jpg' },
  { name: 'Maya', role: 'Coffee Roaster', img: '/maya.png' },
  { name: 'Jax', role: 'Cafe Manager', img: '/jax.jpg' },
];

type AnimatedNumberProps = {
  value: number;
  duration?: number;
};

function AnimatedNumber({ value, duration = 2000 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value); 
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  return <span>{displayValue}</span>;
}

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout>
      <section className={styles.aboutSection} aria-labelledby="about-title">
        <motion.h1
          id="about-title"
          className={styles.title}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          About Brew & Bean
        </motion.h1>

        <motion.p
          className={styles.paragraph}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        >
          At Brew & Bean Café, we’re not just serving coffee — we’re crafting experiences. 
          Our space was designed to feel like home, and every bean we brew carries a tale of warmth, culture, and connection.
        </motion.p>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
        >
          <Image
            src="/about-coffee-cup.jpg"
            alt="Beautifully crafted cup of coffee on a rustic wooden table"
            width={900}
            height={600}
            className={styles.image}
            priority
          />
        </motion.div>

        <motion.p
          className={styles.quote}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9, ease: 'easeOut' }}
        >
          “Every cup is a chapter — come write your story with us.”
        </motion.p>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9, ease: 'easeOut' }}
          aria-label="Cafe statistics"
          style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '4rem' }}
        >
          {stats.map(({ label, value }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <motion.span 
                style={{ fontSize: '2.8rem', fontWeight: '700', color: 'var(--roasted-gold)' }}
              >
                <AnimatedNumber value={value} />
              </motion.span>
              <p style={{ color: 'var(--cream-tan)', marginTop: '0.3rem', fontWeight: '600' }}>{label}</p>
            </div>
          ))}
        </motion.div>

        <section style={{ marginTop: '6rem', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--roasted-gold)', fontSize: '2.8rem', marginBottom: '2rem' }}>Meet The Team</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {team.map(({ name, role, img }) => (
              <motion.div 
                key={name} 
                style={{ maxWidth: 180, cursor: 'pointer', borderRadius: 14, overflow: 'hidden', boxShadow: '0 6px 16px rgba(0,0,0,0.1)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(140,94,60,0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image src={img} alt={`${name} - ${role}`} width={180} height={180} style={{ borderRadius: 14 }} />
                <div style={{ padding: '0.8rem', backgroundColor: 'var(--faded-brown)', color: 'var(--espresso)', fontWeight: 600 }}>
                  <p>{name}</p>
                  <small style={{ color: 'var(--caramel)', fontWeight: 400 }}>{role}</small>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

         
        <motion.div
          style={{
            marginTop: '6rem',
            padding: '3rem 2rem',
            background: 'var(--faded-brown)',
            borderRadius: '1.5rem',
            maxWidth: 720,
            marginLeft: 'auto',
            marginRight: 'auto',
            boxShadow: '0 4px 20px rgba(140, 94, 60, 0.1)',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.7 }}
        >
          <h3 style={{ color: 'var(--roasted-gold)', fontSize: '2rem', marginBottom: '1rem' }}>
            Ready to experience the magic?
          </h3>

          <Link
  href="/contact"
  style={{
    display: 'inline-block',
    backgroundColor: isHovered ? '#c69c6d' : 'var(--espresso)',
    color: '#fff',
    padding: '1rem 2.5rem',
    borderRadius: 12,
    fontWeight: 700,
    fontSize: '1.1rem',
    textDecoration: 'none',
    boxShadow: '0 6px 18px rgba(140, 94, 60, 0.3)',
    transition: 'background-color 0.3s ease'
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  Contact Us
</Link>
        </motion.div>
      </section>
    </Layout>
  );
}
