import { Component } from "react";
import { withRouter } from "react-router";
import Card from "components/Card";
import "./style.css";
import addInquiryHistory from "utils/manageLocalStorage/addInquiryHistory";
import manageHistoryPush from "utils/manageHistory/manageHistory";

class RecentListView extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = productInfo => {
    addInquiryHistory(productInfo);
    manageHistoryPush(productInfo, this.props.history);
  };

  render() {
    const { brandList } = this.props;

    if (!brandList) return null;

    return (
      <div className="recentList-view">
        <div>선택팝업</div>
        {brandList.map(item => (
          <Card key={item.id} productInfo={item} handleOnClick={this.handleOnClick} />
        ))}
      </div>
    );
  }
}

export default withRouter(RecentListView);
