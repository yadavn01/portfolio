import React from 'react'
import "../styles/Projects.css";

// Sample project data
const projects = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Description of project 1...',
    technologies: ['React', 'JavaScript', 'CSS'],
    githubLink: 'https://github.com/project1',
    demoLink: 'https://demo.project1.com',
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Description of project 2...',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/project2',
    demoLink: 'https://demo.project2.com',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="projects">
      <div className="items">
      {projects.map((project) => (
        <div key={project.id} className="project">
          <p>{project.name}</p>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(', ')}</p>
          <div className="project-links">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Projects;