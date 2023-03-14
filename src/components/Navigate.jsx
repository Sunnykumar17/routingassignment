import React from "react";
import { Link } from "react-router-dom";
import { AiTwotonePhone } from "react-icons/ai";

const Navigate = () => {
  return (
    <div className="nav_section">
      <img
        src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png"
        alt="img"
        className="logo"
      />

      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/projects"> Projects </Link>
      <Link to="/services"> Services </Link>
      <Link to="/blog">Blog </Link>
      <Link to="/contact"> Contact </Link>

      <button className="btn">Enquiry Now</button>
      <p className="para">
        {AiTwotonePhone}0509418224 <span> enquiry@urbansciencemep.com </span>
      </p>
    </div>
  );
};

export default Navigate;
