import React from 'react';
import "./Window.css";
import Toolbar from "./Toolbar";
import { ContentInterface } from "../interfaces";
import { motion } from "framer-motion";


interface WindowInterface {
  toggleShow: () => void;
  toggleFullscreen: () => void;
  windowContent: ContentInterface
}

const variantsFullscreen = {
  fullscreen: { width: "unset", maxWidth: "400px" },
  fullscreenClosed: { width: "100%", maxWidth: "400px" },
}

function Window({ toggleShow, toggleFullscreen, windowContent: { url, name, fullscreen } } : WindowInterface) {
  return (
    <div className="window-container">
      <div className="window-header">
        <Toolbar minimize={toggleFullscreen} maximize={toggleShow} label={name} />
      </div>
      <div className="window-content">
        <img className="window-image" src={process.env.PUBLIC_URL + url} />
      </div>
    </div>
  );
}

export default Window;