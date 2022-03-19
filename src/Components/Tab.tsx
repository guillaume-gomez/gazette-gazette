import React from 'react';
import "./Tab.css";
import Button from "./Button";

interface TabInterface {
  onClick: () => void;
  name: string;
  disabled: boolean
}

function Tab({ name, onClick, disabled } : TabInterface) {
  return (
    <Button onClick={onClick} label={name} disabled={disabled}/>
  );
}

export default Tab;