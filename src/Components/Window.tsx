import React from 'react';
import "./Window.css";
import Toolbar from "./Toolbar"
;

interface WindowInterface {
  publicUrl: string;
}

const footerHeight = 30;
function Window({publicUrl} : WindowInterface) {
  return (
    <div className="window-container">
      <div className="window-header">
        <Toolbar />
      </div>
      <div className="window-content">
        <img src={process.env.PUBLIC_URL + publicUrl} />
      </div>
    </div>
  );
}

export default Window;