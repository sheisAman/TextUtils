
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './About';
import React, {useState} from 'react';
import Alert from './components/Alert';
let name = "aman";
function App() {
  // default state 
  
  const[mode, setMode] = useState('light');
  const[textColor, setColor] = useState('dark');
  const toggleMode =()=>{
    if(mode == 'light'){
      setMode('dark');
      setColor('light');
      document.body.style.backgroundColor = '#354f52';
    }
    else{
      setMode('light');
      setColor('dark');
      document.body.style.backgroundColor = '#d8e2dc';
   } 
  }
  return (
    <>
    <Navbar title = "TextUtils" mode = {mode} textColor = {textColor} toggleMode = {toggleMode}/>
    <Alert alert = "hi, I am an alert"/>
    <div className = "container my-3">
    <TextForm heading = "Enter your text to analyze " mode = {mode} textColor = {textColor}  />
     {/* <About/> */}
    </div>
  
    </>
    
  );
}

export default App;
