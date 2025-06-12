import styles from './FeaturedMenu.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const drinks = [
  {
    name: 'Signature Espresso',
    image: '/espresso.png',
    description: 'Rich, bold, and smooth. Our expertly pulled espresso shot.',
    price: '$4.50',
  },
  {
    name: 'Iced Caramel Latte',
    image: '/iced-caramel-latte.png',
    description: 'Sweet caramel meets cold, creamy milk and espresso.',
    price: '$7.95',
  },
  {
    name: 'Hazelnut Cold Brew',
    image: '/hazelnut-cold-brew.png',
    description: 'Chilled slow-steeped coffee infused with hazelnut syrup.',
    price: '$7.25',
  },
];

const bakedGoods = [
  {
    name: 'Freshly Baked Croissant',
    image: '/croissant.jpg',
    description: 'Buttery, flaky, and golden. Baked every morning.',
    price: '$3.25',
  },
  {
    name: 'Chocolate Chip Muffin',
    image: '/muffin.jpg',
    description: 'Moist and fluffy with rich chocolate chunks in every bite.',
    price: '$3.75',
  },
  {
    name: 'Cinnamon Roll',
    image: '/cinnamon-roll.jpg',
    description: 'Soft, spiced dough swirled with cinnamon & drizzled glaze.',
    price: '$4.10',
  },
];

export default function FeaturedMenu() {
  const handleBuyNow = (itemName: string) => {
    alert(`🔥 Added "${itemName}" to your cart! Thanks! ☕️`);
  };

  const renderCard = (item: typeof drinks[0], idx: number) => (
    <motion.div
      key={idx}
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.2 }}
    >
      <Image
        src={item.image}
        alt={item.name}
        width={320}
        height={200}
        className={styles.image}
        priority={idx === 0}
      />
      <h4 className={styles.name}>{item.name}</h4>
      <p className={styles.description}>{item.description}</p>
      <span className={styles.price}>{item.price}</span>
      <button
        className={styles.buyButton}
        onClick={() => handleBuyNow(item.name)}
        aria-label={`Buy ${item.name} now`}
      >
        Buy Now
      </button>
    </motion.div>
  );

  return (
    <section className={styles.featured} aria-labelledby="featured-heading">
      <h2 id="featured-heading" className={styles.heading}>Featured Menu</h2>
      <p className={styles.subheading}>
        Handpicked favorites from our customers, crafted with love.
      </p>

      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>Drinks</h3>
        <div className={styles.menuGrid}>
          {drinks.map(renderCard)}
        </div>
      </div>

      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>Baked Goods</h3>
        <div className={styles.menuGrid}>
          {bakedGoods.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
