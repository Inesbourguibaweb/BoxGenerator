import React, { useState } from 'react'

const Addsize = (props) => {
    const [color,setColor]=useState("");
    const [size,setSize]=useState(0);
    const handleBox=(e)=>{
        e.preventDefault();
        setColor("");
        setSize(0);
        props.AddsizeColor(color,size);
        
    }
    const addColor=(e)=>{
        setColor(e.target.value);
    }
    const addSize=(e)=>{
        setSize(e.target.value);
    }

  return (
    <div>
        <form onSubmit={handleBox} >
           Color: <input onChange={addColor} value={color}/>
           Size: <input onChange={addSize}  value={size}/>
           <button>Add</button>
        </form>
    </div>
  )
}

export default Addsize