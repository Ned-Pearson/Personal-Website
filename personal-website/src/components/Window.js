import React from "react";
import { Rnd } from "react-rnd";

const Window = ({ id, title, content, zIndex, closeWindow, bringToFront }) => {
    return (
        <Rnd
            default = {{ x: 100, y: 100, width: 400, height: 200 }}
            minWidth={300}
            minHeight={150}
            bounds= "window"
            className="window"
            style={{ zIndex }} 
            onMouseDown={() => bringToFront(id)}
        >
            <div className="window-header">
                <span>{title}</span>
                <button onClick={() => closeWindow(id)}>X</button>
            </div>
            <div className="window-content">{content}</div>
        </Rnd>
    );
};

export default Window;