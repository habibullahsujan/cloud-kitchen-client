import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import Services from "../Home/Services";
import { Vortex } from "react-loader-spinner";

const AllServices = () => {
  const services = useLoaderData();
  useTitle("Services");

  if (!services) {
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
    </div>;
  }

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
