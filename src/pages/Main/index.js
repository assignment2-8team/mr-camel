import React from "react";
import "./style.css";
import Header from "../../components/Header";

class Main extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Header />
        <div className="main-page-content">
          <div className="fullList-view">main page</div>
        </div>
      </div>
    );
  }
}

export default Main;
