import React,{useEffect,  useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotCard from "./BotCard";

function BotsPage() {
  //start here with your code for step one
const[bots, setBots] =useState([])
const[botArmy, setBotArmy] = useState([])
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
// console.log(bots)

  // if(!bots) {
  //   return <h2><em>Loading...</em></h2>
  // }
  

  // delete bot
  function removeBotForever(toDelete) {
    fetch(`"http://localhost:8002/bots"${toDelete.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    .then(()=>{
      setBots(bots.filter(thisBot => thisBot.id !== toDelete.id))
      setBotArmy(botArmy.filter(botArmy => botArmy.id !== toDelete.id))
    })
  }

  function handleBotAction(bot, action) {
    switch(action){
      case "let-bot-go":
        removeBotForever(bot)
        break;

          case "enlist-to-army":
            setBotArmy([...botArmy, bot])
            setSelectedBots(selectedBots.filter(thisBot => thisBot.id !== bot.id))
            break;

            case "fire-bot-temporary":
              setBotArmy(botArmy.filter(currentBot => currentBot.id !== bot.id))
              setSelectedBots([...selectedBots, bot])
              break;
    }
  }

  // Getting bots list from .map
  function getBotList(arrayBots) {
    return arrayBots.map(bot => <BotCard key={bot.id} bot={bot} handleBotAction={handleBotAction}/>)
  }

  return (
    <div>
      <YourBotArmy  botArmy={getBotList(botArmy)}/>
      
      <BotCollection selectedBots={getBotList(selectedBots)} bots={bots}/>
      
    </div>
  )
}

export default BotsPage;
