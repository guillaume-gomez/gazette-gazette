import React from 'react';
import "./Window.css";
import Toolbar from "./Toolbar";
import { ContentInterface } from "../interfaces";
import { motion } from "framer-motion";


interface WindowInterface {
  toggleShow: () => void;
  toggleFullscreen: () => void;
  windowContent: ContentInterface
  dragConstraints?: any
}

const variantsFullscreen = {
  fullscreen: { width: "100%", maxWidth: "1000px" },
  fullscreenClosed: { width: "100%", maxWidth: "400px" },
  initial: { top: "50%", left: "50%", background: "red" }
}

function Window({ toggleShow, toggleFullscreen, dragConstraints, windowContent: { url, name, fullscreen, show } } : WindowInterface) {
  return (
    <motion.div className="window-container"
      animate={fullscreen ? "fullscreen" : "fullscreenClosed"}
      variants={variantsFullscreen}
      initial={"initial"}
      drag dragConstraints={dragConstraints}
    >
      <div className="window-header">
        <Toolbar minimize={toggleShow} maximize={toggleFullscreen} label={name} />
      </div>
     {/* <div className="window-content">
        <img className="window-image" src={process.env.PUBLIC_URL + url} />
      </div>*/}
    </motion.div>
  );
}

export default Window;