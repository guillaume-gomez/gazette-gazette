//import logo from './logo.svg';  
import React, { useState } from "react";
import './App.css';
import WindowManager from "./reducers/useWindows";
import Windows from "./Components/Windows";
import Toolbar  from "./Components/Toolbar";
import Tabs from "./Components/Tabs";

interface ContentInterface {
  url: string;
  name: string;
  show: boolean;
}

const contentStateDefault = [
  { url: '/sample1.jpg', name: "sample 1", show: true },
  { url: '/sample2.jpg', name: "sample 2", show: true },
  { url: '/sample3.jpg', name: "sample 3", show: true }
  
]


function App() {
  const [contentsState, setContentsState] = useState<ContentInterface[]>(contentStateDefault);

  function toggleWindow(indexWindowState: number) {
    const newWindowsState = contentsState.map((contentState, index) => {
        if(indexWindowState === index) {
          return { ...contentState, show: !contentState.show };
        }
        return contentState;
    });
    setContentsState(newWindowsState);
  }

  function todo() {

  }

  return (
    <body className="App">
      <header className="Header" >
        <div className="LogoHeader border-primary">
          Gazette !
          Gazette !
        </div>
        <Toolbar label="000 - Canard //" disabled={true}/>
      </header>
      <WindowManager.Provider>
        <main className="Layout">
          <Windows />
        </main>
        <footer className="Footer">
          <Tabs />
        </footer>
      </WindowManager.Provider>
    </body>
  );
}

export default App;
