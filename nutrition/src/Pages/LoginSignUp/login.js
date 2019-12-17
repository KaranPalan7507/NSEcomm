import React from "react";
import TextField from "@material-ui/core/TextField";
import messages from "../../utils/messages";
import { Fab, FormControlLabel, Checkbox } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./style.scss";
import Icon from "@material-ui/core/Icon";
import { API } from "./../../axios";
import { apis } from "./../../constants";

export default class Login extends React.Component {
  state = {
    showPaswor: false
  };
  onSubmit = async e => {
    e.preventDefault();
    const data = {};
    const formData = new FormData(e.target);
    data.mobile = formData.get("mobile");
    // data.password = formData.get("password");

    const response = await API.POST(apis.login, data);
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
            required
            name="mobile"
          />
          <TextField
            type={this.state.showPassword ? "text" : "password"}
            classes={{ root: "login-input" }}
            label={messages.common.password}
            margin="normal"
            fullWidth
            name="password"
            required
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
              control={
                <Checkbox
                  onChange={event =>
                    this.setState({ showPassword: event.target.checked })
                  }
                />
              }
              label={messages.common.show_password}
            />
            <Button>{messages.common.forgot_password}</Button>
          </div>

          <Button variant="contained" className="login-btn" type="submit">
            {messages.common.login}
          </Button>
        </form>
        <div>
          <div className="or">
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
