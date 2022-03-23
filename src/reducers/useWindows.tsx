import React, { useState } from "react"
import { createContainer } from "unstated-next"
import { ContentInterface } from "../interfaces";

interface useWindowsInterface {
  contentsState: ContentInterface[];
  toggleShow: (index: number) => void;
  toggleFullscreen: (index: number) => void;
}

const contentStateDefault = [
  { url: '/sample1.jpg', name: "sample 1", show: true, fullscreen: false },
/*  { url: '/sample2.jpg', name: "sample 2", show: true, fullscreen: false },
  { url: '/sample3.jpg', name: "sample 3", show: true, fullscreen: false },*/
]


function useWindows(initialState = 0) : useWindowsInterface {
  const [contentsState, setContentsState] = useState<ContentInterface[]>(contentStateDefault);

  function toggleShow(indexWindowState: number) {
    toggleGeneric(indexWindowState, "show");
  }

  function toggleFullscreen(indexWindowState: number) {
    toggleGeneric(indexWindowState, "fullscreen");
  }

  function toggleGeneric(indexWindowState: number, label: keyof ContentInterface) {
    const newWindowsState = contentsState.map((contentState, index) => {
        if(indexWindowState === index) {
          return { ...contentState, [label]: !contentState[label] };
        }
        return contentState;
    });
    setContentsState(newWindowsState);
  }

  return { contentsState, toggleShow, toggleFullscreen }
}

export default createContainer(useWindows)