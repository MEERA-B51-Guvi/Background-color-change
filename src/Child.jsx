import React from 'react'

const Child = (props) => {

    const handlechangechild=(e)=>{
        const value=e.target.value;
        console.log(e);
        props.handlechange(value);
    };
  return (
    <div>
        <input type="text" onChange={handlechangechild}
        />
    </div>
  )
}

export default Child