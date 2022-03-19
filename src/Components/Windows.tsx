import React from 'react';
import WindowManager from "../reducers/useWindows";
import Window from "./Window";

function Windows() {
  const { contentsState, openWindow, closeWindow } = WindowManager.useContainer();
  return (
    <>
    {
      contentsState.map(({url, show, name}, index) => (
        show && <Window key={index} label={name} maximize={()=> openWindow(index)} minimize={()=> closeWindow(index)} publicUrl={url} />
       )
      )
    }
    </>
  );
}

export default Windows;