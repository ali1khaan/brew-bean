import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useOrder } from "@/context/OrderContext"; 
import CartSidebar from "./CartSidebar"; 

export default function Navbar() {
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { cart } = useOrder();

  
  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    setScrollUp(currentScroll < lastScrollY || currentScroll < 10);
    setLastScrollY(currentScroll);
  }, [lastScrollY]); 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); 

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" },
    { label: "Shop", path: "/shop" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
    { label: "Careers", path: "/careers" },
    { label: "Privacy", path: "/privacy" },
    { label: "Terms", path: "/terms" },
  ];

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className={`${styles.nav} ${!scrollUp ? styles.hide : ""}`}>
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <span className={styles.logoText}>
              Brew <span className={styles.highlight}>&</span> Bean
            </span>
          </Link>
        </motion.div>

        <div
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          role="button"
          tabIndex={0}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <ul className={`${styles.navList} ${menuOpen ? styles.showMenu : ""}`}>
          {navItems.map(({ label, path }, idx) => (
            <li key={idx}>
              <Link href={path} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={styles.cartButton}
          onClick={() => setCartOpen(!cartOpen)}
          aria-label="Toggle cart"
        >
          <FaShoppingCart />
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
        </button>
      </nav>

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
