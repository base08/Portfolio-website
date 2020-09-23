import React from "react";
import mugshot from "../mugshot.png";
import "./Greeting.css";
import Footer from "./Footer";

function Greeting() {
  return (
    <article className="Greeting-wrapper">
      <img className="Mugshot" src={mugshot} alt="Hugo's friendly face" />
      <h1 className="Hello">Hello, my name is Hugo Miranda!</h1>
      <h4 className="Description">
        I’m a UX/UI Designer, that also likes to play with code and computers.
      </h4>
      <div>
        <a href="https://drive.google.com/drive/folders/1zXJF_bYAIebHWZK-FpKLJBfO5YFIBK1s?usp=sharing">
          <button className="Button Portfolio">FULL PORTFOLIO</button>
        </a>
        <a href="mailto:hsaraiva08@gmail.com">
          <button className="Button Contact">CONTACT ME</button>
        </a>
      </div>
      <div className="Spacer"></div>
      <Footer />
    </article>
  );
}

export default Greeting;
