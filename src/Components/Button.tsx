import React from 'react';
import "./Button.css";

interface ButtonInterface {
  icon: React.ReactNode;
  onClick: () => void;
}

function Button({ icon, onClick } : ButtonInterface) {
  return (
    <button className="button-container" onClick={onClick}>
      {icon}
    </button>
  );
}

export default Button;