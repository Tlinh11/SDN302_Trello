// frontend/src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    { id: 1, name: "Project Alpha", description: "Alpha project description" },
    { id: 2, name: "Project Beta", description: "Beta project description" },
    { id: 3, name: "Project Gamma", description: "Gamma project description" },
  ];

  return (
    <div className="projects-container">
      <h2>All Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
