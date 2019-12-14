import React from "react";
import "./style.scss";
class Account extends React.Component {
  menu = [
    { text: "Dashboard", image: "/images/home@2x.png" },
    { text: "Orders", image: "/images/account_orders.png" },
    { text: "Address", image: "/images/noun_Address_1632390@2x.png" },
    { text: "Account Details", image: "/images/noun_profile_854886@2x.png" },
    { text: "Cashback History", image: "/images/funds@2x.png" },
    { text: "Referrals", image: "/images/referral@2x.png" },
    { text: "Coupons", image: "/images/account_coupon.png" },
    { text: "Wishlist", image: "/images/like@2x.png" },
    { text: "Logout", image: "/images/account_logout.png" }
  ];
  render() {
    return (
      <div className="account-page">
        <div className="left-side">
          {this.menu.map((item, index) => (
            <div className="menu" key={index}>
              <img className="icon" src={item.image} alt={item.text} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <div clasName="right-side"></div>
      </div>
    );
  }
}
export default Account;
