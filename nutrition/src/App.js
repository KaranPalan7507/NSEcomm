import React from "react";
import "./App.scss";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Common/Header/indes";
import { Footer } from "./Common/Footer/indes";
import ProductGrid from "./Pages/ProductGrid";
import AfterOrder from "./Pages/AfterOrder";

export default class App extends React.Component {
  render() {
    return (
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
}
