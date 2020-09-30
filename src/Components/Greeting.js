import React from "react";
import mugshot from "../mugshot.png";
import "./Greeting.css";
import Footer from "./Footer";
import ReactGA from "react-ga";

function Greeting() {
  return (
    <article className="Greeting-wrapper">
      <img className="Mugshot" src={mugshot} alt="Hugo's friendly face" />
      <h1 className="Hello">Hello, my name is Hugo Miranda!</h1>
      <h4 className="Description">
        I’m a UX/UI Designer, that also likes to play with code and computers.
      </h4>
      <div className="Buttons-CTA">
        {/*    <a
          className="Button Portfolio"
          href="https://drive.google.com/drive/folders/1zXJF_bYAIebHWZK-FpKLJBfO5YFIBK1s?usp=sharing"
        >
          FULL PORTFOLIO
        </a> */}
        <ReactGA.OutboundLink
          className="Button Portfolio"
          eventLabel="GDRIVE PORTFOLIO"
          to="https://drive.google.com/drive/folders/1zXJF_bYAIebHWZK-FpKLJBfO5YFIBK1s?usp=sharing"
          target="_blank"
        >
          FULL PORTFOLIO
        </ReactGA.OutboundLink>
        <a className="Button Contact" href="mailto:hsaraiva08@gmail.com">
          CONTACT ME
        </a>
      </div>
      <div className="Spacer"></div>
      <Footer />
    </article>
  );
}

export default Greeting;
