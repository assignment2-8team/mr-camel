import { Component } from "react";
import { withRouter } from "react-router";
import Card from "components/Card";
import "./style.css";

class RecentListView extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(product) {
    console.log(product);
    this.props.history.push({ pathname: "/product", state: { currentProductInfo: product } });
  }

  render() {
    const { brandList } = this.props;

    if (!brandList) return null;

    return (
      <div className="recentList-view">
        <div>선택팝업</div>
        {brandList.map(item => (
          <div class="recentList-card-wrapper" onClick={this.handleClick(item)}>
            <Card key={item.id} title={item.title} brand={item.brand} price={item.price} />
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(RecentListView);
