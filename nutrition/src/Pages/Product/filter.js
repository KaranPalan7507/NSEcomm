import React from "react";
import Accordian from "./../../Common/Accordian";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import messages from "./../../utils/messages";
import "./style.scss";
export default class Filter extends React.Component {
  filterOptions = [
    messages.common.filter_text,
    messages.common.filter_text,
    messages.common.filter_text,
    messages.common.filter_text,
    messages.common.filter_text,
    messages.common.filter_text,
    messages.common.filter_text,
    messages.common.filter_text,
    messages.common.filter_text
  ];
  renderCheckbox(label) {
    return (
      <FormControlLabel
        classes={{
          root: "filter-checkbox-wrapper",
          label: "filter-checkbox-label"
        }}
        control={<Checkbox className="filter-checkbox" />}
        label={label}
      />
    );
  }
  render() {
    return (
      <div>
        <Accordian title="Category">
          {this.filterOptions.map(option => this.renderCheckbox(option))}
        </Accordian>
        <Accordian title="Flavour">
          {this.filterOptions.map(option => this.renderCheckbox(option))}
        </Accordian>
        <Accordian title="Size">
          {this.filterOptions.map(option => this.renderCheckbox(option))}
        </Accordian>
        <Accordian title="Price">
          {this.filterOptions.map(option => this.renderCheckbox(option))}
        </Accordian>
      </div>
    );
  }
}
