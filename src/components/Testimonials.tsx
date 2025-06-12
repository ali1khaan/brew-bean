import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Emily R.',
    quote: 'The best coffee in town! The espresso is rich and smooth. I love the cozy vibe!',
  },
  {
    name: 'James D.',
    quote: 'Absolutely love the croissants and hazelnut cold brew. Great service too!',
  },
  {
    name: 'Sophia M.',
    quote: 'Always my go-to café for studying. Calm atmosphere, great playlists, and strong lattes.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>Customer Reviews</h2>
      <p className={styles.subheading}>See what our regulars are saying about us</p>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.quote}>&quot;{t.quote}&quot;</p>
            <span className={styles.name}>— {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
