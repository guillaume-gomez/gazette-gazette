import React from 'react';
import "./Window.css";
import Toolbar from "./Toolbar"
;

interface WindowInterface {
  minHeight?: number;
  backgroundColor: string;
  children?: React.ReactNode;
}

const footerHeight = 30;
function Window({minHeight = 0, backgroundColor, children} : WindowInterface) {
  return (
    <div className="window-container" style={{ minHeight }}>
      <Toolbar />
      <div className="window-content" style={{ backgroundColor }}>
        {children}
      </div>
    </div>
  );
}

export default Window;