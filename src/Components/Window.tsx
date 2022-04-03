import React, { useState, useEffect } from 'react';
import "./Window.css";
import Toolbar from "./Toolbar";
import { ContentInterface, WindowStateType } from "../interfaces";
import { motion } from "framer-motion";
import useMediaQuery from "../reducers/useMediaQuery";


interface WindowInterface {
  changeWindowState: (newState : WindowStateType) => void;
  windowContent: ContentInterface;
  dragConstraints?: any;
}


function Window({
    changeWindowState,
    dragConstraints,
    windowContent: { url, name, windowState, originalX, originalY, order
  }
} : WindowInterface) {
  const [variant, setVariant] = useState<string>("initial");
  const isMedium = useMediaQuery('(max-width: 768px)');

  const variants = {
    fullscreen: { width: "100%", maxWidth: "100%", scale: 1, opacity: 1, top: 0, left:0, right: 0, x: 0, y: 0  },
    close: { scale: 0, opacity: 0, maxWidth: "100%" },
    open: { width: "100%", maxWidth: "25%", scale: 1, opacity: 1, right: "75%"},
    initial: { width: "100%", maxWidth: "25%", scale: 1, opacity: 1, top: originalY, left: originalX, right: "75%"}
  }
  useEffect(() => {
    switch(windowState) {
      case "opened":
        setVariant("open")
      break;
      case "closed":
        setVariant("close")
      break;
      case "fullscreen":
        setVariant("fullscreen")
      break;
      default:
        setVariant("initial");
      break;
    }
  }, [windowState, setVariant]);

  function windowContent() {
    return (
      <>
        <div className="window-header" onClick={() => changeWindowState("clicked")}>
          <Toolbar
            close={(event) => { changeWindowState("closed"); event.stopPropagation() }}
            minimize={(event) => { changeWindowState("opened"); event.stopPropagation() }}
            maximize={(event) => { changeWindowState("fullscreen"); event.stopPropagation() }}
            label={name}
          />
        </div>
        <div className="window-content">
          <img className="window-image" src={process.env.PUBLIC_URL + url} />
        </div>
      </>
    );
  }

  if(isMedium) {
    return (
      <div className="window-container"
      >
        {windowContent()}
      </div>
    );
  }


  return (
    <motion.div className="window-container"
      animate={variant}
      variants={variants}
      initial={"initial"}
      style={{ zIndex: order }}
      drag={variant !== "fullscreen"} dragConstraints={dragConstraints}
    >
      {windowContent()}
    </motion.div>
  );
}

export default Window;