import React from "react";
import { useLoaderData } from "react-router-dom";
import Services from "../Home/Services";


const AllServices = () => {
  const services = useLoaderData();
 
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto lg:w-[85%] gap-2">
        {services.map((service) => (
          <Services key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
