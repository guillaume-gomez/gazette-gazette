import React from 'react';
import "./Button.css";

interface ButtonInterface {
  icon: React.ReactNode;
}
function Button({icon} : ButtonInterface) {
  return (
    <button className="button-container">
      {icon}
    </button>
  );
}

export default Button;