import React, {useState} from 'react'

export default function TextBox(props) {
    
    const handleUpClick = () =>{
        setPrevText(text)
        let newText = text.toUpperCase()
        
        setText(newText)
        props.displayAlert('success', 'Successfully converted to uppercase.')
    }
    const handleLoClick = () =>{
        setPrevText(text)
        let newText = text.toLowerCase()
        
        setText(newText)
        props.displayAlert('success', 'Successfully converted to lowercase.')
    }
    const handleClear = () =>{
        setPrevText(text)
        setText('')
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.displayAlert('success', 'Successfully copied to Clipboard.')
    }
    const handleOnChange = (e)=>{
        setPrevText(text)
        setText(e.target.value)
    }
    const [text,setText] = useState('Enter your text here.')
    const countWords = () => {
        const words = text.split(/\s+/); // Split by whitespace characters
        return words.length
      };
    function removeExtraSpaces() {
        setPrevText(text)
       // Use regular expression to replace multiple spaces with a single space
       setText(text.replace(/\s+/g, ' ').trim())
       props.displayAlert('success', 'Successfully Removed extra spaces.')
    }
    const handleUndo = () =>{
        if(prevText === text){
            props.displayAlert('danger', 'Cant Perform Undo operation.')
        }
        else{
            setText(prevText)
            props.displayAlert('success', 'Undo operation succesfull.')
        }
        

    }
    const [prevText, setPrevText] = useState('')
    
  return (
    <div className='container my-3' >
    <div className="mb-3">
    <label htmlFor="TextArea" className="form-label" style={{color: `${props.mode==='light'?'black':'white'}`, fontSize: '24px', fontWeight: 'bold'}}>Input Your Text Here</label>
    <textarea className="form-control"  rows="5" value={text} onChange={handleOnChange}></textarea>
    <button className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary my-2 mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
    <button className='btn btn-primary my-2 mx-2' onClick={handleClear}>Clear</button>
    <button className='btn btn-primary my-2 mx-2' onClick={handleCopy}>Copy</button>
    <button className='btn btn-primary my-2 mx-2' onClick={removeExtraSpaces}>Remove Extra spaces</button>
    <button className='btn btn-primary my-2 mx-2' onClick={handleUndo}>Undo</button>
    <div style={{color: `${props.mode==='light'?'black':'white'}`}} >
        <h3>Text summery</h3>
        <p>Letter count: {text.length}</p>
        <p> Word Count: {countWords()}</p>
    </div>
    <div style={{color: `${props.mode==='light'?'black':'white'}`}} >
        <h4>Text Preview</h4>
        <p>{text}</p>
        
    </div>
    </div>
    </div>
  )
}
