import React from "react";


function YourBotArmy({botsInArmy}) {
  //your bot army code here...
  
  // console.log(botsInArmy)
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          
         
          {botsInArmy}
          
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
