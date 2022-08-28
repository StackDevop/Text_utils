// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode=()=>{
    if (mode==="light"){
      // setmode="dark"
      setMode("dark")
      // console.log(mode)
      document.body.style.backgroundColor='gray'
    }
    else{
      // setmode='light'
      setMode("light")
      // console.log(mode)
      document.body.style.backgroundColor='white'

    } 
  }

  return (
    <>
    <Navbar title="Solve4me" mode={mode} toggleMode={toggleMode}/>
    {/* <About/> */}
    <div className="container my-3" >  
      <Textform heading="Enter the text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
