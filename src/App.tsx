//import logo from './logo.svg';  
import React, { useState } from "react";
import './App.css';
import Window from "./Components/Window";
import Toolbar  from "./Components/Toolbar";
import Tab from "./Components/Tab";

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
        <Toolbar />
      </header>
      <main className="Layout">
        {
          contentsState.map(({url}, index) => (
            <Window maximize={()=> toggleWindow(index)} minimize={()=> toggleWindow(index)} publicUrl={url} />
           )
          )
        }
      </main>
      <footer className="Footer">
        {
          contentsState.map(({name}, index) => (
            <Tab name={name} onClick={todo} />
           )
          )
        }
      </footer>
    </body>
  );
}

export default App;
