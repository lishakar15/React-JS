import React from 'react';
import { useState } from 'react';

const StateComponent = function (){

    const [number, setNumber] = useState(0);

    function generateLuckyNum(){
        const luckyNum = Math.round(Math.random()*10);
        setNumber(luckyNum);
    };

    return(
        <div className ="App">Your Lucky Number is {number}
            <span><button onClick = {generateLuckyNum} style={{marginLeft: '5px'}}>Generate</button></span>
        </div>

    );
}

export default StateComponent;