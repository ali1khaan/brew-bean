import Layout from '../components/Layout';
import styles from './Shop.module.css';
import Image from 'next/image';
import { FaShoppingCart, FaMugHot } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Brew & Bean Signature Beans',
    description: 'Medium roast, ethically sourced beans with chocolatey notes.',
    price: '$14.99',
    image: '/beans.jpg',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Reusable Coffee Cup',
    description: 'Sustainable cup with thermal insulation. 12oz.',
    price: '$9.99',
    image: '/cup.jpg',
    tag: 'Eco Friendly',
  },
  {
    id: 3,
    name: 'Cafe Crew T-Shirt',
    description: 'Comfy, cotton tee with our café logo.',
    price: '$19.99',
    image: '/shirt.jpg',
    tag: 'New Arrival',
  },
];

export default function Shop() {
  return (
    <Layout>
      <section className={styles.shopSection}>
        <h1 className={styles.title}><FaMugHot /> Brew & Bean Shop</h1>
        <p className={styles.subtitle}>Bring the café home. Shop our signature beans and merch.</p>

        <div className={styles.grid}>
          {products.map(product => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={product.image} alt={product.name} width={300} height={200} />
              </div>
              <h2 className={styles.name}>{product.name}</h2>
              <p className={styles.description}>{product.description}</p>
              <span className={styles.price}>{product.price}</span>
              <span className={styles.tag}>
                {product.tag === 'Best Seller' && <FaMugHot />} {product.tag}
              </span>
              <button className={styles.button}><FaShoppingCart /> Buy Now</button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
