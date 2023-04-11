
import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Addbox from './components/Addbox';
import Displaysize from './components/Displaysize';
import Addsize from './components/Addsize';


function App() {
  // const arrayColor=["red","blue","purple"];
  const [arrayColor, setAarrayColor]=useState(["red","blue","purple"]);
  const [arrayBox, setArrayBox]=useState([
    {color:"red", size:150},
    {color:"blue", size:150},
    {color:"purple", size:150}
  ])

  const addColor=(color)=>{
    setAarrayColor([...arrayColor,color]);
  }

  const AddsizeColor=(color,size)=>{
    setArrayBox([...arrayBox,{color:color,size:size}]);
  }

  return (
    <div className="App">
      <Addbox addColor={ addColor } />
      <Display arrayColor={arrayColor} />
{/* ----------------------Add size&Color----------------- */}
      <Addsize AddsizeColor={AddsizeColor} />
      <Displaysize arrayBox={arrayBox} />
    </div>
  );
}

export default App;
