import "./PricingCard.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 3 Days -</p>
          <p>Featured</p>
          <p>Responsive Design</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>

        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 3 Days -</p>
          <p>Featured</p>
          <p>Responsive Design</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>

        <div
          className="card"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg')`,
          }}
        >
          <p>Mobile-Responsive E-Commerce Platform</p>
          <p className="description">
              • Engineered a highly responsive e-commerce platform that led to a
              30% increase in mobile user engagement and satisfaction and
              implemented key features, such as a simplified and faster checkout
              process, firebase-based login.<br></br> 
              • Developed an admin portal,
              resulting in a 20% reduction in the time it takes to upload
              products, boosting efficiency in product management
            </p>
          <div className="btn_grp">
            
            <Button variant="outlined" className="outlined_btn">
              Details
            </Button>
            <Link to="/contact" className="btn">
              View Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
