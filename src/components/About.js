import { Link } from 'react-router-dom';
import { Outlet}  from "react-router-dom";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-heading">
            Welcome to <span className="brand-name">QuickBytes</span>
          </h1>
          <p className="about-tagline">
            Serving fresh flavors. Delivering faster than your cravings.
          </p>
          <p className="about-description">
            QuickBytes is your go-to food ordering app where variety meets convenience.
            Discover top restaurants, explore trending cuisines, and enjoy
            doorstep delivery with just a few taps.
          </p>

          <Link to="/">
            <button className="order-now-btn">Order Now</button>
          </Link>
        </div>
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/powerpoint-asian-food-background-design-template-6db7c16c300be00fa33c51eb55776656_screen.jpg?ts=1701288080"
          alt="Food delivery"
          className="about-image-balanced"
        />
      </div>
      <Outlet/>
    </div>
  );
};

export default About;

