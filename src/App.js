
import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [showInput, setShowInput] = useState(false);
    const [showOtherInput, setShowOtherInput] = useState(false);

  return (
    <>
      <div>
        <button onClick={() =>{setShowInput(true)}}>show input</button>
        {showInput &&     <input role='textbox' data-testid="saludo" value='Hola Mundo'></input>}

          <button onClick={() =>{setShowOtherInput(true)}}>add row</button>
          {showOtherInput && <input placeholder={'enter'} value={'mundo'}/>}

      </div>
    </>
  );
}

export default App;
