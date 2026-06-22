import React from "react";
import SkillCard from "./SkillCard";
import styles from "./Skills.module.css";

const Skills = ({ isDarkMode }) => {
  const skillsData = [
    {
      id: 1,
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
      icon: "🎨",
    },
    {
      id: 2,
      title: "State Management",
      skills: ["Redux", "Context API", "Hooks", "State Patterns"],
      icon: "⚙️",
    },
    {
      id: 3,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "npm/yarn"],
      icon: "🛠️",
    },
    {
      id: 4,
      title: "Styling",
      skills: ["CSS3", "CSS Modules", "Flexbox", "Grid"],
      icon: "🎭",
    },
    {
      id: 5,
      title: "Testing",
      skills: [
        "Unit Testing",
        "Integration Testing",
        "Jest",
        "React Testing Library",
      ],
      icon: "✅",
    },
    {
      id: 6,
      title: "Performance",
      skills: ["Code Optimization", "Lazy Loading", "Caching", "SEO"],
      icon: "⚡",
    },
  ];

  return (
    <section
      id="skills"
      className={`${styles.skills} ${isDarkMode ? styles.dark : ""}`}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>My Skills</h2>
        <p className={styles.subtitle}>
          A comprehensive list of my technical expertise and capabilities
        </p>

        <div className={styles.skillsGrid}>
          {skillsData.map((skill) => (
            <SkillCard key={skill.id} skill={skill} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
