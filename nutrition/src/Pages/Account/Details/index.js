import React from "react";
import "./style.scss";
import Button from "@material-ui/core/Button";
import { API } from "./../../../axios";
import { apis } from "./../../../constants";
const config = {
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjRjYmJhYmRkZGUwNTJjYzZlOTg4NyIsIm1vYmlsZSI6OTg3NDM3MTIzNCwiaWF0IjoxNTc2MzI0Mjk5LCJleHAiOjE1NzY2ODQyOTl9.dDnDT_FlqbFVVyRDakwt8e5q-hepSWFwMo3p7RlxqnI"
  }
};
class Details extends React.Component {
  state = { firstName: "", lastName: "", email: "" };
  async componentDidMount() {
    const response = await API.POST(apis.accountDetails, {}, config);
    if (response.success) {
      const data = response.data[0];
      const firstName = data.name.first_name;
      const lastName = data.name.last_name;
      const email = data.email;
      const mobile = data.mobile;
      this.setState({
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile
      });
    }
  }
  async saveDetails(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {};
    user.name = {};
    user.name.first_name = formData.get("first-name");
    user.name.last_name = formData.get("last-name");
    user.email = formData.get("email");
    user.mobile = this.state.mobile;
    const response = await API.POST(apis.accountDetails, user, config);
    if (response.success) {
      console.log("updated successfully");
    }
  }
  render() {
    return (
      <div className="account-details-wrapper">
        <form onSubmit={e => this.saveDetails(e)}>
          <div className="account-info">
            <div className="info">
              <div className="label">First Name</div>
              <input
                name="first-name"
                type="text"
                defaultValue={this.state.firstName}
              />
            </div>
            <div className="info">
              <div className="label">Last Name</div>
              <input
                name="last-name"
                type="text"
                defaultValue={this.state.lastName}
              />
            </div>
            <div className="info">
              <div className="label">Display Name</div>
              <input
                name="display-name"
                type="text"
                defaultValue="Rishabhshukla98"
              />
              <div className="helptext">
                (This will be how your name will be displayed in the account
                section and in reviews.)
              </div>
            </div>
            <div className="info">
              <div className="label">Email</div>
              <input name="email" type="text" defaultValue={this.state.email} />
            </div>
          </div>
          <div className="password-section">
            <div className="password-title">Password Change</div>
            <div className="info">
              <div className="label">Current Pasword</div>
              <input name="current-password" type="password" />
            </div>
            <div className="info">
              <div className="label">New Password</div>
              <input name="new-password" type="password" />
            </div>
            <Button
              variant="contained"
              color="secondary"
              className="submit"
              type="submit"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default Details;
