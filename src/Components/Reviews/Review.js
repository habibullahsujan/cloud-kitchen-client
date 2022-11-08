import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { AuthContext } from "../../Context/UserContext";
import SingleReview from "./SingleReview";

const Review = ({ reviews }) => {
  const { user } = useContext(AuthContext);

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
      <div className="flex justify-end">
        {user?.uid ? (
          <Link
            to={"/addReview"}
            className="px-4 py-2 border border-sky-700 bg-sky-600 text-white font-semibold"
          >
            Add Review
          </Link>
        ) : (
          <>
            <Link
              className="px-4 py-2 border border-sky-700 bg-sky-600 text-white font-semibold"
              to={"/login"}
            >
              Want to Add review? Login First
            </Link>
          </>
        )}
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
