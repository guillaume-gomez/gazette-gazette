import React, { useState, useEffect, MouseEvent } from 'react';
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
    windowContent: { url, name, windowState, originalX, originalY, order, authorLink }
} : WindowInterface) {
  const [variant, setVariant] = useState<string>("initial");
  const isMedium = useMediaQuery('(max-width: 768px)');

  const variants = {
    fullscreen: { x: 0, y: 0, width:"100%"},
    closed: { scale: 0, opacity: 0 },
    opened: { opacity: 1, scale: 1, width:"25%" },
    initial: { x: originalX, y: originalY, scale: 1, opacity: 1, width:"25%" }
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
        setVariant("open");
      break;
    }
 }, [windowState, setVariant]);



  function minimize(event: MouseEvent<HTMLButtonElement>) {
    console.log(windowState)
    if(windowState !== "opened") {
      changeWindowState("opened");
      event.stopPropagation();
    }
  }

  function maximize(event: MouseEvent<HTMLButtonElement>) {
    if(windowState !== "fullscreen") {
      changeWindowState("fullscreen");
      event.stopPropagation();
    }
  }

  function close(event: MouseEvent<HTMLButtonElement>) {
    if(windowState !== "closed") {
      changeWindowState("closed");
      event.stopPropagation();
    }
  }

  function windowContent() {
    return (
      <>
        <div className="window-header" onClick={() => changeWindowState("clicked")}>
          <Toolbar
            close={close}
            minimize={minimize}
            maximize={maximize}
            label={name}
            authorLink={authorLink}
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
      <div className="window-container">
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
      drag={windowState !== "fullscreen"} dragConstraints={dragConstraints}
    >
      {windowContent()}
    </motion.div>
  );
}

export default Window;