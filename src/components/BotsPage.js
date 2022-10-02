import React, { useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  //set state
  const[botArmy, setBotArmy] = useState([])

  const[bots, setBots] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((r)=>(r.json()))
    .then((bots)=>setBots(bots))
  }, [])

  if(!bots) {
    return <h2>Just a while, we are coming for you</h2>
  }

  //Posting Army bot to YourBotArmy
  function addBot(botArmy) {
    const updatedBotsArmy = [...bots, botArmy]
    setBotArmy(updatedBotsArmy)
  }

  return (
    <div>
      <YourBotArmy botArmy={botArmy} onAddBot={addBot}/>
      <BotCollection bots={bots} onAddBot={addBot}/>
    </div>
  )
}

export default BotsPage;
