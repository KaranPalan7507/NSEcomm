import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./components/product/product_details";
import Product from "./Pages/Product";
import AfterOrder from "./Pages/AfterOrder";
import Header from "./shared/header";
import Footer from "./shared/footer";
import DiscountOffer from "./shared/DiscountOffer";
import LoginSignUp from "./Pages/LoginSignUp";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Account from "./Pages/Account";
import Cart from "./Pages/Cart";
import Tool from "./Pages/Tool";
import Cookie from "js-cookie";

class App extends Component {
  componentDidMount() {
    this.token = Cookie.get("token") ? Cookie.get("token") : null;
  }

  render() {
    return (
      <div id="wrapper">
        <DiscountOffer />
        <section className="main-content">
          <Router>
            <Header />
            <Route exact path="/product_details" component={ProductDetails} />
            <Route exact path="/login" component={LoginSignUp} />
            <Route
              exact
              path="/register"
              component={() => <LoginSignUp index={1} />}
            />
            <Route path="/product" component={Product} />
            <Route path="/blog" component={Blog} />
            <Route path="/blogdetail/:id" component={BlogDetail} />
            <Route
              path="/order-success"
              component={() => <AfterOrder success={true} />}
            />
            <Route path="/order-failure" component={() => <AfterOrder />} />
            <Route path="/account" component={Account} />
            <Route path="/cart" component={Cart} />
            <Route path="/tool" component={Tool} />
          </Router>
        </section>
        <Footer />
      </div>
    );
  }
}
export default App;
