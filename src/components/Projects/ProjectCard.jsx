import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, isDarkMode }) => {
  return (
    <div className={`${styles.projectCard} ${isDarkMode ? styles.dark : ""}`}>
      <div className={styles.projectHeader}>
        <div className={styles.iconContainer}>{project.icon}</div>
        <h3 className={styles.title}>{project.title}</h3>
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.tags}>
        {project.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <a href={project.link} className={styles.link}>
        View Project →
      </a>
    </div>
  );
};

export default ProjectCard;
