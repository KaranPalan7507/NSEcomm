import React from "react";
import { API } from "./../../axios";
import { apis, token } from "./../../constants";
const config = {
  headers: {
    authorization: "Bearer " + token
  }
};
class CashbackHistory extends React.Component {
  async componentDidMount() {
    API.POST(apis.orders, {}, config);

    const response = await API.POST(apis.cashback, {}, config);

    if (response.success) {
    }
  }
  render() {
    return (
      <div className="cashback-wrapper">
        <table>
          <thead>
            <tr>
              <td>User Name</td>
              <td>Order Id</td>
              <td>Wallet Id</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User 1</td>
              <td>1</td>
              <td>1</td>
              <td>1/12/2019</td>
              <td>50</td>
            </tr>
            <tr>
              <td>User 1</td>
              <td>1</td>
              <td>1</td>
              <td>1/12/2019</td>
              <td>50</td>
            </tr>
            <tr>
              <td>User 1</td>
              <td>1</td>
              <td>1</td>
              <td>1/12/2019</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default CashbackHistory;
