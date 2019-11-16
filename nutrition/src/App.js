import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/product/product_details";
import ProductGrid from "./Pages/ProductGrid";
import AfterOrder from "./Pages/AfterOrder";
import Header from "./shared/header";
import Footer from "./shared/footer";
import DiscountOffer from "./shared/DiscountOffer";
import LoginSignUp from "./Pages/LoginSignUp";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <DiscountOffer />
        <Header />
        <section className="main-content">
          <Router>
            <Route exact path="/product_details" component={ProductDetails} />
            <Route exact path="/login" component={LoginSignUp} />
            <Route path="/grid" component={ProductGrid} />
            <Route
              path="/order-success"
              component={() => <AfterOrder success={true} />}
            />
            <Route path="/order-failure" component={() => <AfterOrder />} />
          </Router>
        </section>
        <Footer />
      </div>
    );
  }
}
export default App;
