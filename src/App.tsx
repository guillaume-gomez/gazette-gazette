//import logo from './logo.svg';
import './App.css';
import Window from "./Components/Window";
import Toolbar  from "./Components/Toolbar";

function App() {
  return (
    <div className="App">
      <header >
        <Toolbar />
      </header>
      <body className="Layout">
        <Toolbar />
        <Window backgroundColor="white">
          <img src={process.env.PUBLIC_URL + '/sample1.jpg'} />
        </Window>
      </body>
    </div>
  );
}

export default App;
