import { Component } from "react";
import "./style.css";
import UserRouter from "router";

class App extends Component {
  constructor() {
    super();
    let date = new Date();
    let today = date.getFullYear().toString() + (date.getMonth() + 1).toString() + date.getDate().toString();
    console.log("currentDate::", today);

    const lastDate = JSON.parse(window.localStorage.getItem("lastDate"));
    console.log("lastDate", lastDate);
    if (lastDate === undefined || today !== lastDate) {
      window.localStorage.setItem("inquiryHistory", JSON.stringify({ items: {}, recent: [] }));
      window.localStorage.setItem("apathy", JSON.stringify([]));
      window.localStorage.setItem("lastDate", JSON.stringify(today));
    }
  }

  render() {
    return (
      <>
        <UserRouter />
      </>
    );
  }
}

export default App;
