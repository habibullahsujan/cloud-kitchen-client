import React from "react";
import { Link } from "react-router-dom";

const FoodBlog = () => {
  return (
    <div>
      <section className="py-6 sm:py-12 bg-white text-black">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-5xl font-bold">Latest From Our Blog</h2>
         
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col dark:bg-gray-900">
              <Link>
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://images.pexels.com/photos/6937457/pexels-photo-6937457.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
               
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Cooking Perfect Fried Rice in minutes
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-900">
              <Link>
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
               
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  TSecret of making Heart Shaped eggs.
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 2, 2020</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-900">
              <Link href="#">
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://images.pexels.com/photos/8477228/pexels-photo-8477228.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
             
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  How to check steak if it is tender or not.
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 3, 2020</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-900">
              <Link href="#">
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
      
              
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Seaseme and black seed Flavored Bun Rocks.
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodBlog;
