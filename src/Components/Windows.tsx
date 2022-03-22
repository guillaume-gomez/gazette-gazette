import React, { useRef } from 'react';
import { motion } from "framer-motion"
import WindowManager from "../reducers/useWindows";
import useMediaQuery from "../reducers/useMediaQuery"

import Window from "./Window";
import "./Windows.css";

function Windows() {
  const { contentsState, toggleShow, toggleFullscreen } = WindowManager.useContainer();
  const isMedium = useMediaQuery('(max-width: 768px)');
  const constraintsRef = useRef(null);

  if(isMedium) {
    return (
      <div className="windows-container">
        {
          contentsState.map( (contentState, index) => (
            contentState.show &&
                  <Window
                    key={index}
                    toggleShow={()=> toggleShow(index)}
                    toggleFullscreen={()=> toggleFullscreen(index)}
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
        <motion.div className="drag-area" ref={constraintsRef} />
      {
        contentsState.map( (contentState, index) => (
          <Window
            key={index}
            toggleShow={()=> toggleShow(index)}
            toggleFullscreen={()=> toggleFullscreen(index)}
            windowContent={contentState}
            dragConstraints={constraintsRef}
          />

         )
        )
      }
      </div>
    );
  }

}

export default Windows;