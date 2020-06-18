import React from "react";
import mugshot from "../mugshot.png";
import "./Greeting.css";
import Footer from "./Footer";

function Greeting() {
  return (
    <article>
      <div className="Greeting-wrapper">
        <img className="Mugshot" src={mugshot} alt="Hugo's friendly face" />
        <h1 className="Hello">Hello, my name is Hugo Miranda!</h1>
        <h4 className="Description">
          I’m a UX/UI Designer, that also likes to play with code and computers.
        </h4>
        <Footer />
      </div>
    </article>
  );
}

export default Greeting;
