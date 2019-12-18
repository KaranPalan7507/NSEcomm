import React from "react";
import "./style.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Details from "./Details";
import Address from "./Address";
import Orders from "./orders";
import CashbackHistory from "./cashbackHistory";
import Referrals from "./Referrals";
import Coupons from "./Coupon";
import Wishlist from "./wishlist";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Cookie from "js-cookie";

class Account extends React.Component {
  state = {
    activeRoute: {}
  };
  menu = [
    {
      text: "Dashboard",
      image: "/images/home@2x.png",
      url: "/"
    },
    {
      text: "Orders",
      image: "/images/account_orders.png",
      url: "/account/orders"
    },
    {
      text: "Address",
      image: "/images/noun_Address_1632390@2x.png",
      url: "/account/address"
    },
    {
      text: "Account Details",
      image: "/images/noun_profile_854886@2x.png",
      url: "/account/account-details"
    },
    {
      text: "Cashback History",
      image: "/images/funds@2x.png",
      url: "/account/cashback-history"
    },
    {
      text: "Referrals",
      image: "/images/referral@2x.png",
      url: "/account/referrals"
    },
    {
      text: "Coupons",
      image: "/images/account_coupon.png",
      url: "/account/coupons"
    },
    {
      text: "Wishlist",
      image: "/images/like@2x.png",
      url: "/account/wishlist"
    }
  ];
  menuClick(item) {
    this.props.history.push(item.url);
  }
  logout() {
    Cookie.set("token", null);
    this.props.history.push("/");
    window.location.reload();
  }
  render() {
    const currentRoute = this.props.location.pathname;
    let selectedRoute = this.menu.filter(item => item.url === currentRoute);
    if (selectedRoute.length) {
      selectedRoute = selectedRoute[0];
    } else {
      selectedRoute = {};
    }
    return (
      <div className="account-page-wrapper">
        <div className="mobile-menu">
          <SwipeableDrawer
            anchor="right"
            open={this.state.menuopen}
            onClose={() => this.setState({ menuopen: false })}
            onOpen={() => this.setState({ menuopen: true })}
          >
            <div className="left-side">
              {this.menu.map((item, index) => (
                <div
                  className={
                    item.text === selectedRoute.text ? "menu active" : "menu"
                  }
                  key={index}
                  onClick={() => this.menuClick(item)}
                >
                  <span>{item.text}</span>
                </div>
              ))}
              <div className="logout menu" onClick={() => this.logout()}>
                <span>Logout</span>
              </div>
            </div>
          </SwipeableDrawer>
          <Button
            className="account-menu"
            onClick={() => {
              this.setState({ menuopen: true });
            }}
          >
            Account Menu
          </Button>
        </div>
        <div className="page-title">{selectedRoute.text}</div>
        <div className="account-page">
          <div className="left-side">
            {this.menu.map((item, index) => (
              <div
                className={
                  item.text === selectedRoute.text ? "menu active" : "menu"
                }
                key={index}
                onClick={() => this.menuClick(item)}
              >
                <img className="icon" src={item.image} alt={item.text} />
                <span>{item.text}</span>
              </div>
            ))}
            <div className="menu logout" onClick={() => this.logout()}>
              <img
                className="icon"
                src="/images/account_logout.png"
                alt="Logout"
              />
              <span>Logout</span>
            </div>
          </div>

          <div className="right-side">
            <Switch>
              <Route path="/account/orders" component={Orders} />
              <Route path="/account/address" component={Address} />
              <Route path="/account/account-details" component={Details} />
              <Route
                path="/account/cashback-history"
                component={CashbackHistory}
              />
              <Route path="/account/referrals" component={Referrals} />
              <Route path="/account/coupons" component={Coupons} />
              <Route path="/account/wishlist" component={Wishlist} />
              <Route exact path="/account">
                {<Redirect to="/account/account-details" />}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Account);
