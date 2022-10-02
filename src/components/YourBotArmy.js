import React from "react";


function YourBotArmy({botArmy}) {
  //your bot army code here...
  

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy}
          
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
