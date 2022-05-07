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
  onDragStart?: () => void;
}


function Window({
    changeWindowState,
    dragConstraints,
    onDragStart,
    windowContent: { url, name, theme, windowState, originalX, originalY, order, author }
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
        setVariant("opened")
      break;
      case "closed":
        setVariant("closed")
      break;
      case "fullscreen":
        setVariant("fullscreen")
      break;
      default:
        setVariant("opened");
      break;
    }
 }, [windowState, setVariant]);



  function minimize(event: MouseEvent<HTMLButtonElement>) {
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
            label={`${theme}-${name}`}
            author={author}
          />
        </div>
        <div className="window-content" style={{ borderColor: "var(--primary-darker-color)" }}>
          <img className="window-image no-draggable-img" src={process.env.PUBLIC_URL + url} alt={`artwork made by ${author}`} />
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
      whileTap={{ cursor: "grabbing" }}
      onDragStart={onDragStart}
      style={{ zIndex: order }}
      drag={windowState !== "fullscreen"} dragConstraints={dragConstraints}
    >
      {windowContent()}
    </motion.div>
  );
}

export default Window;