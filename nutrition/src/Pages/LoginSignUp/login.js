import React from "react";
import TextField from "@material-ui/core/TextField";
import messages from "../../utils/messages";
import { Fab, FormControlLabel, Checkbox } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./style.scss";
import Icon from "@material-ui/core/Icon";

export default class Login extends React.Component {
  onSubmit = data => {
    console.log(data);
  };
  render() {
    return (
      <div className="login-wrapper">
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
          <TextField
            type="password"
            classes={{ root: "login-input" }}
            label={messages.common.password}
            margin="normal"
            fullWidth
            InputProps={{
              endAdornment: (
                <Fab
                  variant="extended"
                  size="small"
                  color="primary"
                  className="otp-btn"
                >
                  {messages.common.login_via_otp}
                </Fab>
              )
            }}
          />
          <div className="forgot-wrapper">
            <FormControlLabel
              control={<Checkbox />}
              label={messages.common.show_password}
            />
            <Button>{messages.common.forgot_password}</Button>
          </div>

          <Button variant="contained" className="login-btn">
            {messages.common.login}
          </Button>
        </form>
        <div>
          <div class="or">
            <span>OR</span>
          </div>
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
