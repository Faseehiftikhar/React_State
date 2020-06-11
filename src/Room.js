
import React, { useState } from 'react';
import './room.css';



function Room(){
  
    
    

// const state = userstate(true);
// console.log("state = " ,state);

let [islit, setLit] = useState(true);
let [temperature , setTemperature] = useState(30);


   


  return (
      <div className={"room " +(islit?"lit":"dark")}><h1>This Room Light is {islit? "On" : "Off"}</h1>

      <button onClick={() => setLit(true)} > Turn on Light
        </button>
        <button onClick={() => setLit(!islit)} > Turn off Light
        </button>
        <br/>
        <div> <h1>Current Room Temperature is  {temperature}</h1>
      <br/>
      <button onClick={()=> setTemperature(++temperature)}> Increase Temperatue</button>
      
      <button onClick={()=> setTemperature(--temperature)}> Deccrease Temperatue</button></div>
      
      
      </div>



  );
  }
  

export default Room;