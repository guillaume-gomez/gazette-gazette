import React, { useState } from "react"
import { createContainer } from "unstated-next"

interface ContentInterface {
  url: string;
  name: string;
  show: boolean;
}

interface useWindowsInterface {
  contentsState: ContentInterface[];
  openWindow: (index: number) => void;
  closeWindow: (index: number) => void;
}

const contentStateDefault = [
  { url: '/sample1.jpg', name: "sample 1", show: true },
  { url: '/sample2.jpg', name: "sample 2", show: true },
  { url: '/sample3.jpg', name: "sample 3", show: true },
]


function useWindows(initialState = 0) : useWindowsInterface {
  const [contentsState, setContentsState] = useState<ContentInterface[]>(contentStateDefault);

  function openWindow(indexWindowState: number) {
    toggleWindow(indexWindowState);
  }

  function closeWindow(indexWindowState: number) {
    toggleWindow(indexWindowState);
  }

  function toggleWindow(indexWindowState: number) {
    const newWindowsState = contentsState.map((contentState, index) => {
        if(indexWindowState === index) {
          return { ...contentState, show: !contentState.show };
        }
        return contentState;
    });
    setContentsState(newWindowsState);
  }

  return { contentsState, openWindow, closeWindow }
}

export default createContainer(useWindows)