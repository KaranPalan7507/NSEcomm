import React from "react";
import Accordian from "./../../Common/Accordian";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import "./style.scss";

export default class Filter extends React.Component {
  filterOptions = [
    "Advice",
    "Food Supplements",
    "Training",
    "Lifestyle",
    "Nutrition",
    "Health"
  ];
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
  renderCheckbox(label, key) {
    return (
      <FormControlLabel
        key={key}
        classes={{
          root: "filter-checkbox-wrapper",
          label: "filter-checkbox-label"
        }}
        control={<Checkbox className="filter-checkbox" />}
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
          {this.filterOptions.map((option, index) =>
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
