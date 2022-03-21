import React, { useRef } from 'react';
import { motion } from "framer-motion"
import WindowManager from "../reducers/useWindows";
import Window from "./Window";
import "./Windows.css";

function Windows() {
  const { contentsState, openWindow, closeWindow } = WindowManager.useContainer();
  const constraintsRef = useRef(null);

  return (
    <div className="windows-container">
      <motion.div className="drag-area" ref={constraintsRef} />
    {
      contentsState.map(({url, show, name}, index) => (
        show && 
        <motion.div className="dot" drag dragConstraints={constraintsRef}>
        <Window
          key={index}
          label={name}
          maximize={()=> openWindow(index)}
          minimize={()=> closeWindow(index)}
          publicUrl={url}
        />
        </motion.div>
       )
      )
    }
    </div>
  );
}

export default Windows;