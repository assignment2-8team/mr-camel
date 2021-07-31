import React from "react";
import "./style.css";

import BrandFilter from "../../components/BrandFilter";
import InterestFilter from "../../components/InterestFilter";
import RecentListView from "../../components/RecentListView";
import Header from "../../components/Header";
import PRODUCT_LIST from "../../utils/constants/PRODUCT_LIST";
import BRAND_LIST from "../../utils/constants/BRAND_LIST";

class RecentListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedBrand: BRAND_LIST.reduce((map, brand) => {
        map.set(brand, false);
        return map;
      }, new Map()),
      isHidden: false,
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleInterestCheckboxChange = this.handleInterestCheckboxChange.bind(this);
  }

  handleCheckboxChange(event) {
    const brand = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prev => ({ checkedBrand: prev.checkedBrand.set(brand, isChecked) }));
  }

  handleInterestCheckboxChange(event) {
    this.setState({ isHidden: event.target.checked });
  }

  render() {
    const filteredBrandList = PRODUCT_LIST.filter(product => [...this.state.checkedBrand].flatMap(e => (e[1] === true ? [e[0]] : [])).includes(product.brand));

    return (
      <>
        <Header />
        <div className="recentList-filters">
          <BrandFilter checkedBrand={this.state.checkedBrand} handleCheckboxChange={this.handleCheckboxChange} />
          <InterestFilter handleInterestCheckboxChange={this.handleInterestCheckboxChange} />
          <RecentListView brandList={filteredBrandList} />
        </div>
      </>
    );
  }
}

export default RecentListPage;
