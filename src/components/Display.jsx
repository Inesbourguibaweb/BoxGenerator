import React from 'react'
import Style from './Display.module.css'

const Display = (props) => {
    const {arrayColor}=props;
    console.log(arrayColor);
  return (
    <div>
     {
        arrayColor.map((color,index)=> {

          return (
            <div className={Style.box} key={index} 
            style={{backgroundColor:color }} ></div>
        )  
        }
        )
    
    } 
    </div>
    

  )
}

export default Display