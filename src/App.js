import {useState} from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  const [mode, setmode] = useState('light')
  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'black';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Ajinkya" aboutText="about1" mode={mode} togglemode = {togglemode} />
      <div className="container" mode={mode}>
      <Textform heading="Enter you text here" mode = {mode} />
      <About/>
      </div>
    </>
  );
}

export default App;
