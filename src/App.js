import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

 const [text, setText ] = useState("");
 const [ish, setStyle] = useState("");
   
 const style = {
    mten: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'}
    
  };
   
  return (
    <div className="text-editor"> 
       <h1 style = {{color: "red"}}> Enter Your Text Below</h1>
      <input placeholder="Write Anything!" onChange={(e) => setText(e.target.value)} style = {ish}/>
      <br></br>
      <button onClick={()=> setStyle(style.mten)}>Bold</button>
      <button onClick={()=> setStyle(style.italic)}>Italic</button>
      <button onClick={()=> setStyle(style.underline)}>Underline</button>
      
    </div>
  );
}

export default App;
