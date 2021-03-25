import "../Assets/Css/about.css";
import React, { Component } from "react";
import{Link} from "react-router-dom";
export default function About() {
  return (
    <>
      <section className="navbar">
        <div className="land">
          <p><Link to="/">LANDS</Link></p>
        </div>
        <div className="land_details">
          <Link to="/Lands">Lands For Sale</Link>
          <div className="hr"></div>
          <Link to="/About">About us</Link>
          <div className="hr"></div>
          <Link to="/Contact">Contact Us</Link>
        </div>
      </section>
      <section className="about_1">
        <h1>Our Vision</h1>
        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequuntur reiciendis et deserunt aliquam quod, blanditiis unde quibusdam culpa maiores a ut veritatis labore quo illum non ipsam enim magnam, voluptatibus tempore error. Deleniti, ducimus quisquam rerum maiores totam sunt ipsam quasi,
         eos asperiores praesentium suscipit earum voluptate amet quia.</p>
      </section>
      <section className="about_2">
        <h1>Our Mission</h1>
       <p className="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequuntur reiciendis et deserunt aliquam quod, blanditiis unde quibusdam culpa maiores a ut veritatis labore quo illum non ipsam enim magnam, voluptatibus tempore error. Deleniti, ducimus quisquam rerum maiores totam sunt ipsam quasi,
         eos asperiores praesentium suscipit earum voluptate amet quia.</p>
      </section>
      <section className="about_3"></section>
    </>
  );
}
