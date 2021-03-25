import "../Assets/Css/lands.css";
import img from "../Assets/Images/1.jpg";
import img1 from "../Assets/Images/10.jpg";
//you ,ust import  the image since you cant actually put the image there.
import img2 from "../Assets/Images/11.jpg";
import img3 from "../Assets/Images/1.jpg";
import img4 from "../Assets/Images/10.jpg";
import img5 from "../Assets/Images/11.jpg";
import img6 from "../Assets/Images/1.jpg";
import img7 from "../Assets/Images/10.jpg";
import img8 from "../Assets/Images/11.jpg";
import{Link} from "react-router-dom";

export default function Lands() {
  return <>
  <section class="navbar">
        <div class="land">
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
    <section className="lands_first">
        <div className="images22">
        <img src={img} alt="w"/>
            <img src={img1} alt="w"/>
            <img src={img2} alt="w"/>
            <img src={img3} alt="w"/>
            <img src={img4} alt="w"/>
            <img src={img5} alt="w"/> 
            <img src={img6} alt="w"/>
            <img src={img7} alt="w"/>
            <img src={img8} alt="w"/>
           
        </div>
    </section>
    <section className="lands_second">

    </section>
    <section className="lands_footer">
        <div className="footer-left">
            <h1 className="link"> Links</h1>
            <a href="lands.html">Lands For Sale</a>
            <Link to="/About">About us</Link>
            <a href="contact.html">Contact Us</a>

        </div>
        <div class="footer-center">
            <h1 className="media">Follow Me</h1>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>

        </div>
        <div class="footer-right">
            <h1 className="detail"> Contact</h1>
            <span>0702129493</span>
            <span>P.O Box 241-00100</span>
            <span>Nairobi, Kenya</span>
        </div>



    </section>
  </> ;
}
