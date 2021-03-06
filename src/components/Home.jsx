import "../Assets/Css/index.css";
import img from "../Assets/Images/1.jpg";
import img1 from "../Assets/Images/10.jpg";
//you ,ust import  the image since you cant actually put the image there.
import img2 from "../Assets/Images/11.jpg";
import { Link } from "react-router-dom";
//importing the icons
import {IconContext} from "react-icons";
import{FaFacebook, FaPhoneAlt} from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import {GiMailbox } from "react-icons/gi";
//getting ant design card
import 'antd/dist/antd.css';
import { Card } from 'antd';
//
//To help in creating a previwe on the image
import {Image} from 'antd';
import { Carousel } from 'antd';


//
//
import React, { Component } from "react";
//export the Home section so as it can be used in the index.js`
 
export default function Home() {

//
//creating a card to hold the image
const { Meta } = Card;
const contentStyle = {
  height: '260px',
  width:'400px',
  alignItems:'center'
};
  return (
    <>
   
        <section className="navbar">
          <div className="land">
            <p>LANDS</p>
          </div>
          <div className="land_details">
            <Link to="/Lands">Lands For Sale</Link>
            <div className="hr"></div>
            <Link to="/About">About us</Link>

            <div className="hr"></div>
            <Link to="/Contact">Contact Us</Link>
          </div>
        </section>

      <section className="home_first">
        <div className="text">
          <h1>
            <u>Lands On Offer</u>
          </h1>
        </div>
        
        <div className="images2">
        <Carousel autoplay>
          <div> <img style={contentStyle} src={img} alt="w" /></div>
          <div> <img style={contentStyle} src={img1} alt="w" /></div>
          <div> <img style={contentStyle} src={img2} alt="w" /></div>
        
          </Carousel>
        </div>
      
      </section>
      <section className="home_second">
        <div className="btn from-left ">Property</div>
        <div className="btn from-left ">50/100</div>
        <div className="btn from-left ">lands</div>
      </section>
      <section className="home_third">
        <div className="images1 ">
        <Card
            hoverable
            style={{ width: 500, backgroundColor: "#f4f5db", justifyContent:"space-between" }}
            cover={ <Image src={img} alt="x" />}
          >
            <Meta style={{color: "#487e95", textAlign:"center"}} title="Europe Street beat" description="www.instagram.com" />
        </Card>
         <Card
            hoverable
            style={{ width: 500,backgroundColor: "#f4f5db" }}
            cover={ <Image src={img1} alt="r" />}
          
          >
              <Meta style={{color: "#487e95", textAlign:"center"}} className="title_meta" title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
            hoverable
            style={{ width: 500 , backgroundColor: "#f4f5db"}}
            cover={ <Image src={img2} alt="" /> }
          >
            <Meta style={{color: "#487e95", textAlign:"center"}} title="Europe Street beat" description="www.instagram.com" />
        </Card>
         
         
        </div>
      </section>
      <section className="home_footer">
        <div className="home-left ">
          <h1 className="links"> Links</h1>
          <Link to="/Lands">Lands For Sale</Link>
          <Link to="/About">About us</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>
        <IconContext.Provider value={{color:"#d9dab0",size:"1.0em"}}>
        <div className="home-center ">
          <h1 className="follow">Follow Me</h1>
          <FaFacebook/>
        </div>
        <div className="home-right ">
          <h1 className="contact"> Contact</h1>
         <span className="phone"> <FaPhoneAlt/>0702129493</span>
          <span className="box"> <GiMailbox/> P.O Box 241-00100</span>
          <span className="map"> <GrMapLocation/> Nairobi, Kenya</span>
        </div>
        </IconContext.Provider>
      </section>
    </>
  );
}
//
