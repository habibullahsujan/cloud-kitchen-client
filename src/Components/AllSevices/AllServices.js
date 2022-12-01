import React, { useEffect, useState } from "react";

import useTitle from "../../Hooks/useTitle";
import Services from "../Home/Services";
import { Vortex } from "react-loader-spinner";

const AllServices = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [totalData, setTotalData] = useState(0);
  //how many item we want to show one page
  const [perPageItemShow, setPerPageItemShow] = useState(5);
  //get current page
  const [currentPage, setCurrentPage] = useState(0);
  //how many page system render
  const pageRender = Math.ceil(totalData / perPageItemShow);
  useTitle("Services");

  useEffect(() => {
    setLoading(true)
    fetch(
      `http://localhost:5000/allServices?size=${perPageItemShow}&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setServices(data.products);
        setTotalData(data.totalData);
      });
  }, [perPageItemShow, currentPage]);

  return (
    <div>
      <div className="lg:my-20 my-5">
        {loading ? (
          <div className="flex justify-center items-center h-[100vh]">
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          </div>
        ) : (
          <div className="flex md:block justify-center">
            <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto lg:w-[85%] gap-2">
              {services.map((service) => (
                <Services key={service._id} service={service} />
              ))}
            </div>
          </div>
        )}
        <nav
          aria-label="Pagination"
          className="flex justify-center my-10 -space-x-px rounded-md shadow-sm"
        >
          <button
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md  bg-gray-600"
          >
            <span
              className="sr-only"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {[...Array(pageRender).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              type="button"
              aria-current="page"
              className={`${
                currentPage === number
                  ? "bg-orange-600 inline-flex items-center px-4 py-2 text-sm font-semibold border"
                  : ""
              } p-3 bg-gray-600`}
            >
              {number + 1}
            </button>
          ))}
          <button
            type="button"
            className=" bg-gray-600 inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="ml-5 bg-gray-700 flex gap-5">
            <select
              className="text-gray-400 ml-3"
              onChange={(e) => setPerPageItemShow(e.target.value)}
            >
              <option className="bg-gray-700" value="5" defaultValue>
                5
              </option>
              <option className="bg-gray-700" value="10">
                10
              </option>
              <option className="bg-gray-700" value="15">
                15
              </option>
              <option className="bg-gray-700" value="20">
                20
              </option>
            </select>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AllServices;
