import React from "react";
import messages from "./../../utils/messages";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { FormControlLabel, Checkbox } from "@material-ui/core";

export default class Signup extends React.Component {
  render() {
    return (
      <div className="signup-wrapper">
        <span className="info-text">{messages.common.signup_text}</span>
        <form
          className="login-form"
          noValidate
          autoComplete="off"
          onSubmit={data => this.onSubmit(data)}
        >
          <TextField
            classes={{ root: "login-input" }}
            label={messages.common.mobile_number}
            margin="normal"
            fullWidth
          />
          <FormControlLabel
            control={<Checkbox />}
            className="subscribe_text"
            label={messages.common.email_subscribe}
          />
          <Button variant="contained" className="login-btn">
            {messages.common.signUp}
          </Button>
        </form>
        <div>
          <span className="continue-text">{messages.common.continue_with}</span>
          <div className="social-btn-wrapper">
            <Button
              variant="outlined"
              className="facebook-btn"
              startIcon={<Icon className="fa fa-facebook" />}
            >
              {messages.common.facebook}
            </Button>
            <Button
              variant="outlined"
              className="google-btn"
              startIcon={<Icon className="fa fa-google-plus" />}
            >
              {messages.common.google}
            </Button>
          </div>
          <div className="terms-text">{messages.common.terms_text}</div>
        </div>
      </div>
    );
  }
}
