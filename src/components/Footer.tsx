
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Brew & Bean. All rights reserved.</p>
      <div className={styles.links}>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        
        <a
          href="https://www.instagram.com/starbucks/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.externalLink}
        >
          Starbucks Insta
        </a>
      </div>
    </footer>
  );
}
