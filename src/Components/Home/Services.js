import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Services = ({ service }) => {
  return (
    <div>
      <div>
        <div className="absolute"></div>
        <div className="relative min-h-screen flex flex-col items-center justify-center ">
          <div className="container">
            <div className="max-w-md w-full bg-orange-500 shadow-lg rounded-xl p-6">
              <div className="flex flex-col ">
                <div className="">
                  <div className="relative h-62 w-full mb-3">
                    <div className="absolute flex flex-col top-0 right-0 p-3">
                      <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLineCap="round"
                            strokeLineJoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
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
                  </div>
                  <div className="flex-auto justify-evenly">
                    <div className="flex flex-wrap ">
                      <div className="flex items-center gap-2">
                        {[...Array(service?.ratings).keys()].map((rating) => (
                          <span key={rating} className="text-orange-100">
                            <FaStar />
                          </span>
                        ))}
                        <span>{service?.ratings}</span>
                      </div>
                      <div className="flex items-center w-full justify-between min-w-0 ">
                        <div className="text-xl text-white font-semibold mt-1">
                          ${service?.price}
                        </div>
                        <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          INSTOCK
                        </div>
                      </div>
                      <p>
                        <span className="font-semibold">Description:</span>
                        {service?.about.length > 100
                          ? service?.about.slice(0, 100)
                          : service?.about}
                        .....
                      </p>
                    </div>
                    <div className="lg:flex  py-4  text-sm text-gray-600">
                      <div className="flex-1 inline-flex items-center  mb-3">
                        <div className="w-full flex-none text-sm flex items-center text-gray-600"></div>
                      </div>
                    </div>
                    <div className="my-4">
                      <Link to={`/serviceDetails/${service?._id}`}>
                        <button className=" text-white px-8 py-3 font-semibold rounded-xl border border-sky-700 w-full transition ease-in-out delay-150 bg-sky-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                          View Details{" "}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
