import React from 'react';

 const Child = () =>{
    const onButtonClick = () => {
        // `current` apunta al elemento de entrada de texto montado
      
     console.log('do nothing');
      };

      const data =onButtonClick();
      console.log(data.message); 
    return(
        <>
         <button onClick={onButtonClick}>Focus the input </button>
        </>
    );
};

export default Child;