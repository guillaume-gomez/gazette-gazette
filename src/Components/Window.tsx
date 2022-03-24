import React, { useState, useEffect } from 'react';
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
  fullscreen: { top: 0, left:0, right: 0, x: 0, y: 0 },
  fullscreenClosed: { top: 200, left: 200, right: "calc(100% - 400px)"  },
  initial: { top: 200, left: 200, opacity: 1 },
  close: { width: "0%", opacity: 0, scale: 0 },
  open: { width: "100%", maxWidth: "400px", scale: 1, opacity: 1}
}


function Window({ toggleShow, toggleFullscreen, dragConstraints, windowContent: { url, name, fullscreen, show } } : WindowInterface) {
  const [variant, setVariant] = useState<string>("initial");

  useEffect(() => {
    if(!show) {
      setVariant("close")
    } else {
      setVariant("open")
    }
  }, [show, setVariant])

  useEffect(() => {
    if(!fullscreen) {
      setVariant("fullscreenClosed")
    } else {
      setVariant("fullscreen")
    }
  }, [fullscreen, setVariant])


  return (
    <motion.div className="window-container"
      animate={variant}
      variants={variantsFullscreen}
      initial={"initial"}
      drag={variant !== "fullscreen"} dragConstraints={dragConstraints}
    >
      <div className="window-header">
        <Toolbar minimize={toggleShow} maximize={toggleFullscreen} label={name} />
      </div>
      <div className="window-content">
        <img className="window-image" src={process.env.PUBLIC_URL + url} />
      </div>
    </motion.div>
  );
}

export default Window;