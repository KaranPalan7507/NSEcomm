import React from "react";
import TextField from "@material-ui/core/TextField";
import messages from "../../utils/messages";
import { Fab, FormControlLabel, Checkbox } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./style.scss";

export default class Login extends React.Component {
  onSubmit = data => {
    console.log(data);
  };
  render() {
    return (
      <div class="login-wrapper">
        <form
          className="login-form"
          noValidate
          autoComplete="off"
          onSubmit={data => this.onSubmit(data)}
        >
          <TextField
            label={messages.common.mobile_number}
            margin="normal"
            helperText="Field Required"
            fullWidth
          />
          <TextField
            type="password"
            label={messages.common.password}
            margin="normal"
            helperText="Field Required"
            fullWidth
            InputProps={{
              endAdornment: (
                <Fab
                  variant="extended"
                  size="small"
                  color="primary"
                  className="otp-btn"
                >
                  Login via OTP
                </Fab>
              )
            }}
          />
          <div className="forgot-wrapper">
            <FormControlLabel control={<Checkbox />} label="Show Password" />
            <Button>Forgot password?</Button>
          </div>

          <Button variant="contained" className="login-btn">
            {messages.common.login}
          </Button>
        </form>
        <div>
          <span>Continue With</span>
          <div className="social-btn-wrapper">
            <Button variant="outlined" className="faceboon-btn">
              Facebook
            </Button>
            <Button variant="outlined" className="google-btn">
              Google
            </Button>
          </div>
          <span>By logging in you agree to out T&C</span>
        </div>
      </div>
    );
  }
}
