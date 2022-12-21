import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import Slider from "./Slider";
import "../BasicStyles.css";
import About from "./About";
import FoodBlog from "./FoodBlog";
import useTitle from "../../Hooks/useTitle";
import Menus from "../Menus/Menus";
import Feature from "../Feature/Feature";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useTitle("Jannat's Kitchen");

  useEffect(() => {
    setLoading(true);
    fetch(" https://cloud-kitchen-server-puce.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <h3>Loading....</h3>
        </div>
      ) : (
        <div>
          <div className="my-10 lg:w-[85%] mx-auto relative">
            <div className="slider-header my-20">
              <Slider />
            </div>
            <div className="absolute lg:top-[35%] md:top-5 top-0 left-24 z-10 text-left ">
              <div className="lg:w-[70%]">
                <span>Wide option of choice.</span>
                <h1 className="font-bold text-2xl lg:text-6xl my-4">
                  Delicious Recipes{" "}
                </h1>
                <p>
                  Inappropriate behavior is often laughed off as "boys will be
                  boys" women face higher conduct standards especially in the
                  workplace. That's why it's crucial that, as women.{" "}
                </p>
                <div className="my-8">
                  <Link
                    to={"/allServices"}
                    className="border border-sky-600 px-4 py-2 my-4 font-semibold"
                  >
                    Check Our Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Menus />
          </div>
          <div>
            <Feature />
          </div>
          <div className="my-20">
            <h1 className="font-bold text-4xl text-center">Popular Dishes</h1>
          </div>
          <div className="flex md:block justify-center">
            <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto lg:w-[85%] gap-2">
              {services.map((service) => (
                <Services
                  key={service._id}
                  service={service}
                  serviceNo={service.serviceNo}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center my-10">
            <Link to={"/allServices"}>
              {" "}
              <button className="border border-x-blue-300 font-semibold px-4 py-2">
                See More
              </button>
            </Link>
          </div>
          <div>
            <About />
          </div>
          <div>
            <FoodBlog />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
