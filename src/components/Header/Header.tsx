import { useState } from 'react';
import styles from './Header.module.css';
import { NavBar } from './NavBar/NavBar';

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const closeMenu = () => setShowMenu(false);

  return (
    <header className={styles.header}>
      <div className={styles.header_icon}>
        <div className={styles.ellipse1}></div>
        <div className={styles.ellipse2}></div>
        <span className={`${styles.text_logo} ${showMenu && styles.text_logo_black}`}>testLab</span>
      </div>
      <NavBar onLinkClick={closeMenu} className={styles.header_navbar} />
      <button
        className={`${styles.button_menu} ${showMenu ? styles.open : ''}`}
        onClick={() => setShowMenu((prev) => !prev)}>
        <div></div>
        <div></div>
      </button>
      {showMenu && (
        <div className={styles.menu}>
          <NavBar onLinkClick={closeMenu} className={styles.menu_navbar} />
        </div>
      )}
    </header>
  );
};
