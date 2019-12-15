import React from "react";
import "./style.scss";
import { API } from "./../../axios";
import { apis, token } from "./../../constants";
const config = {
  headers: {
    authorization: "Bearer " + token
  }
};
class Orders extends React.Component {
  state = {
    orders: []
  };
  async componentDidMount() {
    const response = await API.POST(apis.orders, {}, config);
    if (response.success) {
      this.setState({ orders: response.data });
    }
  }
  render() {
    return (
      <div>
        <div>Orders</div>
        <div></div>
      </div>
    );
  }
}
export default Orders;
