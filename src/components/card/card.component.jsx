import { Component } from "react";

import "./card.style.css";

class Card extends Component {
  render() {
    const { name, email } = this.props.monster;
    return (
      <div className="card">
        <img
          src={`https://robohash.org/${name}?set=set4&size=180x180`}
          alt={`kitty kitten name:${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
