import React from "react";
import Accordian from "./../../Common/Accordian";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import "./style.scss";
import { API } from "../../axios";
import { apis } from "../../constants";

export default class Filter extends React.Component {
  state = {
    category: []
  };
  selectedCategories = [];
  mostVisitedOptions = [
    {
      title: "Looking thinner but at a 7 heavier weight? Is that possible?",
      date: "20/9/2019"
    },
    {
      title: "Looking thinner but at a 7 heavier weight? Is that possible?",
      date: "20/9/2019"
    },
    {
      title: "Looking thinner but at a 7 heavier weight? Is that possible?",
      date: "20/9/2019"
    },
    {
      title: "Looking thinner but at a 7 heavier weight? Is that possible?",
      date: "20/9/2019"
    },
    {
      title: "Looking thinner but at a 7 heavier weight? Is that possible?",
      date: "20/9/2019"
    }
  ];
  async componentDidMount() {
    this.getCategories();
  }
  async getCategories() {
    const response = await API.POST(apis.blogCategory, { type: "blog" });
    if (response.success) {
      this.setState({ category: response.data.category });
    }
  }
  setSelectedCategory(checked, label) {
    if (checked) {
      this.selectedCategories.push(label);
    } else {
      var index = this.selectedCategories.indexOf(label);
      if (index > -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
    this.props.onChange(this.selectedCategories);
  }
  renderCheckbox(label, key) {
    return (
      <FormControlLabel
        key={key}
        classes={{
          root: "filter-checkbox-wrapper",
          label: "filter-checkbox-label"
        }}
        control={
          <Checkbox
            className="filter-checkbox checkbox-red"
            onChange={e => this.setSelectedCategory(e.target.checked, label)}
          />
        }
        label={label}
      />
    );
  }
  renderMostOption(option, key) {
    return (
      <div key={key} className="most-visited-wrapper">
        <div className="title">{option.title}</div>
        <div className="date">{option.date}</div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Accordian title="Category">
          {this.state.category.map((option, index) =>
            this.renderCheckbox(option, index)
          )}
        </Accordian>
        <Accordian title="Most Visited">
          {this.mostVisitedOptions.map((option, index) =>
            this.renderMostOption(option, index)
          )}
        </Accordian>
      </div>
    );
  }
}
