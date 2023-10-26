import React from "react";
import './Pokecard.css';

function Pokecard({name, type, experience, id}) {
    return (
      <div className="Pokecard">
        <h3 style={{color: "blue"}}>{name}</h3>
        <div style={{display: "flex", justifyContent: "center"}}>
            <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
        </div>
        <span>Type: {type}</span>
        <span>EXP: {experience}</span>
      </div>
    );
  }
  
  export default Pokecard;