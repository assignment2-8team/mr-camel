import React from "react";
import "./style.css";
import Header from "components/Header";
import Card from "components/Card";
import PRODUCT_LIST from "utils/constants/PRODUCT_LIST";
import handleOnClickProduct from "utils/handleOnClick/handleOnClickProduct";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-page">
        <Header />
        <div className="main-page-content">
          <div className="fullList-view">
            <div className="all-product-render">
              {PRODUCT_LIST.map((e) => (
                <Card
                  productInfo={e}
                  handleOnClick={(product) =>
                    handleOnClickProduct(product, this.props.history)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
