import React from "react";
import Accordian from "./../../Common/Accordian";
import { Fab, FormControlLabel, Checkbox } from "@material-ui/core";
import messages from "./../../utils/messages";
export default class Filter extends React.Component {
  render() {
    return (
      <div>
        <Accordian title="Category">
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
        </Accordian>
        <Accordian title="Flavour">
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
        </Accordian>
        <Accordian title="Size">
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
        </Accordian>
        <Accordian title="Price">
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={messages.common.filter_text}
          />
        </Accordian>
      </div>
    );
  }
}
