import React from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css';

function Pokedex({pokemon}) {
    return (
        <>
        <h1 style={{color: "lightgray"}}>Pokedex</h1>
        <div className="Pokedex">
        {pokemon.map(p => <Pokecard name={p.name} type={p.type} experience={p.base_experience} id={p.id}/>)}
        </div>
        </>
    );
  }
  
  export default Pokedex;