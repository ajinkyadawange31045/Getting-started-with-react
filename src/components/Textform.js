import React, { useState } from "react";

export default function Textform(props) {
  const hanndleupclick = () => {
    // console.log("Uppercase was clicked"+text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const hanndlelowclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const cleartext = () => {
    let newtext = "";
    setText(newtext);
  };

  //   to speak
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if (toogle.innerHTML === "Speak") {
        window.speechSynthesis.cancel();
      }
    }
  };

  const handleonchange = (event) => {
    // console.log("On changed");
    setText(event.target.value);
  };

  const [text, setText] = useState(""); //taking text input for the process to carry on, text is taking and setText will set that respective things
  // text = "new text";//wrong way to set new text
  // setText("set text") //correct way to set new text

  return (
    <>
      <div>
        <h1 style={{
              color:props.mode==="light"?"black":"white",
            }}>
            {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleonchange}
            style={{
              backgroundColor:props.mode==="dark"?"grey":"white",
             color:props.mode==="light"?"black":"white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={hanndleupclick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={hanndlelowclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={cleartext}>
          Clear Text
        </button>
        <button
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
          id="toggle"
        >
          Speak
        </button>
      </div>
      <div className="container my-4" style={{
              color:props.mode==="light"?"black":"white",
            }}>
        <h3>Feature of your text</h3>
        <p>
          {text.split(" ").length} no of words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read time </p>
        <p>preview</p>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}
