// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode=()=>{
    if (mode==="light"){
      // setmode="dark"
      setMode("dark")
      // console.log(mode)
      document.body.style.backgroundColor='gray'
      showAlert('enabled dark mode',"success")
    }
    else{
      // setmode='light'
      setMode("light")
      // console.log(mode)
      document.body.style.backgroundColor='white'
      showAlert('enabled light mode',"success")
    } 
  }

  return (
    <>
    <Navbar title="Solve4me" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}  />
    {/* <About/> */}
    <div className="container my-3" >  
      <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
