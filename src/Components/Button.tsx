import React from 'react';
import "./Button.css";

interface ButtonInterface {
  icon?: React.ReactNode;
  label?: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ icon, label = "missing label", onClick, disabled = false } : ButtonInterface) {
  return (
    <button className={`button-container ${disabled ? 'button-disabled' : ''} `} onClick={onClick}>
      {icon ? icon : label }
    </button>
  );
}

export default Button;