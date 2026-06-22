import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ isDarkMode }) => {
  const handleCTA = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`${styles.hero} ${isDarkMode ? styles.dark : ""}`}
    >
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Hi, I'm a Developer</h1>
        <p className={styles.subtitle}>
          Crafting beautiful and responsive web experiences
        </p>
        <p className={styles.description}>
          I specialize in building modern web applications with React, focusing
          on clean code, user experience, and responsive design.
        </p>
        <button className={styles.ctaButton} onClick={handleCTA}>
          Get In Touch
        </button>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.imagePlaceholder}>💻</div>
      </div>
    </section>
  );
};

export default Hero;
