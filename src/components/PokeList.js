import React from "react";
import PokeCard from './PokeCard';
import './PokeList.css';

class PokeList extends React.Component {
  render() {
    return (
      <ul className="pokelist">
          {this.props.lascriaturas.map(item => {
            return (
            <li className="pokelist__item" key={item.id}>
              <PokeCard criatura={item} />
            </li>);
          })}
        </ul>
    );
  }
}

export default PokeList;