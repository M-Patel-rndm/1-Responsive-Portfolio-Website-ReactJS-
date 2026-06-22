import React from "react";
import styles from "./About.module.css";

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className={`${styles.about} ${isDarkMode ? styles.dark : ""}`}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.avatarPlaceholder}>👨‍💻</div>
          </div>

          <div className={styles.textSection}>
            <p className={styles.paragraph}>
              I'm a passionate developer with a love for creating beautiful,
              functional web applications. With expertise in React and modern
              JavaScript, I build responsive interfaces that work seamlessly
              across all devices.
            </p>

            <p className={styles.paragraph}>
              When I'm not coding, I love learning new technologies,
              contributing to open-source projects, and sharing knowledge with
              the developer community. I believe in writing clean, maintainable
              code and delivering exceptional user experiences.
            </p>

            <p className={styles.paragraph}>
              My journey in web development started with curiosity and has
              evolved into a passion for crafting digital solutions that solve
              real problems. I'm always eager to take on new challenges and grow
              as a developer.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.stat}>
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className={styles.stat}>
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
