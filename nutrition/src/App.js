import React from "react";
import "./App.scss";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { OrderSuccss } from "./Pages/OrderSuccess";
import { Header } from "./Common/Header/indes";
import { Footer } from "./Common/Footer/indes";
import { OrderFailure } from "./Pages/OrderFailure";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Route path="/order-success" component={OrderSuccss} />
          <Route path="/order-failure" component={OrderFailure} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
