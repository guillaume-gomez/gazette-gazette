import React, { useState, useEffect } from 'react';
import "./Window.css";
import Toolbar from "./Toolbar";
import { ContentInterface, WindowStateType } from "../interfaces";
import { motion } from "framer-motion";


interface WindowInterface {
  changeWindowState: (newState : WindowStateType) => void;
  windowContent: ContentInterface
  dragConstraints?: any
}

const variants = {
  fullscreen: { width: "100%", maxWidth: "100%", scale: 1, opacity: 1, top: 0, left:0, right: 0, x: 0, y: 0  },
  close: { scale: 0, opacity: 0 },
  open: { width: "100%", maxWidth: "25%", scale: 1, opacity: 1, top: 200, left: 200, right: "75%"}
}


function Window({ changeWindowState, dragConstraints, windowContent: { url, name, windowState } } : WindowInterface) {
  const [variant, setVariant] = useState<string>("open");

  useEffect(() => {
    switch(windowState) {
      case "opened":
      default:
        setVariant("open")
      break;
      case "closed":
        setVariant("close")
      break;
      case "fullscreen":
        setVariant("fullscreen")
      break;
    }
  }, [windowState, setVariant])

  return (
    <motion.div className="window-container"
      animate={variant}
      variants={variants}
      initial={"open"}
      drag={variant !== "fullscreen"} dragConstraints={dragConstraints}
    >
      <div className="window-header">
        <Toolbar
          close={() =>  changeWindowState("closed")}
          minimize={() => changeWindowState("opened")}
          maximize={() => changeWindowState("fullscreen")}
          label={name}
        />
      </div>
      <div className="window-content">
        <img className="window-image" src={process.env.PUBLIC_URL + url} />
      </div>
    </motion.div>
  );
}

export default Window;