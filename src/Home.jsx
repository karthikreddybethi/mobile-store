import React, { useState, useContext, createContext } from "react";
import "./App.scss";
import Carousel from "./components/Carousel/Carousel";
import FeaturesBanner from "./components/FeaturesBanner/FeaturesBanner";
import Card from "./components/Productslist/Card";
import Heading from "./components/Heading/Heading";
import Data from "./data";

function Home() {
  return (
    <div className="app">
      <Carousel />
      <FeaturesBanner />
      <Heading />
      <div className="phones-list">
        {Data.map((model, index) => {
          return (
            <Card
              key={index}
              id={index}
              modelName={model.model}
              price={model.price}
              image={model.image}
              others={model.others}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
