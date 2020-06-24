import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
// import Carousel from "./components/Carousel/Carousel";
// import FeaturesBanner from "./components/FeaturesBanner/FeaturesBanner";
// import Card from "./components/Productslist/Card";
// import Heading from "./components/Heading/Heading";
// import Data from "./data";
import Iphone11Pro from "./components/Features/Iphone11Pro";
import { CartItemsProvider } from "./components/CartItemsContext/CartItemsContext";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Newsletter from "./components/Newsletter/NewsLetter";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Footer/Copyright";

function App() {
  return (
    <Router>
      <CartItemsProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={Iphone11Pro} />
        </Switch>
        <Newsletter />
        <Footer />
        <Copyright />
      </CartItemsProvider>
    </Router>
  );
}

export default App;
