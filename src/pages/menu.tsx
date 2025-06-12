'use client';
import React from 'react';
import toast from 'react-hot-toast';
import Layout from '../components/Layout';
import styles from './Menu.module.css';
import { useOrder } from '@/context/OrderContext';
import { FaCoffee, FaLeaf, FaShoppingCart, FaFireAlt, FaClock } from 'react-icons/fa';
import { MdLocalOffer, MdNewReleases } from 'react-icons/md';
import { GiCupcake } from 'react-icons/gi';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string;
  badge: string;
  calories: number;
  dietary: string[];
  available: boolean;
}

export default function Menu() {
  const { cart, addToCart } = useOrder();

  const parsePrice = (price: string) => Number(price.replace('$', ''));

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Caramel Latte',
      description: 'Smooth espresso with velvety caramel and steamed milk.',
      category: 'Coffee',
      price: '$5.20',
      badge: 'Best Seller',
      calories: 180,
      dietary: ['Vegetarian'],
      available: true,
    },
    {
      id: 2,
      name: 'Vegan Chocolate Muffin',
      description: 'Rich chocolate muffin made with plant-based ingredients.',
      category: 'Snacks',
      price: '$3.80',
      badge: 'New',
      calories: 290,
      dietary: ['Vegan'],
      available: true,
    },
    {
      id: 3,
      name: 'Pumpkin Spice Latte',
      description: 'A seasonal classic with cinnamon, nutmeg, and pumpkin goodness.',
      category: 'Seasonal',
      price: '$5.80',
      badge: 'Seasonal',
      calories: 210,
      dietary: ['Vegetarian'],
      available: false,
    },
    {
      id: 4,
      name: 'Espresso Shot',
      description: 'Strong and bold, served straight up.',
      category: 'Coffee',
      price: '$2.50',
      badge: 'Best Seller',
      calories: 5,
      dietary: ['Vegan'],
      available: true,
    },
    {
      id: 5,
      name: 'Blueberry Muffin',
      description: 'Soft muffin packed with juicy blueberries.',
      category: 'Snacks',
      price: '$3.50',
      badge: '',
      calories: 310,
      dietary: ['Vegetarian'],
      available: true,
    },
    {
      id: 6,
      name: 'Iced Americano',
      description: 'Chilled espresso over ice for that cool caffeine hit.',
      category: 'Coffee',
      price: '$4.00',
      badge: 'New',
      calories: 15,
      dietary: ['Vegan'],
      available: true,
    },
    {
      id: 7,
      name: 'Cinnamon Roll',
      description: 'Warm roll with cinnamon swirl and creamy glaze.',
      category: 'Snacks',
      price: '$4.10',
      badge: 'Seasonal',
      calories: 420,
      dietary: ['Vegetarian'],
      available: false,
    },
    {
      id: 8,
      name: 'Matcha Latte',
      description: 'Japanese matcha green tea with steamed milk.',
      category: 'Coffee',
      price: '$5.50',
      badge: '',
      calories: 130,
      dietary: ['Vegetarian'],
      available: true,
    },
    {
      id: 9,
      name: 'Chai Latte',
      description: 'Spiced tea blend with steamed milk and sweet notes.',
      category: 'Coffee',
      price: '$5.00',
      badge: '',
      calories: 160,
      dietary: ['Vegetarian'],
      available: true,
    },
    {
      id: 10,
      name: 'Salted Caramel Brownie',
      description: 'Decadent brownie with hints of sea salt and gooey caramel.',
      category: 'Snacks',
      price: '$4.80',
      badge: 'Best Seller',
      calories: 400,
      dietary: ['Vegetarian'],
      available: true,
    },
    {
      id: 11,
      name: 'Iced Lemon Tea',
      description: 'Refreshing citrus tea, lightly sweetened.',
      category: 'Seasonal',
      price: '$3.90',
      badge: 'Seasonal',
      calories: 90,
      dietary: ['Vegan'],
      available: true,
    },
    {
      id: 12,
      name: 'Gluten-Free Banana Bread',
      description: 'Moist banana bread made gluten-free with almond flour.',
      category: 'Snacks',
      price: '$4.60',
      badge: 'New',
      calories: 250,
      dietary: ['Vegan'],
      available: true,
    },
    // New Items Added Below 🔥
    {
      id: 13,
      name: 'Flat White',
      description: 'Creamy espresso with steamed milk, the Aussie classic.',
      category: 'Coffee',
      price: '$4.80',
      badge: '',
      calories: 150,
      dietary: ['Vegetarian'],
      available: true,
    },
    {
      id: 14,
      name: 'Mocha',
      description: 'Espresso with chocolate syrup and steamed milk.',
      category: 'Coffee',
      price: '$5.30',
      badge: 'Best Seller',
      calories: 220,
      dietary: ['Vegetarian'],
      available: true,
    },
    {
      id: 15,
      name: 'Avocado Toast',
      description: 'Sourdough toast topped with smashed avocado and chili flakes.',
      category: 'Snacks',
      price: '$6.50',
      badge: 'New',
      calories: 310,
      dietary: ['Vegan'],
      available: true,
    },
    {
      id: 16,
      name: 'Berry Smoothie Bowl',
      description: 'Mixed berries, banana, and granola in a refreshing smoothie bowl.',
      category: 'Snacks',
      price: '$7.00',
      badge: '',
      calories: 350,
      dietary: ['Vegan'],
      available: true,
    },
    {
      id: 17,
      name: 'Herbal Tea',
      description: 'A soothing blend of chamomile, lavender, and mint.',
      category: 'Seasonal',
      price: '$3.50',
      badge: '',
      calories: 0,
      dietary: ['Vegan'],
      available: true,
    },
    {
      id: 18,
      name: 'Iced Matcha Lemonade',
      description: 'Refreshing iced matcha combined with zesty lemonade.',
      category: 'Seasonal',
      price: '$5.90',
      badge: 'New',
      calories: 120,
      dietary: ['Vegan'],
      available: true,
    },
    {
      id: 19,
      name: 'Peach Iced Tea',
      description: 'Sweet and fruity iced tea with a fresh peach twist.',
      category: 'Seasonal',
      price: '$4.20',
      badge: '',
      calories: 100,
      dietary: ['Vegan'],
      available: true,
    },
    {
      id: 20,
      name: 'Chocolate Chip Cookie',
      description: 'Classic cookie loaded with gooey chocolate chips.',
      category: 'Snacks',
      price: '$2.80',
      badge: '',
      calories: 320,
      dietary: ['Vegetarian'],
      available: true,
    },
  ];

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
    // ❌ Remove this line
    // toast.success(`${item.name} added to cart!`);
  }}
>
  Add to Cart
</button>

            </div>
          ))}
        </div>

        {/* Display current order */}
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
