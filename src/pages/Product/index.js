import { Component } from "react";
import { withRouter } from "react-router";
import Header from "../../components/Header";
import PRODUCT_LIST from "utils/constants/PRODUCT_LIST";
import checkForApathy from "utils/checkProduct/checkForApathy";
import addApathy from "utils/manageLocalStorage/addApathy";
import addInquiryHistory from "utils/manageLocalStorage/addInquiryHistory";
import RandomButton from "components/RandomButton";

class Product extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currentProductInfo: this.props.currentProductInfo,
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
        addInquiryHistory(this.state.currentProductInfo);
        const currentProductId = this.state.currentProductInfo.id;
        if (isApathyButton) {
            addApathy(currentProductId);
        }
        this.setState(prevState => ({currentProductInfo: this.getRandomProduct(currentProductId)}))
    }

  render() {
    return (
      <div className="product-page">
        <Header />
        <div className="product-page-content">Product Page</div>
        <RandomButton isApathyButton={false} handleOnClick={this.handleOnClickRandomButton}/>
        <RandomButton isApathyButton={true} handleOnClick={this.handleOnClickRandomButton}/>
      </div>
    );
  }
}

export default withRouter(Product);
