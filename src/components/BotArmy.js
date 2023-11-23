import React from "react";
import BotCard from "./BotCard";

const BotArmy = props => {
  //bot army code here...
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {props.myBots.map(bot => {
            return <BotCard key={bot.id} bot={bot} />
          })}
           Bot Army
        </div>
      </div>
    </div>
  );
};

export default BotArmy;