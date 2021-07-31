import { Component } from "react";
import { withRouter } from "react-router";
import Header from "../../components/Header";
import PRODUCT_LIST from "utils/constants/PRODUCT_LIST";
import checkForApathy from "utils/checkProduct/checkForApathy";
import addApathy from "utils/manageLocalStorage/addApathy";
import addInquiryHistory from "utils/manageLocalStorage/addInquiryHistory";
import RandomButton from "components/RandomButton";
import Card from "components/Card";
import "./style.css";


const emptyInfo = {title: "상품이 존재하지 않습니다"}

class Product extends Component {
  constructor(props) {
      super(props);

      const currentProductInfo = JSON.parse(window.sessionStorage.getItem("currentProductInfo"));
      this.state = {
          currentProductInfo: currentProductInfo ? currentProductInfo : emptyInfo,
      };
  }
  
    getRandomProduct = (currentProductId) => {
        while (true) {
            let newProductId = Math.floor(Math.random() * (PRODUCT_LIST.length + 1))
            if (newProductId === 0 || newProductId === currentProductId || checkForApathy(currentProductId))
                continue;
            return PRODUCT_LIST.find((e) => e.id === newProductId);
        }
    }

    handleOnClickRandomButton = (isApathyButton) => {
        const currentProductId = this.state.currentProductInfo.id;
        if (isApathyButton) {
            addApathy(currentProductId);
        }
        const newProductInfo = this.getRandomProduct(currentProductId);
        window.sessionStorage.setItem("currentProductInfo", JSON.stringify(newProductInfo));
        console.log(newProductInfo);
        addInquiryHistory(newProductInfo);
        this.setState(prevState => ({currentProductInfo: newProductInfo}));
    }

  render() {
    return (
      <div className="product-page">
        <Header />
        <div className="product-page-content">
            <Card productInfo={this.state.currentProductInfo}/>
            <RandomButton isApathyButton={false} handleOnClick={this.handleOnClickRandomButton}/>
            <RandomButton isApathyButton={true} handleOnClick={this.handleOnClickRandomButton}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
