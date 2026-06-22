import React from "react";
import styles from "./SkillCard.module.css";

const SkillCard = ({ skill, isDarkMode }) => {
  return (
    <div className={`${styles.skillCard} ${isDarkMode ? styles.dark : ""}`}>
      <div className={styles.icon}>{skill.icon}</div>
      <h3 className={styles.title}>{skill.title}</h3>
      <ul className={styles.skillsList}>
        {skill.skills.map((item, index) => (
          <li key={index} className={styles.skillItem}>
            ✓ {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
