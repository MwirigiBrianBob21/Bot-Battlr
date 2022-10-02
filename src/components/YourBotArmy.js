import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import BotCard from "./BotCard";

function YourBotArmy({botArmy}) {
  //your bot army code here...
  
  console.log(botArmy)
// useEffect(()=>{
//   // onAddBot(botArmy)
// }, [])


  

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {botArmy.map((bot)=> <BotCard key={bot.id} bot={bot}/>
        )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
