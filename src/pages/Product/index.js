import React, { Component } from "react";
import Card from "../../components/Card";

class Product extends Component {
  // test object
  state = {
    draws: {
      title: "중고 나이키 테아 흰검 245 30000원",
      brand: "나이키",
      price: 30000,
    },
  };

  render() {
    return (
      <div className="Product">
        <h1>Product Page</h1>
        <Card
          title={this.state.draws.title}
          brand={this.state.draws.brand}
          price={this.state.draws.price}
        />
      </div>
    );
  }
}

export default Product;
