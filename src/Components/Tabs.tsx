import React from 'react';
import WindowManager from "../reducers/useWindows";
import Tab from "./Tab";
import "./Tabs.css";

function Tabs() {
  const { contentsState, toggleShow } = WindowManager.useContainer();
  return (
    <div className="tabs-container border-primary">
    {
      contentsState.map(({name, show}, index) => (
        <Tab key={index} name={name} disabled={show}  onClick={() => toggleShow(index) } />
       )
      )
    }
    </div>
  );
}

export default Tabs;