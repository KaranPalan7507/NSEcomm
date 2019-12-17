import React from "react";
import "./style.scss";
import { API } from "./../../../axios";
import { apis } from "./../../../constants";
import AddEdit from "./addEdit";

class Address extends React.Component {
  state = {
    address: [],
    selectedAddress: null
  };
  async componentDidMount() {
    const response = await API.POST(apis.accountDetails, {});

    if (response.success) {
      this.setState({ address: response.data[0].address });
    }
  }
  renderAddressItem(address, index) {
    return (
      <div className="address-item" key={index}>
        <div className="name"> {address.name}</div>
        <div>{address.address}</div>
        <div>{address.city}</div>
        <div>{address.state}</div>
        <div>{address.country}</div>
        <div>{address.pin}</div>
        <div>{address.phoneno}</div>
        <div className="action">
          <span onClick={() => this.setState({ selectedAddress: address })}>
            Edit
          </span>
          <span className="seperator">|</span>
          <span>Delete</span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <React.Fragment>
        {!this.state.selectedAddress ? (
          <div className="address-wrapper">
            {this.state.address.map((item, index) =>
              this.renderAddressItem(item, index)
            )}
            <div
              className="address-item add"
              onClick={() => this.setState({ selectedAddress: {} })}
            >
              <img src="/images/add_address.png" alt="add address" />
            </div>
          </div>
        ) : (
          <AddEdit
            currentValue={this.state.selectedAddress}
            success={data =>
              this.setState({ address: data[0].address, selectedAddress: null })
            }
          />
        )}
      </React.Fragment>
    );
  }
}
export default Address;
