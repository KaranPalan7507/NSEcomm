import React from "react";
import "./style.scss";
import { API } from "./../../../axios";
import { apis } from "./../../../constants";
import Button from "@material-ui/core/Button";

class AddEdit extends React.Component {
  async onSubmit(e) {
    e.preventDefault();
    const data = {};
    const formData = new FormData(e.target);
    data.name = formData.get("name");
    //data.mobile_no = formData.get("number");
    data.address = formData.get("address");
    data.pincode = formData.get("pin");
    data.city = formData.get("city");
    data.state = formData.get("state");
    data.country = formData.get("country");
    if (this.props.currentValue.name) {
      data.type = "update";
    } else {
      data.type = "new";
    }
    const response = await API.POST(apis.address_change, data);
    if (response.success) {
      this.props.success();
    }
  }
  render() {
    const data = this.props.currentValue;
    return (
      <div className="add-edit-wrapper">
        <div className="heading">Add/Edit Address</div>
        <div className="form-wrapper">
          <form onSubmit={e => this.onSubmit(e)}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="name"
                required
                defaultValue={data.name}
              />
              <input
                type="tel"
                name="number"
                placeholder="Mobile Number"
                className="mobile-number"
                required
                defaultValue={data.mobile_no}
              />
              <textarea
                name="address"
                className="address"
                placeholder="Address"
                required
                defaultValue={data.address}
              />
              <input
                className="pin"
                type="tel"
                name="pin"
                placeholder="PIN"
                required
                defaultValue={data.pin}
              />
              <input
                className="city"
                type="text"
                name="city"
                placeholder="City"
                required
                defaultValue={data.city}
              />
              <input
                className="state"
                type="text"
                name="state"
                placeholder="State"
                required
                defaultValue={data.state}
              />
              <input
                className="country"
                type="text"
                name="country"
                placeholder="Country"
                required
                defaultValue={data.country}
              />
              <Button
                variant="contained"
                color="secondary"
                className="submit button-red"
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddEdit;
