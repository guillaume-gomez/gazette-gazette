import React, { useState } from "react"
import { createContainer } from "unstated-next"
import { ContentInterface, WindowStateType } from "../interfaces";

interface useWindowsInterface {
  contentsState: ContentInterface[];
  changeWindowState: (index: number, value: WindowStateType) => void;
  onClickWindow: (index: number) => void;
}

function randPosition() : string {
  const number = Math.floor(75 * Math.random());
  return `${number}%`;
}

const contentStateDefault : ContentInterface[]  = [
  { url: '/sample1.jpg', name: "sample 1", windowState: "opened", originalX: randPosition(), originalY: randPosition(), order: 1 },
  { url: '/sample2.jpg', name: "sample 2", windowState: "opened", originalX: randPosition(), originalY: randPosition(), order: 2 },/*
  { url: '/sample3.jpg', name: "sample 3", windowState: "opened", originalX: randPosition(), originalY: randPosition(), order: 3 },*/
]


function useWindows(initialState = 0) : useWindowsInterface {
  const [contentsState, setContentsState] = useState<ContentInterface[]>(contentStateDefault);


  function changeWindowState(indexWindowState: number, newState: WindowStateType) {
    const newWindowsState = contentsState.map((contentState, index) => {
        if(indexWindowState === index) {
          return { ...contentState, windowState: newState };
        }else {
          return contentState;
        }
    });
    if(newState === "opened" || newState ===  "fullscreen") {
      const moveFrontWindowsState = moveFront(newWindowsState, indexWindowState);
      const reorderWinowsState = reorder(moveFrontWindowsState);
      setContentsState(reorderWinowsState);
    } else {
      const moveBackWindowsState = moveBack(newWindowsState, indexWindowState);
      const reorderWinowsState = reorder(moveBackWindowsState);
      setContentsState(reorderWinowsState);
    }
  }

  function moveFront(contentStateModified: ContentInterface[], indexWindowState: number) : ContentInterface[] {
    let copyContentState = contentStateModified.slice();

    const [item] = copyContentState.splice(indexWindowState, 1);
    copyContentState.push(item);
    return copyContentState;
  }

  function reorder(contentStateOrdered: ContentInterface[]) : ContentInterface[] {
      return contentsState.map((contentState) => {
        const index = contentStateOrdered.findIndex(c => c.name === contentState.name);
        if(index !== -1) {
          return { ...contentState, order: (index + 1) };
        }
        throw "something went wrong in the reorder function"
      });
  }

  function moveBack(contentStateModified: ContentInterface[], indexWindowState: number): ContentInterface[] {
    let copyContentState = contentStateModified.slice();

    const [item] = copyContentState.splice(indexWindowState, 1);
    copyContentState.unshift(item);
    return copyContentState;
  }

  function onClickWindow(indexWindowState: number) {
    const moveFrontWindowsState = moveFront(contentsState, indexWindowState);
    const reorderWinowsState = reorder(moveFrontWindowsState);
    console.log(reorderWinowsState)
    setContentsState(reorderWinowsState);
  }

  return { contentsState, changeWindowState, onClickWindow }
}

export default createContainer(useWindows)