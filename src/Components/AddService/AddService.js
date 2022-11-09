import React from "react";

const AddService = () => {
  return (
    <div className="flex justify-center w-5/6 mx-auto my-10">
      <div className="flex flex-col">
        <div className="my-5">
          <label htmlFor="ServiceName" className="font-semibold">
            Service Name
          </label>
          <input
            className="w-full  px-4 py-2 rounded-lg"
            type="text"
            name="serviceName"
            id=""
            placeholder="Service Name"
          />
        </div>
        <div className="my-5">
          <label htmlFor="price" className="font-semibold">
            Service Price
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg"
            type="number"
            name="price"
            id=""
            placeholder="Service Price"
          />
        </div>
        <div className="my-5">
          <label htmlFor="price" className="font-semibold">
            Service Description
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg"
            type="text"
            name="description"
            id=""
            placeholder="Service Description"
          />
        </div>
        <div className="my-5">
          <label htmlFor="price" className="font-semibold">
            Service Picture
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg"
            type="text"
            name="picture"
            id=""
            placeholder="Service Picture"
          />
        </div>
        <div>
          <button className=" text-white px-8 py-3 font-semibold rounded border border-sky-700 w-full transition ease-in-out delay-150 bg-sky-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddService;
