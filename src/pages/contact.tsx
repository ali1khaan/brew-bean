import { useState } from 'react';
import Layout from '../components/Layout';
import styles from './Contact.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you’d add API call or email sending logic.
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className={styles.contactSection}>
        <h1>Contact Us</h1>
        <p>Reach out for inquiries or feedback. We promise we don’t bite 🦷.</p>

        <div className={styles.contactInfo}>
          <p><FaPhone /> Phone: +1 (555) 123-4567</p>
          <p><FaEnvelope /> Email: hello@yourcoffee.com</p>
          <p><FaMapMarkerAlt /> Location: 123 Coffee St, Caffeine City</p>
        </div>

        {submitted ? (
          <div className={styles.thanksMessage}>
            <h2>Thanks for reaching out!</h2>
            <p>We’ll get back to you faster than your espresso shot pulls ☕️.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Name
              <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                required 
                placeholder="Your Name" 
              />
            </label>

            <label>
              Email
              <input 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                required 
                placeholder="you@example.com" 
              />
            </label>

            <label>
              Message
              <textarea 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                required 
                placeholder="Tell us what’s brewing in your mind..." 
                rows={5} 
              />
            </label>

            <button type="submit" className={styles.submitButton}>
              <FaPaperPlane /> Send Message
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
}
