/* eslint-disable no-unused-vars */
import React from "react";
import brandLogo from "../../assets/images/more/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMapMarked,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-12 md:mt-32 pt-12 md:pt-32 bg-cover bg-no-repeat bg-center bg-footer">
      <div className="container pb-12 flex flex-col md:flex-row items-center gap-8 md:gap-40">
        <div className="space-y-3 flex-1">
          <img className="w-16 h-20" src={brandLogo} alt="" />
          <h2 className="text-yellow-950 text-3xl font-semibold">
            Espresso Emporium
          </h2>
          <p>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <ul className="flex items-center gap-5">
            <li>
              <Link className="text-yellow-950 text-3xl" to="#">
                <FaFacebook></FaFacebook>
              </Link>
            </li>
            <li>
              <Link className="text-yellow-950 text-3xl" to="#">
                <FaTwitter></FaTwitter>
              </Link>
            </li>
            <li>
              <Link className="text-yellow-950 text-3xl" to="#">
                <FaInstagram></FaInstagram>
              </Link>
            </li>
            <li>
              <Link className="text-yellow-950 text-3xl" to="#">
                <FaLinkedin></FaLinkedin>
              </Link>
            </li>
          </ul>
          <div>
            <h2 className="text-yellow-950 text-3xl my-8 font-semibold">
              Get in Touch
            </h2>
            <ul>
              <li className="flex items-center gap-2 text-yellow-950">
                <FaPhone></FaPhone> +88015333333
              </li>
              <li className="flex items-center gap-2 text-yellow-950">
                <FaMailBulk></FaMailBulk> coffee@gamil.com
              </li>
              <li className="flex items-center gap-2 text-yellow-950">
                <FaMapMarked></FaMapMarked> 72, Wall street, King Road, Dhaka
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-yellow-950 text-3xl my-8 font-semibold">
            Connect with Us
          </h2>

          <form>
            <div className="mb-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full h-12 px-5"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full h-12 px-5"
              />
            </div>
            <div className="mb-5">
                <textarea name="message" id="" className="w-full h-32 resize-none
                "></textarea>
            </div>
            <input type="submit" value="Send Message" className="btn bg-transparent hover:text-white text-yellow-950 rounded-full" />
          </form>
        </div>
      </div>
      <div className="bg-header">
<p className="text-center text-white py-3"><small>Copyright Espresso Emporium ! All Rights Reserved</small></p>
      </div>
    </footer>
  );
};

export default Footer;
