import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/product/product_details";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Router>
          <Switch>
            <Route exact path="/product_details" component={ProductDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
