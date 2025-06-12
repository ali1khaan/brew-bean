// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // ✅ imported
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <a href="#main-content" className={styles.skipLink}>Skip to main content</a>
      <Navbar />
      <main id="main-content" className={styles.mainContent} tabIndex={-1}>
        {children}
      </main>
      <Footer /> {}
    </>
  );
}
