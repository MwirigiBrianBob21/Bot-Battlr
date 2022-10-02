import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, onAddBot}) {
  // Your code here
  function handleClick(){
    fetch("http://localhost:8002/bots", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(bots)
  })
      .then(r => r.json())
      .then(bots => onAddBot(bots)) 
    
  }
  return (
    <div className="ui four column grid">
      <div className="row" >
        {/*...and here..*/}
        
        {bots.map((bot)=> <BotCard key={bot.id} bot={bot} onHandleClick={handleClick}/>
        )}

      </div>
    </div>
  );
}

export default BotCollection;
