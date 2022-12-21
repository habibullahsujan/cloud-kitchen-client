import React from "react";

const Feature = () => {
  return (
    <div className="mt-20 flex justify-center gap-5 py-5 bg-white">
      <div className="flex gap-2 w-72 bg-gray-400 text-black rounded-lg items-center">
        <div className="pl-4">
          <h3 className="font-bold text-lg">Any Day Offer</h3>
          <p>New Phenomenon Burger Taste</p>
          <span className="text-green-800 font-bold">$200</span>
        </div>
        <img
        className="h-32 w-32 object-cover rounded-lg"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="flex gap-2 w-72 bg-gray-100 text-black p-1 rounded-lg items-center">
      <div className="pl-4">
          <h3 className="font-bold text-lg">Other's Flavours</h3>
          <p>Save Room We made salats</p>
          <span className="text-green-500 font-bold">$200</span>
        </div>
        <img
        className="h-32 w-32 object-cover rounded-lg"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="flex gap-2 w-72 bg-gray-100 text-black p-1 rounded-lg items-center">
      <div className="pl-2">
          <h3 className="font-bold text-lg">Find A Store Near You.</h3>
          <p>New Phenomenon Burger Taste</p>
          <span className="text-green-500 font-bold">Contact Us</span>
        </div>
        <img
        className="h-32 w-32 object-cover rounded-lg"
          src="https://cdn.pixabay.com/photo/2016/11/04/14/13/google-maps-1797882__340.png  "
          alt=""
        />
      </div>
    </div>
  );
};

export default Feature;
