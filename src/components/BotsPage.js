import React,{useEffect,  useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
const[bots, setBots] =useState([])

useEffect(() => {
  fetch("http://localhost:8002/bots")
    .then((response) => response.json())
    .then((bots) => setBots(bots));
}, []);
// console.log(bots)

  // if(!bots) {
  //   return <h2><em>Loading...</em></h2>
  // }

  return (
    <div>
      <YourBotArmy />
      
      <BotCollection setBots={setBots} bots={bots}/>
      
    </div>
  )
}

export default BotsPage;
