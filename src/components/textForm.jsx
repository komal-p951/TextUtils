import React, { useState } from 'react'

export default function textForm(props) {
    const [text, setText] = useState('')
    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","Success")
    }
    const handleOnchange = (e) => {
        setText(e.target.value)
    }
    const handleClicklower = (e) => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase","Success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/)
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","Success")
    }
    const copytoclipboard = () => {
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard","Success")
    }
  return (
    <div>
        <div className="form-group mt-5 container" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
            <h3>{props.heading}</h3>
            <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} rows="8" placeholder={text}  value={text} onChange={handleOnchange}></textarea>
            <button className='btn btn-primary my-2' onClick={handleClick}>Convert To Uppercase</button>
            <button className='btn btn-primary my-2 mx-2' onClick={handleClicklower}>Convert To Lowercase</button>
            <button className='btn btn-primary my-2 mx-2' onClick={() => setText("")}>Clear Text</button>
            <button className='btn btn-primary my-2 mx-2' onClick={copytoclipboard}>Copy to Clipboard</button>
            <button className='btn btn-primary my-2 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container">
          <h2>Your Text Summary</h2> 
          <p>{text.split(/\s+/).filter((element) => {return element.length != 0}).length} words and {text.length} charaters</p>
          <p>{0.008 * text.split(" ").length} Minuts read</p>
          <h2>preview</h2>
          <p>{text.length > 0 ? text : "enter something to preview it here"}</p>
        </div>
    </div>
  )
}
