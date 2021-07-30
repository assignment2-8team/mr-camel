import React, { Component } from "react";
import PRODUCT_LIST from "../../utils/constants/PRODUCT_LIST";
import "./style.css";

class Card extends Component {
  render() {
    return (
      <div className="productList-view">
        {PRODUCT_LIST.map(item => (
          <div>{`title: ${item.title} brand: ${item.brand} price: ${item.price}`}</div>
        ))}
      </div>
    );
  }
}

export default Card;
