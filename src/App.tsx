//import logo from './logo.svg';  
import React, { useState } from "react";
import './App.css';
import WindowManager from "./reducers/useWindows";
import Windows from "./Components/Windows";
import Toolbar  from "./Components/Toolbar";
import Tabs from "./Components/Tabs";

function App() {
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
