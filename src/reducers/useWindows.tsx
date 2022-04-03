import React, { useState } from "react"
import { createContainer } from "unstated-next"
import { ContentInterface, WindowStateType } from "../interfaces";
import { posts } from "./data";

interface useWindowsInterface {
  contentsState: ContentInterface[];
  changeWindowState: (index: number, value: WindowStateType) => void;
}

function useWindows(initialState = 0) : useWindowsInterface {
  const [contentsState, setContentsState] = useState<ContentInterface[]>(posts);


  function changeWindowState(indexWindowState: number, newState: WindowStateType) {
    const newWindowsState = contentsState.map((contentState, index) => {
        if(indexWindowState === index) {
          return { ...contentState, windowState: newState };
        }else {
          return contentState;
        }
    });
    if(["opened","fullscreen", "clicked"].includes(newState)) {
      const moveFrontWindowsState = moveFront(newWindowsState, indexWindowState);
      const reorderWinowsState = reorder(newWindowsState, moveFrontWindowsState);
      setContentsState(reorderWinowsState);
    } else {
      const moveBackWindowsState = moveBack(newWindowsState, indexWindowState);
      const reorderWinowsState = reorder(newWindowsState, moveBackWindowsState);
      setContentsState(reorderWinowsState);
    }
  }

  function moveFront(contentStateModified: ContentInterface[], indexWindowState: number) : ContentInterface[] {
    let copyContentState = contentStateModified.slice();

    const [item] = copyContentState.splice(indexWindowState, 1);
    copyContentState.push(item);
    return copyContentState;
  }

  function moveBack(contentStateModified: ContentInterface[], indexWindowState: number): ContentInterface[] {
    let copyContentState = contentStateModified.slice();

    const [item] = copyContentState.splice(indexWindowState, 1);
    copyContentState.unshift(item);
    return copyContentState;
  }

  function reorder(contentStateModified: ContentInterface[], contentStateOrdered: ContentInterface[]) : ContentInterface[] {
      return contentStateModified.map((contentState) => {
        const index = contentStateOrdered.findIndex(c => c.name === contentState.name);
        if(index !== -1) {
          return { ...contentState, order: (index + 1) };
        }
        throw "something went wrong in the reorder function"
      });
  }

  return { contentsState, changeWindowState }
}

export default createContainer(useWindows)