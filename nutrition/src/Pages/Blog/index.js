import React from "react";
import "./style.scss";
import Grid from "./Grid/";
import ProductList from "../ProductList";
import SideBar from "./sidebar";
import Slider from "./slider";
import messages from "./../../utils/messages";
import { API } from "../../axios";
import { apis } from "../../constants";
import { GridIcon, ListIcon } from "../../Common/Icons";
export default class Blog extends React.Component {
  state = {
    view: "grid",
    data: []
  };
  componentDidMount() {
    this.getBlogs();
  }
  getBlogs = async () => {
    const response = await API.GET(apis.blogs);
    API.GET(apis.blogDetails);

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
            <SideBar />
          </div>
          <div className="right-side">
            <div className="sort-section">
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
            {this.state.view === "grid" && <Grid data={this.state.data} />}
            {this.state.view === "list" && (
              <ProductList data={this.state.data} />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}