import React, { useState } from "react"
import { createContainer } from "unstated-next"
import { ContentInterface, WindowStateType } from "../interfaces";

interface useWindowsInterface {
  contentsState: ContentInterface[];
  changeWindowState: (index: number, value: WindowStateType) => void;
}

/*function randPosition() : [string, string] {
  const x = Math.floor(75 * Math.random());
  const y = Math.floor(75 * Math.random());
}*/

const contentStateDefault : ContentInterface[]  = [
  { url: '/sample1.jpg', name: "sample 1", windowState: "opened", originalX: 10, originalY: 400 },
  { url: '/sample2.jpg', name: "sample 2", windowState: "opened", originalX: "75%", originalY: "75%" },
  { url: '/sample3.jpg', name: "sample 3", windowState: "opened", originalX: 1000, originalY: 250 },
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