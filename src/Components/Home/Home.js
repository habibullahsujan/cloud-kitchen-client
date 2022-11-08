import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Services from "./Services";
import Slider from "./Slider";
import '../BasicStyles.css'

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <div className="my-10 lg:w-[85%] mx-auto relative">
        <div className="slider-header">
        <Slider />
        </div>
  
        <div className="absolute top-[40%] left-24 z-50 text-left ">
          <div className="lg:w-[70%]">
          <span>Wide option of choice.</span>
          <h1 className="font-bold text-6xl">Delicious Recipes </h1>
          <p>
            Inappropriate behavior is often laughed off as "boys will be boys"
            women face higher conduct standards especially in the workplace.
            That's why it's crucial that, as women.{" "}
          </p>
          </div>
        
        </div>
      </div>
      <div>
        <h1 className="font-bold text-4xl">Services</h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto lg:w-[85%] gap-2">
        {services.map((service) => (
          <Services key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <button className="border border-x-blue-300 font-semibold px-4 py-2">
          <Link to={"/allServices"}>See More</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
