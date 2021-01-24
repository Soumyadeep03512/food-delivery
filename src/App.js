import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Chef from "./components/Chef/Chef.jsx";
import Cart from "./components/Cart";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import CheckLog from "./components/CheckLog";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="foodapp">
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/chef" component={Chef} />
              <Route path="/cart" component={Cart} />
              <Route path="/login" component={CheckLog} />
            </Switch>
          </BrowserRouter>
          </div>
      </div>
    );
  }
}

export default App;
