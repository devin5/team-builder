import React from "react"; 

const PlayerCard = props => {
      return (
            <div className="playerCard">
                  <h2>{props.data.title} </h2> 
                  <p>{props.data.position}</p>
                  <p>{props.data.yards}</p>
                  <p>{props.data.touchdowns}</p>
                  <p>{props.data.age}</p>
            </div>
      );
};
export default PlayerCard; 