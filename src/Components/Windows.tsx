import React, { useRef } from 'react';
import { motion } from "framer-motion"
import WindowManager from "../reducers/useWindows";
import Window from "./Window";
import "./Windows.css";

function Windows() {
  const { contentsState, toggleShow, toggleFullscreen } = WindowManager.useContainer();
  const constraintsRef = useRef(null);

  return (
    <div className="windows-container">
      <motion.div className="drag-area" ref={constraintsRef} />
    {
      contentsState.map( (contentState, index) => (
        contentState.show &&
        <motion.div className="dot" drag dragConstraints={constraintsRef}>
        <Window
          key={index}
          toggleShow={()=> toggleShow(index)}
          toggleFullscreen={()=> toggleFullscreen(index)}
          windowContent={contentState}
        />
        </motion.div>
       )
      )
    }
    </div>
  );
}

export default Windows;