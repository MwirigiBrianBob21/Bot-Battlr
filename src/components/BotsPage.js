import React, { useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  //set state
  const[botArmy, setBotArmy] = useState([])

  const[bots, setBots] = useState([])
  //fetch data to Page
  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((r)=>(r.json()))
    .then((bots)=>setBots(bots))
  }, [])

  // Loading message before bots load
  if(!bots) {
    return <h2>Just a while, we are coming for you</h2>
  }

  //Posting Army bot to YourBotArmy
  function addBot(inArmyBot) {
    const updatedBotsArmy = [...bots, botArmy]

    if(botArmy.find((bot)=> bot === inArmyBot)){
      setBotArmy(botArmy) 
    }
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
