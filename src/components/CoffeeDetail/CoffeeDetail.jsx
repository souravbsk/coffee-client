import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetail = () => {
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  const { name, chef, _id, supplier, price, category, details, photo } =
    coffeeData;

  return (
    <div className="addCoffeeBg">
        <div className="container">

        <div className="py-12">
          <Link to="/">
            {" "}
            <button className="text-xl text-yellow-950 font-semibold flex items-center gap-2">
              <FiArrowLeft></FiArrowLeft> <span>Back to home</span>
            </button>{" "}
          </Link>
        </div>
      <div className="card card-side bg-base-100 shadow-xl">

      <figure className="flex-1">
        <img className="max-w-full w-[351px] h-[455px]" src={photo} alt="Movie" />
      </figure>
      <div className="flex flex-1 items-center justify-between w-full pr-8">
        <div>
          <p>
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p>
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-semibold">Supplier:</span> {supplier} Taka
          </p>
          <p>
            <span className="font-semibold">Category:</span> {category} Taka
          </p>
          <p>
            <span className="font-semibold">Details:</span> {details} Taka
          </p>
        </div>
      </div>
    </div>
        </div>
    </div>
  );
};

export default CoffeeDetail;
