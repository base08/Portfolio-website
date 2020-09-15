import React from "react";
import mugshot from "../mugshot.png";
import "./Greeting.css";
import Footer from "./Footer";

function Greeting() {
  return (
    <article className="Greeting-wrapper">
      <img className="Mugshot" src={mugshot} alt="Hugo's friendly face" />
      <h1 className="Hello">
        Hello, my <br /> name is Hugo <br /> Miranda!
      </h1>
      <h4 className="Description">
        I’m a UX/UI Designer, that also likes to play with code and computers.
      </h4>
      <div className="Spacer"></div>
      <Footer />
    </article>
  );
}

export default Greeting;
