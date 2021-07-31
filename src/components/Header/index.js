import { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <Link to="/">
          <span className="header-logo">Mr.Camel</span>
        </Link>
        <Link to="/recentList">
          <span className="header-recent">최근</span>
        </Link>
      </nav>
    );
  }
}

export default Header;
