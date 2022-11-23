import './card.css'
import React from 'react';



const Characters = ({pokemon}) => {
  return (

      <div className="card">
        <div className="image">

        </div>
        <span>{pokemon.name}</span>
      </div>

  );
}




export default Characters;
