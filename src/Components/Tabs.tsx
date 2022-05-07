import React from 'react';
import WindowManager from "../reducers/useWindows";
import { generateID } from "../reducers/data";
import Tab from "./Tab";
import "./Tabs.css";

function Tabs() {
  const { contentsState, changeWindowState } = WindowManager.useContainer();
  return (
    <div className="tabs-container border-primary">
    {
      contentsState.map((contentState, index) => (
        <Tab key={index} name={generateID(contentState)} disabled={contentState.windowState !== "closed"}  onClick={() => changeWindowState(index, 'opened') } />
       )
      )
    }
    </div>
  );
}

export default Tabs;