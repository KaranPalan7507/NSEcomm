import React from "react";
import "./style.scss";
import Grid from "./Grid/";
import List from "./List";
import SideBar from "./sidebar";
import Slider from "./slider";
import messages from "./../../utils/messages";
import { API } from "../../axios";
import { apis } from "../../constants";
import { GridIcon, ListIcon } from "../../Common/Icons";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";

export default class Blog extends React.Component {
  state = {
    view: "grid",
    data: [],
    menuopen: false
  };
  componentDidMount() {
    this.getBlogs();
  }
  getBlogs = async (categories = null) => {
    const response = await API.POST(apis.blogs, { categories: categories });

    if (response.success) {
      this.setState({ data: response.data });
    }
  };
  render() {
    return (
      <div className="blog">
        <Slider />

        <div className="blog-wrapper">
          <div className="left-side">
            <SideBar
              onChange={categories => this.getBlogs(categories.toString())}
            />
          </div>
          <div className="right-side">
            <div className="sort-section">
              <div className="switch-view">
                {messages.common.views}:
                <div className="icons">
                  <GridIcon
                    strokeColor={this.state.view === "grid" ? "#dd121f" : null}
                    onClick={() => this.setState({ view: "grid" })}
                  />
                  <ListIcon
                    strokeColor={this.state.view === "list" ? "#dd121f" : null}
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
                  <SideBar />
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
            {this.state.view === "grid" && (
              <Grid data={this.state.data} history={this.props.history} />
            )}
            {this.state.view === "list" && (
              <List data={this.state.data} history={this.props.history} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
