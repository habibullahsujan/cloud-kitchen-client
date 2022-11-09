import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Services = ({ service }) => {
  return (
    <div>
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <PhotoProvider>
          <div className="foo cursor-pointer">
            <PhotoView src={service?.picture}>
              <img
                className="object-cover w-full h-56"
                src={service?.picture}
                alt="avatar"
              />
            </PhotoView>
          </div>
        </PhotoProvider>
        <div className="py-5 px-5  text-gray-700">
          <Link className="block text-2xl font-bold text-gray-800 dark:text-white">
            {service?.name}
          </Link>
          <h4 className="text-xl text-gray-700 dark:text-gray-200 font-bold">
            {service?.price}
          </h4>
          <span>Ratings:{service?.ratings}</span>
          <p>
            <span className="font-semibold">Description:</span>
            {service?.about.length > 100
              ? service?.about.slice(0, 100)
              : ""}{" "}
            .....
          </p>
          <div className="my-4">
            <Link to={`/serviceDetails/${service?._id}`}>
              <button className=" text-white px-8 py-3 font-semibold rounded border border-sky-700 w-full transition ease-in-out delay-150 bg-sky-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                View Details{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
