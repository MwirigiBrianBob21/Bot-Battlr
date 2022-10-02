import React,{useEffect,  useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotCard from "./BotCard";

function BotsPage() {
  //start here with your code for step one
const[bots, setBots] =useState([])
const[botsInArmy, setBotsInArmy] = useState([])
const[selectedBots, setSelectedBots] = useState([])


useEffect(() => {
  fetch("http://localhost:8002/bots")
    .then((response) => response.json())
    .then((data) => 
    {
      setBots(data)
      setSelectedBots(data)
    });
}, []);
  // filter bots in to army by class
  function getBotInArmyByClass(bot) {
    return botsInArmy.find(botInArmy=> botInArmy.bot_class === bot.bot_class)
  }

  // Bots in army
  // function botsAlreadyInArmy(bot) {
  //   return Boolean(botsInArmy.find(botInArmy => botInArmy.id === bot.id))
  // }
  

  // delete bot
  function removeBotForever(toDelete) {
    fetch(`http://localhost:8002/bots/${toDelete.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    .then(()=>{
      setBots(bots.filter(thisBot => thisBot.id !== toDelete.id))
      setBotsInArmy(botsInArmy.filter(botInArmy => botInArmy.id !== toDelete.id))
    })
  }

  function handleBotAction(bot, action) {
    switch(action){
      case "let-bot-go":
        removeBotForever(bot)
        break;

          case "enlist-to-army":
            const botInArmyByClass = getBotInArmyByClass(bot)
            if(!botInArmyByClass) {
            setBotsInArmy([...botsInArmy, bot])
            setSelectedBots(selectedBots.filter(thisBot => thisBot.id !== bot.id))}
            else{console.log("uhh")}
            
            break;

            case "fire-bot-temporary":
              setBotsInArmy(botsInArmy.filter(currentBot => currentBot.id !== bot.id))
              setSelectedBots([...selectedBots, bot])
              
    }
  }

  // Getting bots list from .map
  function getBotList(arrayBots) {
    return arrayBots.map(bot => <BotCard key={bot.id} bot={bot} handleBotAction={handleBotAction}/>)
  }

  return (
    <div>
      <YourBotArmy  botsInArmy={getBotList(botsInArmy)}/>
      
      <BotCollection selectedBots={getBotList(selectedBots)}/>
      
    </div>
  )
}

export default BotsPage;
