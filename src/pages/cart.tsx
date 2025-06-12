import styles from './Cart.module.css';
import { useOrder } from '@/context/OrderContext';
import Image from 'next/image';

export default function Cart({ onClose }: { onClose: () => void }) {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useOrder();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxEstimate = +(subtotal * 0.1).toFixed(2);
  const total = +(subtotal + taxEstimate).toFixed(2);

  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cart}>
        <div className={styles.header}>
          <h2>Your Cart</h2>
          <button onClick={onClose}>✖</button>
        </div>

        {cart.length === 0 ? (
          <p className={styles.empty}>Your cart is feeling lonely 😢</p>
        ) : (
          <>
            <div className={styles.items}>
              {cart.map((item) => (
                <div key={item.id} className={styles.item}>
                  {item.image && (
                    <Image src={item.image} alt={item.name} width={60} height={60} />
                  )}
                  <div className={styles.details}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.price}>${item.price.toFixed(2)}</p>
                    <div className={styles.controls}>
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={styles.remove}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.summary}>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Tax: ${taxEstimate.toFixed(2)}</p>
              <hr />
              <p className={styles.total}>Total: ${total.toFixed(2)}</p>
              <button className={styles.checkout}>Proceed to Checkout</button>
              <button className={styles.clear} onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
