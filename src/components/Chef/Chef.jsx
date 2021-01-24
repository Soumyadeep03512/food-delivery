import React,{useEffect} from "react";
import "./chef.css";
import chef1 from "./images/chef1.jpg";
import chef2 from "./images/chef2.jpg";
import chef3 from "./images/chef3.jpg";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Chef = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div>
      <div>
        <p className="cheftitle" data-aos="zoom-in">Meet our Makers</p>
        <hr className="chefhr" />
      </div>
      <div className="chefcard" style={{marginTop: "-30px"}}>
        <img src={chef1} alt="" data-aos="fade-right" />
        <div data-aos="zoom-in">
          <p className="chefname">RAHUL SINGHANIA</p>
          <p className="chefdesc">
            A three time "Chopped" winner, who loves his art of
            <b> Baking Pizza </b>.
          </p>
        </div>
      </div>
      <div className="chefcard">
        <img src={chef2} alt="" data-aos="fade-right" />
        <div data-aos="zoom-in">
          <p className="chefname"> JOHN SMITH </p>
          <p className="chefdesc">
            Won masterchef three times and enjoys cooking <br /> delicious{" "}
            <b>Burgers.</b>
          </p>
        </div>
      </div>
      <div className="chefcard">
        <img src={chef3} alt="" data-aos="fade-right" />
        <div data-aos="zoom-in">
          <p className="chefname">ALICE EVANS</p>
          <p className="chefdesc">
            With an experience of 10 years as a Chef, Alice will serve you with
            the best <b>Pasta</b> in the city.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chef;
