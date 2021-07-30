import { Component } from "react";
import "./style.css";

class RecentListView extends Component {
  render() {
    const { brandList } = this.props;

    return (
      <div className="recentList-view">
        <div>선택팝업</div>
        {brandList.map(item => (
          <div>{`title: ${item.title} brand: ${item.brand} price: ${item.price}`}</div>
        ))}
      </div>
    );
  }
}

export default RecentListView;
