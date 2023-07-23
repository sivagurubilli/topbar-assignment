import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestinomialSlider.scss"; // Create this CSS file for custom styling

import Product from "./SingleItem";
import { productData } from "./data";

export default function TestinomialSlider() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      jobtitle={item.jobtitle}
      description={item.description}
    />
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="courosel">
      <Slider {...settings}>{product}</Slider>
    </div>
  );
}

// Custom arrows component
const CustomPrevArrow = (props) => (
  <div className="custom-arrow prev" onClick={props.onClick}>
    &lt;
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow next" onClick={props.onClick}>
    &gt;
  </div>
);
