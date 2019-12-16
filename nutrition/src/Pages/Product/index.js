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
import Loader from "./../../Common/Loader";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";

export default class Product extends React.Component {
  state = {
    view: "grid",
    data: [],
    isLoaded: false
  };
  sortOptions = [
    { value: "Best Selling", label: "Best Selling" },
    { value: "Price", label: "Price" },
    { value: "Price (Desc)", label: "Price (Desc)" }
  ];
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const res2 = await API.GET(apis.productDetails);
    console.log(res2);
    const response = await API.GET(apis.allProducts);

    if (response.success) {
      this.setState({ data: response.data, isLoaded: true });
    }
  };
  renderView() {
    if (this.state.view === "grid") {
      return <ProductGrid data={this.state.data} />;
    } else {
      return <ProductList data={this.state.data} />;
    }
  }
  render() {
    return (
      <React.Fragment>
        <Slider />

        <div className="product-wrapper">
          <div className="left-side">
            <Filter />
          </div>
          <div className="right-side">
            {this.state.isLoaded ? (
              <React.Fragment>
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
                    <div className="icons">
                      <GridIcon
                        strokeColor={
                          this.state.view === "grid" ? "#dd121f" : null
                        }
                        onClick={() => this.setState({ view: "grid" })}
                      />
                      <ListIcon
                        strokeColor={
                          this.state.view === "list" ? "#dd121f" : null
                        }
                        onClick={() => this.setState({ view: "list" })}
                      />
                    </div>
                  </div>
                  <div className="mobile-menu">
                    <SwipeableDrawer
                      anchor="right"
                      open={this.state.menuopen}
                      onClose={() => this.setState({ menuopen: false })}
                      onOpen={() => this.setState({ menuopen: true })}
                    >
                      <Filter />
                    </SwipeableDrawer>
                    <Button
                      className="filter"
                      onClick={() => {
                        this.setState({ menuopen: true });
                      }}
                    >
                      Filter
                    </Button>
                  </div>

                  <div className="items-count">
                    {this.state.data.length + " "}
                    {messages.common.items}
                  </div>
                </div>
                {this.renderView()}
              </React.Fragment>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
