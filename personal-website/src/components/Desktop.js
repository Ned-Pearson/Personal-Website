import React, { useState } from "react";
import Window from "./Window";
import "../styles.css";

const projects = [
  { id: "project1", title: "Project 1", content: "Details about Project 1" },
  { id: "project2", title: "Project 2", content: "Details about Project 2" },
  { id: "project3", title: "Project 3", content: "Details about Project 3" }
];

const Desktop = () => {
  const [windows, setWindows] = useState([]);

  const openWindow = (id, title, content) => {
    setWindows([{ id, title, content, zIndex: 1 }]); // Close all other windows before opening a new one
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };

  const bringToFront = (id) => {
    setWindows((prev) => prev.map((win) =>
      win.id === id ? { ...win, zIndex: prev.length + 1 } : win
    ));
  };

  return (
    <div className="desktop">
      <div className="folder-container">
        <div className="icon folder" onClick={() => openWindow("about", "About", "About Me Content")}>📂 About</div>
        <div className="icon folder" onClick={() => openWindow("projects", "Projects", 
          <ul>
            {projects.map((project) => (
              <li key={project.id} onClick={() => openWindow(project.id, project.title, project.content)}>
                {project.title}
              </li>
            ))}
          </ul>
        )}>📂 Projects</div>
        <div className="icon folder" onClick={() => openWindow("contact", "Contact", "Contact Info")}>📂 Contact</div>
      </div>
      
      {windows.map((window) => (
        <Window key={window.id} {...window} closeWindow={closeWindow} bringToFront={bringToFront} />
      ))}
    </div>
  );
};

export default Desktop;
