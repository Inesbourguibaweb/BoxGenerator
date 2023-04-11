import React from 'react'
import Style from './Displaysize.module.css'
const Displaysize = (props) => {
    const {arrayBox}=props;
    console.log(arrayBox.size);
  return (
    <div>
          {
        arrayBox.map((box,index)=> {

          return (
            <div className={Style.boxes} key={`box${index}`} 
            style={{backgroundColor:box.color, 
            width:box.size+"px", 
            height:box.size+"px" }} ></div>
        )  
        }
        )
    
    } 
    </div>
  )
}

export default Displaysize