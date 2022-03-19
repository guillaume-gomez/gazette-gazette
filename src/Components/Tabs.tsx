import React from 'react';
import WindowManager from "../reducers/useWindows";
import Tab from "./Tab";
import "./Tabs.css";

function Tabs() {
  const { contentsState, openWindow, closeWindow } = WindowManager.useContainer();
  return (
    <div className="tabs-container">
    {
      contentsState.map(({name, show}, index) => (
        <Tab key={index} name={name} disabled={!show}  onClick={() => show ? closeWindow(index) : openWindow(index) } />
       )
      )
    }
    </div>
  );
}

export default Tabs;