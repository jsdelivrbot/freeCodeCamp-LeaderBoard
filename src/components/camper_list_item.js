import React from "react";

const CamperListItem = ({camper, number}) => {
  console.log(camper);
  return (
    <tr>
      <td>{number}</td>
      <td><img src={camper.img} alt="Camper Logo" className="userimg"/><a href={`https://freecodecamp.com/${camper.username}`} target="_blank">{camper.username}</a></td>
      <td>{camper.recent}</td>
      <td>{camper.alltime}</td>
    </tr>
  );
}

export default CamperListItem;
