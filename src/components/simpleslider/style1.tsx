import React from "react";
import Slider from "react-slick";
import { Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slidesdata from "./slidesdata.json";
import { Links } from "./atomic/links";

export const SimpleSlider = () => {
  const { campaignarea, slider } = mystyles();
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = slidesdata;

  const slideitems = slides.map((elm) => <Links key={elm.key} prop={elm} />);

  return (
    <Box className={campaignarea}>
      <Slider {...settings} className={slider}>
        {slideitems}
      </Slider>
    </Box>
  );
};
