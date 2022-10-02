import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row" style={{padding: "10px"}}>
        {/*...and here..*/}
        
        {bots.map((bot)=> <BotCard key={bot.id} bot={bot}/>
        )}

      </div>
    </div>
  );
}

export default BotCollection;
