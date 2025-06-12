import styles from './LocationHours.module.css';

export default function LocationHours() {
  return (
    <section 
      className={styles.location} 
      aria-labelledby="location-heading"
      role="region"
    >
      <h2 id="location-heading" className={styles.heading}>Find Us</h2>
      <p className={styles.subheading}>Visit us at our cozy downtown location</p>
      
      <div className={styles.infoBox}>
        <address>
          <h3 className={styles.title}>Location</h3>
          <p>
            123 Brew Street<br />
            Coffeeville, CA 90210
          </p>
        </address>

        <div>
          <h3 className={styles.title}>Opening Hours</h3>
          <p>
            Mon – Fri: 7:00 AM – 7:00 PM<br />
            Sat – Sun: 8:00 AM – 5:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}
