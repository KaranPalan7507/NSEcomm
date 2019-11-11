import React from "react";
import "./App.scss";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { OrderSuccss } from "./Pages/OrderSuccess";
import { Header } from "./Common/Header/indes";
import { Footer } from "./Common/Footer/indes";
import { OrderFailure } from "./Pages/OrderFailure";
import ProductGrid from "./Pages/ProductGrid";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route path="/grid" component={ProductGrid} />
            <Route path="/order-success" component={OrderSuccss} />
            <Route path="/order-failure" component={OrderFailure} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}
