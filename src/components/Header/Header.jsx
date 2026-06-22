import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isDarkMode ? styles.dark : ""}`}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>Dev</h1>
        </div>

        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ""}`}
        >
          <li>
            <a href="#home" onClick={handleNavClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleNavClick}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
          </li>
        </ul>

        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
