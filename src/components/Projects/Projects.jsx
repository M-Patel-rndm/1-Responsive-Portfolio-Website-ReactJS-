import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = ({ isDarkMode }) => {
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A fully functional e-commerce platform built with React and Redux. Features include product filtering, shopping cart, and checkout flow.",
      tags: ["React", "Redux", "CSS", "JavaScript"],
      link: "#",
      icon: "🛍️",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A responsive task management application with add, edit, delete, and filter functionalities. Built with React hooks and localStorage for data persistence.",
      tags: ["React", "Hooks", "CSS Modules", "localStorage"],
      link: "#",
      icon: "✓",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather application that fetches data from a weather API. Displays current weather, forecasts, and allows location-based searches.",
      tags: ["React", "API", "Fetch", "Responsive Design"],
      link: "#",
      icon: "⛅",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website showcasing projects and skills. Features smooth scrolling, dark mode toggle, and mobile-friendly navigation.",
      tags: ["React", "CSS Modules", "Responsive", "Modern Design"],
      link: "#",
      icon: "💼",
    },
  ];

  return (
    <section
      id="projects"
      className={`${styles.projects} ${isDarkMode ? styles.dark : ""}`}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A selection of projects showcasing my skills and expertise
        </p>

        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
