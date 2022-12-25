import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange =(event)=>{
        //  console.log("On change");
         setText(event.target.value);
  }

  const [text, setText] = useState('');

  return ( 
    <>  
  <div className="container" style={{color: "#56ab91"}}>
    <h3>{props.heading}</h3>
    <div className = "my-3">
    <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{ backgroundColor: props.mode === 'dark'? '#d8e2dc' : 'white' }} id="exampleFormControlTextarea1"  rows="8"></textarea>
    </div>
    <button className = "btn btn-secondary btn-custom" onClick = {handleUpClick}>Convert to Uppercase</button>
    <button className = "btn btn-secondary mx-2 btn-custom" onClick = {handleLowClick}>Convert to Lowercase</button>
  </div>
  <div className = "container my-2" style={{color: "#56ab91"}}>
    <h4> Your text summary</h4>
    <p> No. of words : {text.split(" ").length} <br/>
    No. of characters : {text.length} ,<br/>  Minutes to read this text : {text.split(" ").length*0.008}
    </p>
    <h4>Preview</h4>
    <p>{text.length > 0 ? text : "Enter text to preview here"}</p>
  </div>
  </>
  )
}
