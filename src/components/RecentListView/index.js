import { Component } from "react";
import { withRouter } from "react-router";
import Card from "components/Card";
import "./style.css";
import handleOnClickProduct from "utils/handleOnClick/handleOnClickProduct";

class RecentListView extends Component {
  render() {
    const { sortMethod, brandList } = this.props;

    if (!brandList) return null;

    if (sortMethod === "price") {
      let sortedBrandList = [...brandList];
      sortedBrandList.sort((x, y) => {
        return x.price - y.price;
      });
      return (
        <div className="recentList-view">
          {sortedBrandList.map((item) => (
            <Card
              key={item.id}
              productInfo={item}
              handleOnClick={(product) =>
                handleOnClickProduct(product, this.props.history)
              }
            />
          ))}
        </div>
      );
    }

    return (
      <div className="recentList-view">
        {brandList.map((item) => (
          <Card
            key={item.id}
            productInfo={item}
            handleOnClick={(product) =>
              handleOnClickProduct(product, this.props.history)
            }
          />
        ))}
      </div>
    );
  }
}

export default withRouter(RecentListView);
