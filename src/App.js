import React from 'react';
import './App.css';
import EchartsTest from './EchartsTest'
import ReactWordcloud from "react-wordcloud";
import List from './List';
 
const words = [
  { text: "hello", value: 3 },
  { text: "world", value: 12.5 },
  { text: "github", value: 1 },
  { text: "code", value: 1 },
  { text:"憨憨",value:100}
];

function App() {
  return (
    <div className="App"> 
      
      <div style={{ width: 600, height: 400 }}>
        <ReactWordcloud words={words} />
        </div>
        <EchartsTest/>
        <div className="container">
        <List />
      </div>
    </div>
  );
}

export default App;
