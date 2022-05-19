
import React, { useRef, useState } from 'react';


function InputComponent() {
  const [showInput, setShowInput] = useState(false);
  const [inputs, setInputs] = useState([]);

  const addInput = () => {
    setInputs([...inputs, <input placeholder={'enter'} value={'mundo'}/>])
  }

  return (
    <>
      <div>
        <button onClick={() =>{setShowInput(true)}}>show input</button>
        {showInput &&     <input role='textbox' data-testid="saludo" value='Hola Mundo'></input>}

          <button onClick={() =>{addInput()}}>add row</button>
          {inputs.map((e)=> e)}

      </div>
    </>
  );
}

export default InputComponent;
