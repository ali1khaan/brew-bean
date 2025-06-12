import React from 'react';
import Layout from '../components/Layout';
import styles from './Menu.module.css';
import { useOrder } from '@/context/OrderContext';
import { FaCoffee, FaLeaf, FaFireAlt, FaClock } from 'react-icons/fa';
import { MdLocalOffer, MdNewReleases } from 'react-icons/md';
import { GiCupcake } from 'react-icons/gi';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  badge: string;
  calories: number;
  dietary: string[];
  available: boolean;
}

interface Props {
  menuItems: MenuItem[];
}

export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products/category/groceries');
  const data = await res.json();

  const menuItems: MenuItem[] = data.products.slice(0, 6).map((item: any, index: number) => ({
    id: item.id,
    name: item.title,
    description: item.description,
    price: `$${item.price}`,
    badge: index % 3 === 0 ? 'Best Seller' : index % 3 === 1 ? 'New' : 'Seasonal',
    calories: 100 + index * 25,
    dietary: index % 2 === 0 ? ['Vegan'] : ['Vegetarian'],
    available: index % 4 !== 0,
  }));

  return {
    props: {
      menuItems,
    },
  };
};

export default function Menu({ menuItems }: Props) {
  const { cart, addToCart } = useOrder();

  const parsePrice = (price: string) => Number(price.replace('$', ''));

  return (
    <Layout>
      <section className={styles.menuSection}>
        <h1 className={styles.title}><FaCoffee /> Our Menu</h1>

        <div className={styles.filters}>
          <button className={styles.filter}><FaCoffee /> Coffee</button>
          <button className={styles.filter}><GiCupcake /> Snacks</button>
          <button className={styles.filter}><MdLocalOffer /> Seasonal</button>
        </div>

        <div className={styles.menuGrid}>
          {menuItems.map(item => (
            <div key={item.id} className={styles.menuItem}>
              <div className={styles.itemHeader}>
                <h2>{item.name}</h2>
                {item.badge === 'Best Seller' && (
                  <span className={styles.badge}><FaFireAlt /> {item.badge}</span>
                )}
                {item.badge === 'New' && (
                  <span className={styles.badge}><MdNewReleases /> {item.badge}</span>
                )}
                {item.badge === 'Seasonal' && (
                  <span className={styles.badge}><MdLocalOffer /> {item.badge}</span>
                )}
              </div>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.meta}>
                <span className={styles.price}>{item.price}</span>
                <span className={styles.calories}>{item.calories} kcal</span>
                {item.dietary.includes('Vegan') && (
                  <span className={styles.diet}><FaLeaf /> Vegan</span>
                )}
                {item.dietary.includes('Vegetarian') && (
                  <span className={styles.diet}><FaLeaf /> Vegetarian</span>
                )}
                {!item.available && (
                  <span className={styles.unavailable}><FaClock /> Unavailable</span>
                )}
              </div>
              <button
                className={styles.button}
                disabled={!item.available}
                onClick={() => {
                  addToCart({
                    id: item.id.toString(),
                    name: item.name,
                    price: parsePrice(item.price),
                    quantity: 1,
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <section className={styles.orderSection}>
          <h2>Your Order</h2>
          {cart.length === 0 ? (
            <p>No items in your order yet.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={`${item.id}-${index}`}>
                  {item.name} - ${item.price.toFixed(2)} × {item.quantity}
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </Layout>
  );
}
