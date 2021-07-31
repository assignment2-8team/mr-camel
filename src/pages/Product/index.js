import { Component } from "react";
import { withRouter } from "react-router";
import Header from "components/Header";
import PRODUCT_LIST from "utils/constants/PRODUCT_LIST";
import checkForApathy from "utils/checkProduct/checkForApathy";
import addApathy from "utils/manageLocalStorage/addApathy";
import addInquiryHistory from "utils/manageLocalStorage/addInquiryHistory";
import RandomButton from "components/RandomButton";
import Card from "components/Card";
import "./style.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductInfo: this.props.location.state.productInfo,
    };
  }

  getRandomProduct = currentProductId => {
    while (true) {
      let newProductId = Math.floor(Math.random() * (PRODUCT_LIST.length + 1));
      if (newProductId === 0 || newProductId === currentProductId || checkForApathy(currentProductId)) continue;
      return PRODUCT_LIST.find(e => e.id === newProductId);
    }
  };

  handleOnClickRandomButton = isApathyButton => {
    const currentProductId = this.state.currentProductInfo.id;
    if (isApathyButton) {
      addApathy(currentProductId);
    }
    const newProductInfo = this.getRandomProduct(currentProductId);
    addInquiryHistory(newProductInfo);
    this.setState(prevState => ({ currentProductInfo: newProductInfo }));
  };

  render() {
    return (
      <div className="product-page">
        <Header />
        <div className="product-page-content">
          <Card productInfo={this.state.currentProductInfo} />
          <div className="product-page-random-button-wrapper">
            <RandomButton isApathyButton={false} handleOnClick={this.handleOnClickRandomButton} />
            <RandomButton isApathyButton={true} handleOnClick={this.handleOnClickRandomButton} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
