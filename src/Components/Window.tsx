import React from 'react';
import "./Window.css";
import Toolbar from "./Toolbar"
;

interface WindowInterface {
  publicUrl: string;
  minimize: () => void;
  maximize: () => void;
  label: string;
}

const footerHeight = 30;
function Window({ publicUrl, minimize, maximize, label } : WindowInterface) {
  return (
    <div className="window-container">
      <div className="window-header">
        <Toolbar minimize={minimize} maximize={maximize} label={label} />
      </div>
      <div className="window-content">
        <img className="window-image" src={process.env.PUBLIC_URL + publicUrl} />
      </div>
    </div>
  );
}

export default Window;