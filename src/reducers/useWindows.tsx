import React, { useState } from "react"
import { createContainer } from "unstated-next"
import { ContentInterface, WindowStateType } from "../interfaces";

interface useWindowsInterface {
  contentsState: ContentInterface[];
  changeWindowState: (index: number, value: WindowStateType) => void;
}

function randPosition() : string {
  const number = Math.floor(75 * Math.random());
  return `${number}%`;
}

const contentStateDefault : ContentInterface[]  = [
  { url: '/sample1.jpg', name: "sample 1", windowState: "opened", originalX: randPosition(), originalY: randPosition() },
  { url: '/sample2.jpg', name: "sample 2", windowState: "opened", originalX: randPosition(), originalY: randPosition() },
  { url: '/sample3.jpg', name: "sample 3", windowState: "opened", originalX: randPosition(), originalY: randPosition() },
]


function useWindows(initialState = 0) : useWindowsInterface {
  const [contentsState, setContentsState] = useState<ContentInterface[]>(contentStateDefault);


  function changeWindowState(indexWindowState: number, newState: WindowStateType) {
    const newWindowsState = contentsState.map((contentState, index) => {
        if(indexWindowState === index) {
          return { ...contentState, windowState: newState };
        }
        return contentState;
    });
    setContentsState(newWindowsState);
  }

  return { contentsState, changeWindowState }
}

export default createContainer(useWindows)