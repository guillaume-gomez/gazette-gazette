import React, { MouseEvent } from 'react';
import Button from "./Button";
import "./Toolbar.css";

interface ToolbarInterface {
  minimize?: (event : MouseEvent<HTMLButtonElement>) => void;
  maximize?: (event: MouseEvent<HTMLButtonElement>) => void;
  close?: (event: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  author?: string
  disabled?: boolean
}
function Toolbar({ minimize, maximize, close, label, author, disabled = false } : ToolbarInterface) {

  function renderLabel() {
    if(author) {
      return (
        <div className="author-label">
          <span>{label}</span>
          <a href={`https://www.instagram.com/${author}`} target="_blank" rel="noopener" className="custom-link truncate">
            <span>{`@${author}`}</span>
          </a>
        </div>
      )
    }
    return <span className="span-no-link">{label}</span>;
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
      <div style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/dots.png')`, backgroundRepeat: "repeat-x", height: 20 }}>
      </div>
    </div>
  );
}

export default Toolbar;