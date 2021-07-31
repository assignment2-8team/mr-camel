import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { productInfo, handleOnClick } = this.props;
    const { title, brand, price } = productInfo;

    return (
      <div className="productCard" onClick={handleOnClick ? () => handleOnClick(productInfo) : null}>
        <div className="card-title">{title}</div>
        <div className="card-brand">Brand: {brand}</div>
        <div className="card-price">Price: {price}원</div>
      </div>
    );
  }
}

export default Card;
