import React, { MouseEvent } from 'react';
import Button from "./Button";
import "./Toolbar.css";

interface ToolbarInterface {
  minimize?: (event : MouseEvent<HTMLButtonElement>) => void;
  maximize?: (event: MouseEvent<HTMLButtonElement>) => void;
  close?: (event: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  authorLink?: string
  disabled?: boolean
}
function Toolbar({ minimize, maximize, close, label, authorLink, disabled = false } : ToolbarInterface) {

  function renderLabel() {
    if(authorLink) {
      return (
        <a href={authorLink} className="custom-link">
          <span>{label}</span>
        </a>
      )
    }
    return <span>{label}</span>;
  }

  return (
    <div className="toolbar-container border-primary">
      <div className="toolbar-top">
        {renderLabel()}
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