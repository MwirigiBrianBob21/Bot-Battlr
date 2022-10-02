import { useEffect } from "react";
// import BotSpecs from "./BotSpecs"
import BotCard from "./BotCard"

function BotCollection({bots}) {
  // Your code here
  

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {/* {bots.map((bot)=>(<BotSpecs key={bot.id} bot={bot}/>))} */}

        {bots.map((bot) => (
         <BotCard key={bot.id} bot={bot}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
