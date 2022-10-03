import React from "react";

function BotCollection({ selectedBots }) {
  return (
    <div className="ui four column grid">
      <div className="row">{selectedBots}</div>
    </div>
  );
}

export default BotCollection;
