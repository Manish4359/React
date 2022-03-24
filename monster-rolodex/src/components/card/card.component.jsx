import React from "react";
import "./card.style.css";

export const Card = (props) => {
  return (
    <div className="container">
      <img
        alt="monsters"
        src={`https://robohash.org/${props.monster.id}?set=set7&size=240x240`}
      />
      <h1>{props.monster.name}</h1>
      <h3>{props.monster.email}</h3>
    </div>
  );
};
