import React from "react";
import "./style.scss";
import Tabs from "../../Common/Tabs";
import messages from "../../utils/messages";
import Login from "./login";
import Signup from "./signup";
class LoginSignUp extends React.Component {
  render() {
    return (
      <div className="login-signup">
        <div className="login-tab-wrapper">
          <Tabs
            tabs={[
              { label: messages.common.login, component: Login },
              { label: messages.common.signUp, component: Signup }
            ]}
          />
        </div>
      </div>
    );
  }
}
export default LoginSignUp;
