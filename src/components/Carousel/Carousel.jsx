import React, { useState } from "react";
import ikona1 from "../images/Ikona1.jpg";
import iphone11 from "../images/iPhone11.jpg";
import iphoneSe from "../images/iPhone-SE.jpg";
import "./Carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ControlledCarousel() {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="slider-one">
      <Slider {...settings}>
        <div>
          <img src={iphone11} alt="" />
        </div>
        <div>
          <img src={ikona1} alt="" />
        </div>
        <div>
          <img src={iphoneSe} alt="" height="100px" width="100px" />
        </div>
      </Slider>
    </div>
  );
}

export default ControlledCarousel;
