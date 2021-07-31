import React from "react";
import "./style.css";
import Header from "components/Header";
import Card from "components/Card";
import PRODUCT_LIST from "utils/constants/PRODUCT_LIST";
import addInquiryHistory from "utils/manageLocalStorage/addInquiryHistory";
import manageHistoryPush from "utils/manageHistory/manageHistory";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = productInfo => {
    addInquiryHistory(productInfo);
    manageHistoryPush(productInfo, this.props.history);
  };

  render() {
    const history = window.localStorage.getItem("inquiryHistory");

    return (
      <div className="main-page">
        <Header />
        <div className="main-page-content">
          <div className="fullList-view">
            <div className="all-product-render">
              {PRODUCT_LIST.map(e => (
                <Card productInfo={e} handleOnClick={this.handleOnClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
