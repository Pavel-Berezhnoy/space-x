import React from 'react';
import styles from './styles/Header.module.css';
import wrapper from './styles/App.module.css';
import { useMemo, useState } from 'react';

export default function Header() {
  const [activeMobileMenu, setActiveMobile] = useState(false);
  const navMenu = useMemo(() => {
    return [
      'Главная',
      'Технологии',
      'График полетов',
      'Гарантии',
      'О компании',
      'Контакты',
    ]
  }, []);
  return (
    <header className={styles.Header}>
      <div className={`${styles.HeaderContainer} ${wrapper.WrapperContainer}`}>
        <div className={styles.LogoContainer}>
          <img className={styles.Logo} src="/images/logo.png" alt="" />
        </div>
        <nav className={styles.Nav}>
          <div onClick={() => setActiveMobile(!activeMobileMenu)} className={activeMobileMenu ? `${styles.Burger} ${styles.active}` : `${styles.Burger}`}>
            <span></span>
          </div>
          <ul className={activeMobileMenu ? `${styles.NavMenu} ${styles.active}` : `${styles.NavMenu}`}>
            {navMenu.map(navItem => <NavItem key={navItem} item={navItem} />)}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function NavItem({ item }) {
  return <li><a className={styles.NavMenuItem} href="#">{item}</a></li>
}

