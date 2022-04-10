import React, { useState } from "react"
import { createContainer } from "unstated-next";
import { sortBy } from "lodash";
import { ContentInterface, WindowStateType } from "../interfaces";
import { posts } from "./data";

interface useWindowsInterface {
  contentsState: ContentInterface[];
  changeWindowState: (index: number, value: WindowStateType) => void;
  onDragStart: (index: number) => void;
}

function useWindows(initialState = 0) : useWindowsInterface {
  const [contentsState, setContentsState] = useState<ContentInterface[]>(posts);

  function onDragStart(indexWindowState: number) {
    const moveUpfrontWindowsState = moveUpfront(contentsState, indexWindowState);
    const reorderWinowsState = reorder(contentsState, moveUpfrontWindowsState);
    setContentsState(reorderWinowsState);
  }

  function changeWindowState(indexWindowState: number, newState: WindowStateType) {
    const newWindowsState = contentsState.map((contentState, index) => {
        if(indexWindowState === index) {
          return { ...contentState, windowState: newState };
        }else {
          return contentState;
        }
    });
    if(["opened","fullscreen", "clicked"].includes(newState)) {
      const moveUpfrontWindowsState = moveUpfront(newWindowsState, indexWindowState);
      const reorderWinowsState = reorder(newWindowsState, moveUpfrontWindowsState);
      setContentsState(reorderWinowsState);
    } else {
      const moveBackYardWindowsState = moveBackYard(newWindowsState, indexWindowState);
      const reorderWinowsState = reorder(newWindowsState, moveBackYardWindowsState);
      setContentsState(reorderWinowsState);
    }
  }

  function moveUpfront(contentStateModified: ContentInterface[], indexWindowState: number) : ContentInterface[] {
    let copyContentsState = contentStateModified.slice();

    const [item] = copyContentsState.splice(indexWindowState, 1);
    copyContentsState = sortBy(copyContentsState, "order");
    copyContentsState.push(item);
    return copyContentsState;
  }


  function moveBackYard(contentStateModified: ContentInterface[], indexWindowState: number): ContentInterface[] {
    let copyContentsState = contentStateModified.slice();

    const [item] = copyContentsState.splice(indexWindowState, 1);
    copyContentsState = sortBy(copyContentsState, "order");
    copyContentsState.unshift(item);
    return copyContentsState;
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

  return { contentsState, changeWindowState, onDragStart }
}

export default createContainer(useWindows)