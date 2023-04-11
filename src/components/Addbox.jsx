import React, {useState} from 'react'

const Addbox = (props) => {
    
    const [color,setColor]=useState("");
    const handleColor=(e)=>{
        e.preventDefault();
        setColor("");
        props.addColor(color);
        
    }
    const addBox=(e)=>{
        setColor(e.target.value);
    }

  return (
    <div>
        <form onSubmit={handleColor} >
           Color: <input onChange={addBox} value={color}/>
           <button>Add</button>
        </form>
    </div>
  )
}

export default Addbox