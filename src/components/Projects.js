import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <ul>
        <li>
          <span>🛒</span> 
          <a 
            href="https://genuine-jelly-218e80.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Amazon Clone using HTML/CSS/JS
          </a>
        </li>
        <li>
          <span>🎯</span> 
          <a 
            href="https://chipper-dolphin-821450.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Simon Game Challenge using HTML/CSS/JS
          </a>
        </li>
        <li>
          <span>🥁</span> 
          <a 
            href="https://darling-raindrop-b5f078.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Drum Kit Game using HTML/CSS/JS
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
