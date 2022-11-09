import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";

const UserReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/userReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email]);

  const handleDeleteReview = (id) => {
    const confirmation = window.confirm("Are you sure delete this review.");

    if (confirmation) {
      fetch(`http://localhost:5000/deleteReview/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Your review deleted.");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <div>
      {reviews.length < 1 ? (
        <div>
          <h3 className="font-bold text-4xl text-center text-white">
            You have zero reviews.
          </h3>
        </div>
      ) : (
        <div className="container p-2 mx-auto sm:p-4 my-10">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Your All Time Review
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead>
                <tr className="bg-gray-700 border-sky-700 border-b-4">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Comment</th>
                  <th className="p-3">Service Name</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Action</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              {reviews.map((review) => (
                <tbody className="bg-gray-900 border-sky-500 border-b-2">
                  <td className="p-3">{review?.userName}</td>
                  <td className="p-3">{review?.userEmail}</td>
                  <td className="p-3">{review?.userReview}</td>
                  <td className="p-3">{review?.serviceName}</td>
                  <td>
                    {review?.reviewTime?.date} - {review?.reviewTime?.month} -{" "}
                    {review?.reviewTime?.year}
                  </td>
                  <td className="p-3">
                    <button className="border border-sky-600 px-2 bg-sky-800 rounded-lg py-1">
                      Edit
                    </button>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDeleteReview(review?._id)}
                      className="border border-sky-600 px-2 bg-sky-800 rounded-lg py-1"
                    >
                      Delete
                    </button>
                  </td>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserReview;
