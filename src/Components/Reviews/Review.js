import React, { useContext, useEffect } from "react";

import Slider from "react-slick";
import { AuthContext } from "../../Context/UserContext";
import SingleReview from "./SingleReview";

const Review = ({ reviews,serviceNo }) => {
  const { user } = useContext(AuthContext);


  useEffect(()=>{

    fetch(`http://localhost:5000/serviceReview/${serviceNo}`,{

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })


  },[serviceNo])



  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="lg:w-[85%] mx-auto my-10 text-black">
    

      <Slider {...settings}>
        {reviews.map((review) => (
          <SingleReview review={review} key={review._id} />
        ))}
      </Slider>
    </div>
  );
};

export default Review;
