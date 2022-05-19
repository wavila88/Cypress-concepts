import React, { useState } from 'react';
import './DivComponent.css';

const DivComponent = () => {
    const [isHover, setIstHover] = useState(false);

    return(
        <>
        <div className={isHover ? 'div-color-blue' :'div-color'} 
             data-testid={'div-color-change'} 
             onMouseOver={() => { setIstHover(true)}}
             onMouseLeave={() => {setIstHover(false)} }
             ></div>
        </>
    );
}

export default DivComponent;