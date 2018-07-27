import React from "react";
import './PokeCard.css';

class PokeCard extends React.Component {
  render() {
    const nuevacriatura = this.props.criatura;
    return (
      <div className="pokecard">
        <div className="pokecard__image">
          <img className="pokecard__image-item" src={nuevacriatura.url} alt={nuevacriatura.name} />
        </div>
        <h2 className="pokecard__name">{nuevacriatura.name}</h2>
        <ul className="pokecard__attack-types">
          {nuevacriatura.types.map((attack, index) => {
            return <li className="pokecard__attack-type" key={index} >{attack}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default PokeCard;