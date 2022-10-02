import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import BotCard from "./BotCard";


function YourBotArmy({botsInArmy}) {
  //your bot army code here...
  
  console.log(botsInArmy)
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botsInArmy}
         
          <h2>Bot Army</h2>
          
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
