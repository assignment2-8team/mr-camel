import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, brand, price } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <h2>{brand}</h2>
        <h2>{price}</h2>
      </div>
    );
  }
}

export default Card;
