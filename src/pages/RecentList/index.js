import React from "react";
import "./style.css";

import BrandFilter from "components/BrandFilter";
import InterestFilter from "components/InterestFilter";
import RecentListView from "components/RecentListView";
import Header from "components/Header";
import BRAND_LIST from "utils/constants/BRAND_LIST";

class RecentListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedBrand: BRAND_LIST.reduce((map, brand) => {
        map.set(brand, false);
        return map;
      }, new Map()),
      isHidden: false,
      inquiryHistory: window.localStorage.getItem("inquiryHistory"),
      apathyList: window.localStorage.getItem("apathy"),
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
    console.log(this.state.apathyList);
    const parsedObject = JSON.parse(this.state.inquiryHistory);
    const filteredBrandList = Object.values(parsedObject.items).filter(product => [...this.state.checkedBrand].flatMap(e => (e[1] === true ? [e[0]] : [])).includes(product.brand));
    const interestedList = filteredBrandList.filter(e => this.state.apathyList.includes(e.id) === 0);

    return (
      <>
        <Header />
        <div className="recentList-filters">
          <BrandFilter checkedBrand={this.state.checkedBrand} handleCheckboxChange={this.handleCheckboxChange} />
          <InterestFilter handleInterestCheckboxChange={this.handleInterestCheckboxChange} />
          <RecentListView brandList={this.state.isHidden ? interestedList : filteredBrandList} />
        </div>
      </>
    );
  }
}

export default RecentListPage;
