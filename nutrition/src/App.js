import React from "react";
import "./App.scss";
import { Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/product/product_details";
import { Header } from "./Common/Header/indes";
import { Footer } from "./Common/Footer/indes";
import ProductGrid from "./Pages/ProductGrid";
import AfterOrder from "./Pages/AfterOrder";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Router>
          <Switch>
            <Route exact path="/product_details" component={ProductDetails} />
          </Switch>
        </Router>
      <div>
        <Header />
        <Router>
          <div>
            <Route path="/grid" component={ProductGrid} />
            <Route
              path="/order-success"
              component={() => <AfterOrder success={true} />}
            />
            <Route path="/order-failure" component={() => <AfterOrder />} />
          </div>
        </Router>
        <Footer />
      </div>
    );
}

export default App;
