import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            veniam velit provident sapiente, numquam magnam sunt officia
            distinctio quia. Molestiae iusto velit eveniet aspernatur autem
            saepe voluptatum quaerat sunt at.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" className="img"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
