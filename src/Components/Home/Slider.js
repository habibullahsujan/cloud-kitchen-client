import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={6000}
    >
      <div data-src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <div data-src="https://images.pexels.com/photos/940302/pexels-photo-940302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <div data-src="https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    </AutoplaySlider>
  );
};

export default Slider;
