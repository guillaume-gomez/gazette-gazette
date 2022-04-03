import React, { MouseEvent } from 'react';
import "./Tab.css";
import Button from "./Button";

interface TabInterface {
  onClick: (event : MouseEvent<HTMLButtonElement>) => void;
  name: string;
  disabled: boolean
}

function Tab({ name, onClick, disabled } : TabInterface) {
  return (
    <Button onClick={(event) => !disabled && onClick(event)} label={name} disabled={disabled} />
  );
}

export default Tab;