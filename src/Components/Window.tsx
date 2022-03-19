import React from 'react';
import "./Window.css";
import Toolbar from "./Toolbar"
;

interface WindowInterface {
  publicUrl: string;
  minimize: () => void;
  maximize: () => void;
}

const footerHeight = 30;
function Window({ publicUrl, minimize, maximize } : WindowInterface) {
  return (
    <div className="window-container">
      <div className="window-header">
        <Toolbar minimize={minimize} maximize={maximize}  />
      </div>
      <div className="window-content">
        <img src={process.env.PUBLIC_URL + publicUrl} />
      </div>
    </div>
  );
}

export default Window;