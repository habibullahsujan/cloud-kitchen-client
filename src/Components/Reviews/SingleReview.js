import React from "react";
import { FaStar } from "react-icons/fa";

const SingleReview = ({ review }) => {
  const { userImg, userName, userRating, userReview, reviewTime } = review;
 
  const ratingInNumber=parseInt(userRating)

  return (
    <div className="mx-4 flex justify-center">
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md border border-sky-700 bg-gray-700 text-white">
        <div className="flex justify-between">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src={userImg}
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">{userName}</h4>
                <span className="text-xs dark:text-gray-400">
                  {reviewTime.date} - {reviewTime.month} - {reviewTime.year}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {
              [...Array(ratingInNumber).keys()].map(rating=><span key={rating} className="text-orange-500"><FaStar/></span>)
            }

          <span className="text-orange-500 font-semibold">{ratingInNumber}</span>

          </div>
        </div>

        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>{userReview}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
