import { Component } from "react";
import "./style.css";
import BRAND_LIST from "../../utils/constants/BRAND_LIST";

class BrandFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { checkedBrand: new Map() };
  }

  render() {
    const { checkedBrand, handleCheckboxChange } = this.props;
    return (
      <div className="brand-filter">
        <span className="brand-filter-title">브랜드</span>
        {BRAND_LIST.map((brand, index) => (
          <label key={index}>
            <input type="checkbox" name={brand} checked={checkedBrand.get(brand)} onChange={handleCheckboxChange} />
            <span className="brand-filter-name">{brand}</span>
          </label>
        ))}
      </div>
    );
  }
}

export default BrandFilter;
