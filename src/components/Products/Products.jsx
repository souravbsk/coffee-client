/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Products = ({ coffeeDataLoad }) => {
  const [coffees, setCoffees] = useState(coffeeDataLoad);

  const handleRemoveCoffee = (id) => {
    fetch(`http://localhost:5000/coffees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainData = coffees.filter((coffee) => coffee._id !== id);
          setCoffees(remainData);
        }
      });
  };
  return (
    <div className="product-bg mt-12 md:mt-32">
      <div className="text-center container">
        <p className="font-thin  mb-2">--- Sip & Savor ---</p>
        <h3 className="text-center text-4xl font-semibold mb-12 text-yellow-950">
          Our Popular Products
        </h3>
        <Link to="/addCoffee" className="text-center">
          <button className="flex mx-auto bg-yellow-500 text-white text-lg gap-2 rounded-md border-2 border-black px-4 py-3 justify-center items-center">
            Add Coffee <GiCoffeeCup className="text-2xl"></GiCoffeeCup>
          </button>
        </Link>
      </div>
      <div className=" container grid grid-cols-1 md:grid-cols-2 mt-8 gap-12">
        {coffees.map((coffee) => (
          <CoffeeCard
            handleRemoveCoffee={handleRemoveCoffee}
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
