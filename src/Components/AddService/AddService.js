import React from "react";
import { toast } from "react-toastify";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const servicePrice = form.price.value;
    const description = form.description.value;
    const servicePicture = form.picture.value;
    const serviceNo = parseInt(form.id.value);

    const newService = {
      serviceNo: serviceNo,
      price: servicePrice,
      picture: servicePicture,
      name: serviceName,
      about: description,
    };

    fetch(" https://cloud-kitchen-server-puce.vercel.app/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          toast.success('Service added success.');
          form.reset();
        }
        console.log(data);
      });
  };

  return (
    <div className="flex justify-center w-5/6 mx-auto my-10">
      <form onSubmit={handleAddService} className="flex flex-col">
        <div className="my-5">
          <label htmlFor="ServiceName" className="font-semibold">
            Service Name
          </label>
          <input
            className="w-full  px-4 py-2 rounded-lg text-black"
            type="text"
            name="serviceName"
            id=""
            placeholder="Service Name"
          />
        </div>
        <div className="my-5">
          <label htmlFor="id" className="font-semibold">
            Service ID
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg text-black"
            type="number"
            name="id"
            id=""
            placeholder="Service ID"
          />
        </div>
        <div className="my-5">
          <label htmlFor="price" className="font-semibold">
            Service Price
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg text-black"
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
            className="w-full px-4 py-2 rounded-lg text-black"
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
            className="w-full px-4 py-2 rounded-lg text-black"
            type="text"
            name="picture"
            id=""
            placeholder="Service Picture"
          />
        </div>
        <div>
          <button
            type="submit"
            className=" text-white px-8 py-3 font-semibold rounded border border-sky-700 w-full transition ease-in-out delay-150 bg-sky-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
