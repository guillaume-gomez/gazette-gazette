import React from 'react';
import Button from "./Button";
import "./Toolbar.css";

interface ToolbarInterface {
  children?: React.ReactNode;
}
function Toolbar({children} : ToolbarInterface) {
  return (
    <div className="toolbar-container">
      <div className="toolbar-top">
        <div>000 - Canard //</div>
        <div className="buttons-container">
          <Button icon={"+"} />
          <Button icon={"-"}/>
          <Button icon={"X"}/>
        </div>
      </div>
      <div className="toolbar-bottom">
        TOO
      </div>
    </div>
  );
}

export default Toolbar;