import React from "react";

const Menus = () => {
  const menus = [
    {
      id: 1,
      name: "Combo",
      picture:
        "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Kids Menus",
      picture:
        "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Pizza",
      picture:
        "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Box Meals",
      picture:
        "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "Burger",
      picture:
        "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Chicken",
      picture:
        "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      name: "Sauces",
      picture:
        "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      name: "Drinks",
      picture:
        "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div>
      <div className="flex justify-center flex-wrap lg:flex-nowrap">
        <button className="bg-orange-500 text-center uppercase font-semibold px-4 text-black py-2 rounded-lg">
          Menus
        </button>
      </div>
      <div className="flex justify-center gap-3 text-center mt-4">
       {
        menus.map(menu=> <div className="rounded-lg bg-gray-100 p-1" key={menu.id}>
        <img
          className="h-20 w-28 rounded-lg object-cover"
          src={menu.picture}
          alt=""
        />
        <span className="uppercase font-semibold text-black">{menu.name}</span>
      </div>)
       }
      </div>
    </div>
  );
};

export default Menus;
