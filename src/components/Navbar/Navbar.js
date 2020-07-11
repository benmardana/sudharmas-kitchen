import React, { useState } from 'react';
import { Link } from 'gatsby';

import styles from './navbar.module.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav
      className={styles.NavBar}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className={`${styles.NavBarMenu}`}>
        <div className={styles.NavBarLogo}>
          <Link
            className={`${styles.NavBarItem} ${styles.Logo}`}
            to="/"
            title="Logo"
          >
            Sudharma's Kitchen
          </Link>
          {/* Hamburger menu */}
          <div
            className={`${styles.NavBarBurger} ${active && styles.Active}`}
            data-target="navMenu"
            onClick={() => setActive(!active)}
            onKeyDown={(event) =>
              event.key === 'Enter' ? setActive(!active) : undefined
            }
            role="button"
            tabIndex="0"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          className={`${styles.NavBarResponsiveMenu}  ${
            active && styles.Active
          }`}
        >
          <Link className={styles.NavBarItem} to="/recipe">
            Recipes
          </Link>
          <Link className={styles.NavBarItem} to="/about">
            About
          </Link>
          <Link className={styles.NavBarItem} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
