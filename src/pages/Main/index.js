import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Card from 'components/Card';
import PRODUCT_LIST from 'utils/constants/PRODUCT_LIST'; 
import addInquiryHistory from 'utils/manageLocalStorage/addInquiryHistory';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    handleOnClick = (productInfo) => {
        addInquiryHistory(productInfo);
        window.sessionStorage.setItem("currentProductInfo", JSON.stringify(productInfo));
        this.props.history.push({
            pathname: '/product',
        })
    }

  render() {
    return (
      <div className="main-page">
        <Header />
        <div className="main-page-content">
          <div className="fullList-view">
              <div className="all-product-render">
                {PRODUCT_LIST.map((e) => 
                    <Card productInfo={e}  handleOnClick={this.handleOnClick}/>
                )}
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
