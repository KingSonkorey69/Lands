import{Link} from "react-router-dom";
import "../Assets/Css/contact.css";
import {IconContext} from "react-icons";
import{FaPhoneAlt} from "react-icons/fa";
export default function Contact() {
  return (
    <>
      <section class="navbar">
        <div class="land">
          <p><Link to="/">LANDS</Link></p>
        </div>
        <div class="land_details">
          <Link to="/Lands">Lands For Sale</Link>
          <div class="hr"></div>
          <Link to="/About">About us</Link>
          <div class="hr"></div>
          <Link href="/Contact">Contact Us</Link>
        </div>
      </section>
      <IconContext.Provider value={{color:"#d9dab0",size:"1.2em"}}>
      <section class="contact_first">
        <button className="call"><FaPhoneAlt/>Call Us Now</button>
      </section>
      </IconContext.Provider >
      <section class="contact_second"></section>
      <section class="contact_footer">
        <div class="footer-left">
          <h1 className="di"> Links</h1>
          <Link to="/Lands">Lands For Sale</Link>
          <Link to="/About">About us</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>
        <div class="footer-center">
          <h1 className="det">Follow Me</h1>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
        </div>
        <div class="footer-right">
          <h1 className="phone"> Contact</h1>
          <span>0702129493</span>
          <span>P.O Box 241-00100</span>
          <span>Nairobi, Kenya</span>
        </div>
      </section>
    </>
  );
}
