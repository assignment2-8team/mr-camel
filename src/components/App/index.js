import { Component } from 'react';
import "./style.css";
import UserRouter from "../../router";


class App extends Component {
    constructor(){
        super()
        window.localStorage.setItem("inquiryHistory", JSON.stringify({"recent": []}));
        window.localStorage.setItem("apathy",  JSON.stringify({}));
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
