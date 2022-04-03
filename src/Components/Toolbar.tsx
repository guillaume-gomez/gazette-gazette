import React, { MouseEvent } from 'react';
import Button from "./Button";
import "./Toolbar.css";

interface ToolbarInterface {
  minimize?: (event : MouseEvent<HTMLButtonElement>) => void;
  maximize?: (event: MouseEvent<HTMLButtonElement>) => void;
  close?: (event: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  disabled?: boolean
}
function Toolbar({ minimize, maximize, close, label, disabled = false } : ToolbarInterface) {

  function action() {
    console.log("to defined")
  }

  return (
    <div className="toolbar-container border-primary">
      <div className="toolbar-top">
        <span>{label}</span>
        <div className="buttons-container">
          <Button icon={"-"} onClick={(event) => minimize && minimize(event)} disabled={disabled}  />
          <Button icon={"+"} onClick={(event) => maximize && maximize(event)} disabled={disabled} />
          <Button icon={"X"} onClick={(event) => close && close(event)} disabled={disabled} />
        </div>
      </div>
      <div className="toolbar-bottom">
      </div>
    </div>
  );
}

export default Toolbar;