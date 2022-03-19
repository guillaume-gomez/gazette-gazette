import React from 'react';
import Button from "./Button";
import "./Toolbar.css";

interface ToolbarInterface {
  minimize?: () => void;
  maximize?: () => void;
  label: string;
  disabled?: boolean
}
function Toolbar({ minimize, maximize, label, disabled = false } : ToolbarInterface) {

  function action() {
    console.log("to defined")
  }

  return (
    <div className="toolbar-container border-primary">
      <div className="toolbar-top">
        <span>{label}</span>
        <div className="buttons-container">
          <Button icon={"-"} onClick={() => minimize && minimize()} disabled={disabled}  />
          <Button icon={"+"} onClick={() => maximize && maximize()} disabled={disabled} />
          <Button icon={"X"} onClick={action} disabled={disabled} />
        </div>
      </div>
      <div className="toolbar-bottom">
        TOO
      </div>
    </div>
  );
}

export default Toolbar;