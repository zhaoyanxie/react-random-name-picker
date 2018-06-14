import React from "react";

const ShowNames = props => (
  <ul>
    {props.names.map((name, i) => (
      <li key={i} id={props.luckyWinnerIndex === i ? "app-lucky-winner" : null}>
        {name}
      </li>
    ))}
  </ul>
);

export default ShowNames;
