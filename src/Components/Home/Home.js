import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Services from "./Services";
import Slider from "./Slider";
import "../BasicStyles.css";
import About from "./About";
import FoodBlog from "./FoodBlog";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <div className="my-10 lg:w-[85%] mx-auto relative">
        <div className="slider-header">
          <Slider />
        </div>

        <div className="absolute top-[35%] left-24 z-50 text-left ">
          <div className="lg:w-[70%]">
            <span>Wide option of choice.</span>
            <h1 className="font-bold text-6xl my-4">Delicious Recipes </h1>
            <p>
              Inappropriate behavior is often laughed off as "boys will be boys"
              women face higher conduct standards especially in the workplace.
              That's why it's crucial that, as women.{" "}
            </p>
            <button className="border border-sky-600 px-4 py-2 my-4 font-semibold">
              Check Our Menu
            </button>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h1 className="font-bold text-4xl text-center">Services</h1>
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
      <div>
        <About/>
      </div>
      <div>
        <FoodBlog/>
      </div>
    </div>
  );
};

export default Home;
