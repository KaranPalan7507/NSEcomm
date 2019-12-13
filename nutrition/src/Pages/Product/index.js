import React from "react";
import "./style.scss";
import ProductGrid from "../ProductGrid";
import ProductList from "../ProductList";
import Filter from "./filter";
import Slider from "./slider";
import Select from "react-select";
import messages from "./../../utils/messages";
import { API } from "../../axios";
import { apis } from "../../constants";
import { GridIcon, ListIcon } from "../../Common/Icons";

export default class Product extends React.Component {
  state = {
    view: "grid",
    data: []
  };
  sortOptions = [{ value: "Best Selling", label: "Best Selling" }];
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const res2 = await API.GET(apis.productDetails);
    console.log(res2);
    const response = await API.GET(apis.allProducts);

    if (response.success) {
      this.setState({ data: response.data });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Slider />

        <div className="product-wrapper">
          <div className="left-side">
            <Filter />
          </div>
          <div className="right-side">
            <div className="sort-section">
              <div className="sort-by-wrapper">
                {messages.common.sort_by}:
                <Select
                  className="sort-dd"
                  options={this.sortOptions}
                  defaultValue={this.sortOptions[0]}
                />
              </div>
              <div className="switch-view">
                {messages.common.views}:
                <GridIcon
                  strokeColor={this.state.view === "grid" ? "#dd121f" : null}
                  onClick={() => this.setState({ view: "grid" })}
                />
                <ListIcon
                  strokeColor={this.state.view === "list" ? "#dd121f" : null}
                  onClick={() => this.setState({ view: "list" })}
                />
              </div>
              <div className="items-count">
                {this.state.data.length + " "}
                {messages.common.items}
              </div>
            </div>
            {this.state.view === "grid" && (
              <ProductGrid data={this.state.data} />
            )}
            {this.state.view === "list" && (
              <ProductList data={this.state.data} />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
