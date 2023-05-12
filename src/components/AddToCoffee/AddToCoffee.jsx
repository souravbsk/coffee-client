import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Swal from "sweetalert2";

const AddToCoffee = () => {

const handleAddToCoffee = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const chef = form.chef.value;
    const price = form.Price.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name,chef,supplier,price,category,details,photo}
    console.log(newCoffee);
    fetch("http://localhost:5000/coffees",{
        method:"POST",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'Coffee Added Success',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
        console.log(data);
    })

}

  return (
    <div className="addCoffeeBg">
      <div className="container ">
        <div className="py-12">
          <Link to="/">
            {" "}
            <button className="text-xl text-yellow-950 font-semibold flex items-center gap-2">
              <FiArrowLeft></FiArrowLeft> <span>Back to home</span>
            </button>{" "}
          </Link>
        </div>
        <div className="bg-[#F4F3F0] py-16 px-5 md:px-28 rounded-md">
          <div className="container">
            <h2 className="text-xl  md:text-5xl mb-8 font-semibold text-yellow-950 text-center">
              Add New Coffee
            </h2>
            <p className="text-center mb-8">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleAddToCoffee}>
            <div className="md:flex gap-7 mb-6 items-center">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="md:flex gap-7 mb-6 items-center">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="Price"
                  placeholder="Enter coffee Price"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="md:flex gap-7 mb-6 items-center">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                name="category"
                  type="text"
                  placeholder="Enter coffee category"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="md:flex gap-7 mb-6 items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                />
              </div>
            </div>
            <input type="submit" className="btn btn-block text-black hover:text-white bg-yellow-600 border-2 border-black" name="Add Coffee" id="" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToCoffee;
