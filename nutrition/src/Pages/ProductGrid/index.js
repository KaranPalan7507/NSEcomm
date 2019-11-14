import React from "react";
import ProductItem from "./ProductItem";
import "./style.scss";
import { API } from "../../axios";
import { apis } from "../../constants";
export default class ProductGrid extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const response = await API.GET(apis.allProducts);
    if (response.success) {
      this.setState({ data: response.data });
    }
  };

  render() {
    return (
      <div className="product-grid">
        {this.state.data.map(item => {
          return <ProductItem data={item} />;
        })}
      </div>
    );
  }
}
