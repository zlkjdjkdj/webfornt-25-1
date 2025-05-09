
import { useState } from 'react'
import './App.css'
import { Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[text, setText] = useState("");
  const[content, setContent] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  }
  const onClick  = () => {
    setContent(text);
    console.log(text)
  }
  return (
    <>
    <h1>My note</h1>
    <div>
    <input type = 'text' value = {text} onChange={onChange}></input>
    <button onClick={onClick}>저장</button>
    </div>
    {/* <p>input 입력값 : {text}</p> */}
    <div>
      <textarea value={content} onChange={(e)=>{
        console.log(e.target.value)
        setContent(e.target.value);
      }}></textarea>
    </div>
    </>
  )
}

export default App
