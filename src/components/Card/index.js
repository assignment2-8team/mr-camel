import React, { Component, useImperativeHandle } from "react";
import "./style.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { productInfo, handleOnClick } = this.props;
    const { title, brand, price } = productInfo;

    return (
      <div
      className='productCard'
      onClick={ handleOnClick ? () => handleOnClick(productInfo) : null }
      >
        <h1>{title}</h1>
        <h2>{brand}</h2>
        <h2>{price}</h2>
      </div>
    );
  }
}

export default Card;
