import { Component } from "react";
import { withRouter } from "react-router";
import Header from "../../components/Header";

class Product extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
  }
  render() {
    return (
      <div className="product-page">
        <Header />
        <div className="product-page-content">Product Page</div>
      </div>
    );
  }
}

export default withRouter(Product);
