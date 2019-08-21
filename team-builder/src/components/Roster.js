import React, { useState } from "react";

import PlayerCard from "./PlayerCard"; 


const Roster = props => {

  return (
    <div className="Roster">
      {props.players.map(player => {
        return (
            <PlayerCard data={player} />
        );
      })}
    </div>
  );
};

export default Roster;
