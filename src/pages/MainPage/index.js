import React from "react";
import { withRouter } from "react-router";
import "./style.css";
import Header from "../../components/Header";
import PRODUCT_LIST from "utils/constants/PRODUCT_LIST";
import Card from "components/Card";
import addInquiryHistory from "utils/manageLocalStorage/addInquiryHistory";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(product) {
    addInquiryHistory(product);
    console.log(JSON.parse(window.localStorage.getItem("inquiryHistory")));
    this.props.history.push({ pathname: "/product", state: { currentProductInfo: product } });
  }

  render() {
    return (
      <div className="main-page">
        <Header />
        <div className="main-page-content">
          <div className="fullList-view">
            {PRODUCT_LIST.map(item => (
              <button class="recentList-card-wrapper" onClick={() => this.handleClick(item)}>
                <Card key={item.id} title={item.title} brand={item.brand} price={item.price} />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainPage);
