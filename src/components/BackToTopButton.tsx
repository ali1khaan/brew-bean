import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './BackToTopButton.module.css';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.backToTop} ${visible ? styles.visible : ''}`}
      aria-label="Back to top"
      title="Back to top"
    >
      <FaArrowUp size={24} />
    </button>
  );
}
