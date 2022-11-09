import React, { useEffect, useState } from "react";

import Slider from "react-slick";

import SingleReview from "./SingleReview";

const Review = ({ serviceNo }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/serviceReview/${serviceNo}`, {})
      .then((res) => res.json())
      .then((data) => {
    
        setReviews(data);
      });
  }, [serviceNo]);

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="lg:w-[85%] mx-auto my-10 text-black">
      <div>
        <h3 className="font-bold text-white text-4xl text-center">{reviews.length < 1 && "This item has no review."}</h3>
      </div>
      <Slider {...settings}>
        {reviews.map((review) => (
          <SingleReview review={review} key={review._id} />
        ))}
      </Slider>
    </div>
  );
};

export default Review;
