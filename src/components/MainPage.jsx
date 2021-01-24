import React from "react";
import Header from "./Header/Header";
import Burger from "./Food/Burger";
import Foodnav from "./Foodnav/Foodnav"
import Pasta from "./Food/Pasta";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pizza from "./Food/Pizza";
import Footer from "./Footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Router>
        <Foodnav />
        <Switch>
          <Route path="/" exact component={Pizza} />
          <Route path="/burger" exact component={Burger} />
          <Route path="/pasta" exact component={Pasta} />
        </Switch>
      </Router>
      <br/>
      <Footer/>
    </div>
  );
};

export default MainPage;
