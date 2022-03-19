import React from 'react';
import Button from "./Button";
import "./Toolbar.css";

interface ToolbarInterface {
  minimize?: () => void;
  maximize?: () => void;
}
function Toolbar({ minimize, maximize } : ToolbarInterface) {

  function action() {
    console.log("to defined")
  }

  return (
    <div className="toolbar-container">
      <div className="toolbar-top">
        <span>000 - Canard //</span>
        <div className="buttons-container">
          <Button icon={"-"} onClick={() => minimize && minimize()} />
          <Button icon={"+"} onClick={() => maximize && maximize()} />
          <Button icon={"X"} onClick={action} />
        </div>
      </div>
      <div className="toolbar-bottom">
        TOO
      </div>
    </div>
  );
}

export default Toolbar;