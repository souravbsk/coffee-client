/* eslint-disable no-unused-vars */
import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee,handleRemoveCoffee }) => {
  const { name, chef,_id, supplier, price, category, details, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex items-center justify-between w-full pr-8">
        <div>
          <p>
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p>
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {price} Taka
          </p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-2">
            <Link to={`/coffees/${_id}`}><button className="text-white w-10 h-10 flex items-center justify-center rounded-md bg-yellow-500"><FaEye></FaEye></button></Link>
          <Link to={`/updateCoffee/${_id}`}>
          <button className="text-white w-10 h-10 flex items-center justify-center rounded-md bg-gray-900"><FaPen></FaPen></button>
          
          </Link>
            <button onClick={() => handleRemoveCoffee(_id)} className="text-white w-10 h-10 flex items-center justify-center rounded-md bg-red-500"><FaTrash></FaTrash></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
