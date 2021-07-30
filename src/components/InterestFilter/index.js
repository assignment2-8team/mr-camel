import { Component } from "react";
import "./style.css";

class InterestFilter extends Component {
  render() {
    const { handleInterestCheckboxChange } = this.props;
    return (
      <div>
        <input type="checkbox" onChange={handleInterestCheckboxChange} />
        <span className="interest-filter-name">관심 없는 상품 숨기기</span>
      </div>
    );
  }
}

export default InterestFilter;
