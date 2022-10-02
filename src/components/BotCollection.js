import React from "react";
// import BotSpecs from "./BotSpecs"
import BotCard from "./BotCard"

function BotCollection({selectedBots}) {
  // Your code here
  

  return (
    <div className="ui four column grid">
      <div className="row">
        {selectedBots}
      </div>
    </div>
  );
}

export default BotCollection;
