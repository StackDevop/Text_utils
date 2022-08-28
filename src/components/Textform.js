import React,{useState} from 'react'

export default function Textform(props) {
    const handleOnClick = ()=>{
        console.log('you clicked on capitalize button');
        let newtext=text.toUpperCase()
        setText(newtext);
    }
    const handleLowercase = ()=>{
        console.log('you clicked on lowercase button');
        let newtext=text.toLowerCase()
        setText(newtext);
    }
    const[text,setText]=useState("This is default text");
    const handleOnChange=(event)=>{
        console.log("handle on change ");
        setText(event.target.value)
    }

    return (
        <>
        <div className='container'>
            <h1> {props.heading}</h1>
            <div className="textArea">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white'}} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={handleOnClick}> Capitalize </button>
            <button className="btn btn-primary mx-3" onClick={handleLowercase}> Lowercase </button>

        </div>
        <div className='container'>
            <h1> your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>
                {text}
            </p>
        </div>
        </>

    )
}
