import React from "react";
import Accordian from "./../../Common/Accordian";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import messages from "./../../utils/messages";
import "./style.scss";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";

const MySlider = withStyles({
  root: {
    color: "#DD121F"
  }
})(Slider);

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
          <MySlider valueLabelDisplay="auto" defaultValue={[0, 100]} />
          {this.filterOptions.map(option => this.renderCheckbox(option))}
        </Accordian>
      </div>
    );
  }
}
