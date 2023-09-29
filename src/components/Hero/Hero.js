import React, { useEffect } from "react";
import "./Hero.css";

const Hero = ({}) => {

  useEffect(() => {
    console.log("featured item");
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Aplus Convenience</h1>
        <p>Your local neighborhood store!</p>

        <div className="featured-item">
          <img src="images/featured_product.jpg" alt="Featured Product" />
          <p className="product-description">Prime</p>
          <p className="product-price">$5.99</p>
        </div>

        <div className="newsletter-signup">
          <h2>Newsletter</h2>
          <p>Sign up for our newsletter to discover unique and fun shopping experiences.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Keep me in loop!</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
