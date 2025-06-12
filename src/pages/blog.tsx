import Layout from '../components/Layout';
import styles from './Blog.module.css';
import Image from 'next/image';
import { FaCoffee, FaCalendarAlt, FaTag } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'The Journey of Our Beans',
    summary: 'From the hills of Colombia to your cup — learn about how our beans make the journey.',
    date: 'June 5, 2025',
    tag: 'Sustainability',
    image: '/blog-beans.jpg',
  },
  {
    id: 2,
    title: 'Barista Tips: Perfect Latte Art',
    summary: 'Master the basics of latte art at home with these simple tips from our baristas.',
    date: 'May 28, 2025',
    tag: 'Tips & Tricks',
    image: '/blog-latte.jpg',
  },
  {
    id: 3,
    title: 'Why We Love Seasonal Drinks',
    summary: 'Pumpkin spice, peppermint mochas, and everything nice. Here’s why seasonal drinks matter.',
    date: 'May 10, 2025',
    tag: 'Cafe Life',
    image: '/blog-seasonal.jpg',
  },
];

export default function Blog() {
  return (
    <Layout>
      <section className={styles.blogSection}>
        <h1 className={styles.title}><FaCoffee /> Brew & Bean Blog</h1>
        <p className={styles.subtitle}>Latest stories, tips, and everything coffee.</p>

        <div className={styles.grid}>
          {blogPosts.map(post => (
            <div key={post.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={post.image} alt={post.title} width={400} height={250} />
              </div>
              <div className={styles.content}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.summary}>{post.summary}</p>
                <div className={styles.meta}>
                  <span><FaCalendarAlt /> {post.date}</span>
                  <span><FaTag /> {post.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
