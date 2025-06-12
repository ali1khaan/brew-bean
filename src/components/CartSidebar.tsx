// src/components/CartSidebar.tsx
import React from "react";
import styles from "./CartSidebar.module.css";
import { FaTimes, FaShoppingCart } from "react-icons/fa";
import { useOrder } from "@/context/OrderContext";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart } = useOrder();

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Sidebar"
    >
      <div className={styles.header}>
        <h2>
          <FaShoppingCart /> Your Cart
        </h2>
        <button onClick={onClose} aria-label="Close cart" className={styles.closeBtn}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.content}>
        {cart.length === 0 ? (
          <p>Your cart is empty, get some ☕️!</p>
        ) : (
          <ul className={styles.cartList}>
            {cart.map((item, idx) => (
              <li key={`${item.id}-${idx}`} className={styles.cartItem}>
                <div className={styles.itemName}>{item.name}</div>
                <div>
                  ${item.price.toFixed(2)} × {item.quantity}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
