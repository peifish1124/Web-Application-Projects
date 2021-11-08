import { Button } from 'antd';
import { useState,useEffect } from 'react'

const CalButton = ( { text, index, onClick } ) => {
    
    // const [memory_1, setMemory_1] = useState(0);

    // const onClick = (e) => {
    //     if(e.target.value=== '0'||e.target.value=== '1'||e.target.value=== '2'||e.target.value=== '3'||e.target.value=== '4'||e.target.value=== '5'||e.target.value=== '6'||e.target.value=== '7'||e.target.value=== '8'||e.target.value=== '9'){
    //         if(e.target.value === '0') setCount(count*10+0); if(e.target.value === '5') setCount(count*10+5);
    //         if(e.target.value === '1') setCount(count*10+1); if(e.target.value === '6') setCount(count*10+6);
    //         if(e.target.value === '2') setCount(count*10+2); if(e.target.value === '7') setCount(count*10+7);
    //         if(e.target.value === '3') setCount(count*10+3); if(e.target.value === '8') setCount(count*10+8);
    //         if(e.target.value === '4') setCount(count*10+4); if(e.target.value === '9') setCount(count*10+9);
    //     } else if(e.target.value=== '+'){
    //         setMemory_1(count);
    //         setCount(0);
    //     } else if(e.target.value=== '='){
    //         console.log("hello");
    //         setCount(memory_1);
    //     }
    // }
    return(
        <button key={index} value={text} className="button" onClick={onClick}>{text}</button> 
    );
}

export default CalButton