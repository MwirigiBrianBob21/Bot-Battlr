import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, onAddBot}) {
  // Your code here
 
  return (
    <div className="ui four column grid">
      <div className="row" >
        {/*...and here..*/}
        
        {bots.map((bot)=> <BotCard key={bot.id} bot={bot} onAddBot={onAddBot}/>
        )}

      </div>
    </div>
  );
}

export default BotCollection;
