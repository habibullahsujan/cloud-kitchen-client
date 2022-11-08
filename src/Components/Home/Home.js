import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Services from "./Services";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto lg:w-[85%] gap-2">
        {services.map((service) => (
          <Services key={service._id} service={service} />
        ))}
      
      </div>
      <div className="flex justify-center my-10">
          <button className="border border-x-blue-300 font-semibold px-4 py-2">
            <Link to={'/allServices'}>See More</Link>
          </button>
        </div>
    </div>
  );
};

export default Home;
