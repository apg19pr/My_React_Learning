import React, { useState } from 'react';

export default function TextFrom(props) {

  const [text, setText] = useState('Enter Text Here'); // array destucturing > userState hook 
  // text = "d nsdjksb cjdsb c" // Wrong way to change the text
  // setText('Enter Text Here') // Corrext way to change the text
  const handleUpClickBtn = () => {
    // console.log("handleUpClickBtn clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "primary");
  }
  const handleLowClickBtn = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "warning");
  }
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "danger");
  }
  const ReverseText = (event) => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Reversed Text", "success");
  }
  const RemoveWhiteSpace = (event) => {
    let newText = text.split(" ").join("");
    setText(newText);
    props.showAlert("Removed white space from text", "primary");
  }
  const addWhiteSpace = (event) => {
    let newText = text.split("").join(" ");
    setText(newText);
    props.showAlert("addWhiteSpace", "warning");
  }
  const copyText = (event) => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges(); // to remove the selection copied text
    props.showAlert("Copied Text", "warning");

  }
  const HandleWhiteSpace = (event) => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("HandleWhiteSpace", "success");

  }
  const handleOnChange = (event) => {
    setText(event.target.value); // won't be able to edit textarea if you dont add this
  }


  return (
    <>
      <div className="container my-3">
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" aria-label='textarea' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#053657', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
        </div>
        <div className="py-1">
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUpClickBtn}>Convert to UperCase</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleLowClickBtn}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={clearText}>Clear Text</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={ReverseText}>Reverse Text</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={RemoveWhiteSpace}>Remove White Space</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={addWhiteSpace}>Add White Space</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={HandleWhiteSpace}>Handle White Space</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={copyText}>Copy Text</button>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((elm) => { return elm.length !== 0 }).length} words and {text.length} characters. (<i>{0.008 * text.split(" ").filter((elm) => { return elm.length !== 0 }).length} Minutes read</i>)</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  )
}
