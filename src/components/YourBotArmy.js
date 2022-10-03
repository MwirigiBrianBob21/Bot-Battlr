import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import BotCard from "./BotCard";

function YourBotArmy({ botsInArmy }) {
  // console.log(botsInArmy)
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">{botsInArmy}</div>
      </div>
    </div>
  );
}

export default YourBotArmy;
