import React, { useState } from 'react'
import Child from './Child';


export const Parent = () => {
    const [uicolor, setUicolor]=useState("");

   
    const handlechange=(value)=>{      
        setUicolor(value);
    };
    
  return (
    <>
    <div>
        <button style={{background:`${uicolor}`}}></button>
    </div>
      <div>
      <Child handlechange={handlechange} />
  </div>
  </>
  )
}
export default Parent;