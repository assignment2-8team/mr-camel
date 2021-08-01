import React from "react";
import "./style.css";

import BrandFilter from "components/BrandFilter";
import InterestFilter from "components/InterestFilter";
import RecentListView from "components/RecentListView";
import SortMethodBar from "components/SortMethodBar";
import Header from "components/Header";
import BRAND_LIST from "utils/constants/BRAND_LIST";

class RecentList extends React.Component {
  constructor(props) {
    super(props);
    const parsedInquiryHistory = JSON.parse(
      window.localStorage.getItem("inquiryHistory")
    );
    this.state = {
      checkedBrand: BRAND_LIST.reduce((map, brand) => {
        map.set(brand, false);
        return map;
      }, new Map()),
      isHidden: false,
      sortMethod: "recent",
      inquiryHistoryList: parsedInquiryHistory.recent.map(
        (e) => parsedInquiryHistory.items[e]
      ),
      apathyList: JSON.parse(window.localStorage.getItem("apathy")),
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleInterestCheckboxChange =
      this.handleInterestCheckboxChange.bind(this);
    this.handleMethodChange = this.handleMethodChange.bind(this);
  }

  handleCheckboxChange(event) {
    const brand = event.target.name;
    const isChecked = event.target.checked;
    this.setState((prev) => ({
      checkedBrand: prev.checkedBrand.set(brand, isChecked),
    }));
  }

  handleInterestCheckboxChange(event) {
    this.setState({ isHidden: event.target.checked });
  }

  handleMethodChange(e) {
    this.setState((prevState) => ({
      ...prevState,
      sortMethod: e.target.value,
    }));
  }

  render() {
    const filteredBrandList = Array.from(this.state.checkedBrand.values()).some(
      (e) => e === true
    )
      ? this.state.inquiryHistoryList.filter((product) =>
          [...this.state.checkedBrand]
            .flatMap((e) => (e[1] === true ? [e[0]] : []))
            .includes(product.brand)
        )
      : this.state.inquiryHistoryList;

    return (
      <>
        <Header />
        <div className="recentList-filters">
          <BrandFilter
            checkedBrand={this.state.checkedBrand}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <SortMethodBar handleMethodChange={this.handleMethodChange} />
          <InterestFilter
            handleInterestCheckboxChange={this.handleInterestCheckboxChange}
          />
          <RecentListView
            sortMethod={this.state.sortMethod}
            brandList={
              this.state.isHidden
                ? filteredBrandList.filter(
                    (e) => this.state.apathyList.indexOf(e.id) === -1
                  )
                : filteredBrandList
            }
          />
        </div>
      </>
    );
  }
}

export default RecentList;
