import React, { useRef } from 'react';
import { motion } from "framer-motion"
import WindowManager from "../reducers/useWindows";
import useMediaQuery from "../reducers/useMediaQuery";

import Window from "./Window";
import "./Windows.css";

const variants = {
  initial: { opacity: 0},
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.5 }
  })
}

function Windows() {
  const { contentsState, changeWindowState } = WindowManager.useContainer();
  const isMedium = useMediaQuery('(max-width: 768px)');
  const constraintRef = useRef<HTMLDivElement>(null);

  
  if(isMedium) {
    return (
      <div className="windows-container">
        {
          contentsState.map( (contentState, index) => (
            contentState.windowState !== "closed" &&
                  <Window
                    key={index}
                    changeWindowState={(value)=> changeWindowState(index, value)}
                    windowContent={contentState}
                  />
            )
          )
        }
      </div>
    );
  } else {
    return (
      <div className="windows-container">
      <motion.div className="drag-area" ref={constraintRef} >
      {
        contentsState.map( (contentState, index) => (
            <motion.span  key={index} style={{width: "100%", height:"100%"}} initial="initial" custom={index} animate="visible" variants={variants} >
              <Window
                changeWindowState={(value)=> changeWindowState(index, value)}
                windowContent={contentState}
                dragConstraints={constraintRef}
              />
            </motion.span>

         )
        )
      }
      </motion.div>
      </div>

    );
  }

}

export default Windows;