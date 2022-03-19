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
        <Window publicUrl={'/sample1.jpg'} />
        <Window publicUrl={'/sample2.jpg'} />
        <Window publicUrl={'/sample3.jpg'} />
        <Window publicUrl={'/sample4.jpg'} />
        <Window publicUrl={'/sample5.jpg'} />
        <Window publicUrl={'/sample3.jpg'} />
      </body>
    </div>
  );
}

export default App;
