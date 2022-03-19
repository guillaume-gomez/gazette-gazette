import React from 'react';
import "./Tab.css";

interface TabInterface {
  onClick: () => void;
  name: string
}

function Tab({ name, onClick } : TabInterface) {
  return (
    <div className="Tab-container" onClick={onClick}>
      {name}
    </div>
  );
}

export default Tab;