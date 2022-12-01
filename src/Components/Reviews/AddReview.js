import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../Hooks/useTitle";

const AddReview = () => {

  useTitle('Add Review');
  
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const service = useLoaderData();
  const navigate = useNavigate();


  const getUserComment = (comment) => {
    setComment(comment);
  };

  const time = new Date();
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  const fullTime = { date: date, month: month, year: year };

  const handleAddReview = () => {
    const userReview = {
      userName: user?.displayName,
      userEmail: user?.email,
      userImg: user?.photoURL,
      userReview: comment,
      userRating: rating,
      serviceNo: service?.serviceNo,
      serviceName:service?.name,
      reviewTime: fullTime,

    };
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Thanks For Your Feedback.");
          navigate("/");
        }
      });
  };

  const handleLaterBtn=()=>{
    navigate('/')

  }

  return (
    <div>
      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-black text-white border border-sky-100 mx-auto my-10">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your review for this item!
          </h2>
          <div className="flex gap-5 my-10">
            <h2>Give Rating:</h2>
            <select
              name=""
              id=""
              className="text-black rounded-lg px-2 py-1"
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <textarea
              onChange={(e) => getUserComment(e.target.value)}
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none text-black"
            ></textarea>
            <button
              onClick={handleAddReview}
              className=" text-white my-10 px-8 py-3 font-semibold rounded border border-sky-700 w-full transition ease-in-out delay-150 bg-sky-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
            >
              Add Review
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          
          <button onClick={handleLaterBtn} className="text-sm dark:text-gray-400">Maybe later</button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
