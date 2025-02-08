import React, {useState} from "react";
import Window from "./Window";

const Desktop = () => {
    const [windows, setWindows] = useState([]);

    const openWindow = (id, title, content) => {
        setWindows((prev) => [...prev, {id, title, content, zIndex: prev.length + 1}]);
    };

    const closeWindow = (id) => {
        setWindows((prev) => prev.filter((window) => window.id !== id));
    };

    const bringToFront = (id) => {
        setWindows((prev) => prev.map((window) => 
            window.id === id ? {...window, zIndex: prev.length} : window
        ));
    };

    return (
        <div className="desktop">
            <div className="icon" onClick={() => openWindow("about", "About", "About Me Content")}>📂 About</div>
            <div className="icon" onClick={() => openWindow("projects", "Projects", "Projects Content")}>📂 Projects</div>
            <div className="icon" onClick={() => openWindow("contact", "Contact", "Contact Content")}>📂 Contact</div>

            {windows.map((window) => (
                <Window key={window.id} {...window} closeWindow={closeWindow} bringToFront={bringToFront} />
            ))}
        </div>
    );
};

export default Desktop;
