import React, { useState, useRef } from 'react';
import Contract from './components/Contracts/Contract';
import Editor from './components/Editors/Editor';

function App() {
  const [tendonvi, settendonvi] = useState();
  const [so, setso] = useState();

  const [message, setMessage] = useState('')

  const callbackFunction = (childData) => {
    setMessage(childData);
    console.log(setMessage(childData));
  };
  const inputRef = useRef();


    return (
      <div className="" style={{display: 'flex'}}>
        <div>
          <Editor inputRef={inputRef}/>
        </div>
        <div style={{width: '50%'}}>
          <Contract inputRef={inputRef}/>
        </div>
      </div>
    );
}

export default App;