import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";

const UserReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/userReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, [user?.email]);

  return (
    <div>
      {reviews.length < 1 ? (
        <div>
          <h3 className="font-bold text-4xl text-center text-white">
            You have zero reviews.
          </h3>
        </div>
      ) : (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 my-10">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Your All Time Review
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <thead>
                <tr className="dark:bg-gray-700">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Comment</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Action</th>
                  <th className="p-3">Action</th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              {reviews.map((review) => (
                <tbody>
                  <td className="p-3">{review?.userName}</td>
                  <td className="p-3">{review?.userEmail}</td>
                  <td className="p-3">{review?.userReview}</td>
                  <td>{review?.reviewTime?.date} - {review?.reviewTime?.month} - {review?.reviewTime?.year}</td>
                  <td className="p-3"><button className="bor">Edit</button></td>
                  <td className="p-3">Delete</td>
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
