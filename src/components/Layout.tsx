"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { FaCoffee, FaShoppingCart } from "react-icons/fa"
import { useOrder } from "@/context/OrderContext"
import styles from "./Layout.module.css"

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title = "Brew & Beans Cafe" }) => {
  const { getTotalItems } = useOrder()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before showing cart count to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Brew & Beans Cafe - Fresh coffee and delicious treats" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <FaCoffee style={{ marginRight: "0.5rem" }} />
          Brew & Beans
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/cart" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaShoppingCart />
              <span
                style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  borderRadius: "50%",
                  width: "1.5rem",
                  height: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  minWidth: "1.5rem",
                }}
              >
                {mounted ? getTotalItems() : 0}
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      <main className={styles.mainContent}>{children}</main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Brew & Beans Cafe. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
