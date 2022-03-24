import React from 'react';
import WindowManager from "../reducers/useWindows";
import Tab from "./Tab";
import "./Tabs.css";

function Tabs() {
  const { contentsState, changeWindowState } = WindowManager.useContainer();
  return (
    <div className="tabs-container border-primary">
    {
      contentsState.map(({name, windowState}, index) => (
        <Tab key={index} name={name} disabled={windowState !== "closed"}  onClick={() => changeWindowState(index, 'opened') } />
       )
      )
    }
    </div>
  );
}

export default Tabs;