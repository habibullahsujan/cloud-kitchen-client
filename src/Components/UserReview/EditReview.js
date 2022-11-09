import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";

const EditReview = () => {
  const review = useLoaderData();
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const navigate=useNavigate()

  const handleGetUpdatedRating = (updatedRating) => {
    setRating(updatedRating);
  };

  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedComment = form.comment.value;


    const updatedReview = {
      comment: updatedComment,
      updatedRating: rating,
    };
    fetch(`http://localhost:5000/editReview/${review._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
            toast.success('Your review updated.');
            form.reset();
            navigate('/userReview')

        }
      });
  };
  return (
    <div className=" p-5 my-20">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
            Hello, {user?.displayName}
          </h2>
          <form onSubmit={handleUpdateReview}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="comment"
                placeholder="Update your comment."
              />
            </div>

            <div className="w-full mt-4 flex gap-5">
              <h5 className="text-black font-semibold text-lg">
                Update Previous Rating
              </h5>
              <select
                onChange={(e) => handleGetUpdatedRating(e.target.value)}
                className="border border-sky-700 px-2 py-1 text-black"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3" defaultValue>
                  3
                </option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="submit"
              >
                Update Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditReview;
