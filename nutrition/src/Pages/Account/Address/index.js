import React from "react";
import "./style.scss";
import { API } from "./../../../axios";
import { apis } from "./../../../constants";
const config = {
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjRjYmJhYmRkZGUwNTJjYzZlOTg4NyIsIm1vYmlsZSI6OTg3NDM3MTIzNCwiaWF0IjoxNTc2MzI0Mjk5LCJleHAiOjE1NzY2ODQyOTl9.dDnDT_FlqbFVVyRDakwt8e5q-hepSWFwMo3p7RlxqnI"
  }
};
class Address extends React.Component {
  state = {
    address: []
  };
  async componentDidMount() {
    const response = await API.POST(apis.accountDetails, {}, config);
    if (response.success) {
      this.setState({ address: response.data[0].address });
    }
  }
  renderAddressItem(address, index) {
    return (
      <div className="address-item" key={index}>
        <div className="name"> {address.name}</div>
        <div>{address.address}</div>
        <div>{address.state}</div>
        <div>{address.pin}</div>
        <div>{address.phoneno}</div>
        <div className="action">
          <span>Edit</span> <span className="seperator">|</span>
          <span>Delete</span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="address-wrapper">
        {this.state.address.map((item, index) =>
          this.renderAddressItem(item, index)
        )}
        <div className="address-item add">
          <img src="/images/add_address.png" alt="add address" />
        </div>
      </div>
    );
  }
}
export default Address;
