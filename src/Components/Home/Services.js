

import React from "react";
import { Link } from "react-router-dom";

const Services = ({service}) => {
    
  return (
    <div>
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover w-full h-56"
          src={service?.picture}
          alt="avatar"
        />

        <div className="py-5 text-center">
          <Link
            className="block text-2xl font-bold text-gray-800 dark:text-white"
           
          >
            {service?.name}
          </Link>
          <span className="text-sm text-gray-700 dark:text-gray-200">
            {service?.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
