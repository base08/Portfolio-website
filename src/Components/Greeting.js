import React from "react";
import mugshot from "../mugshot.png";

function Greeting() {
  return (
    <article>
      <img className="Mugshot" src={mugshot} alt="Hugo's friendly face" />
      <h1 className="Greeting">Hello, my name is Hugo Miranda!</h1>
      <h4 className="Description">
        I’m a UX/UI Designer that also likes to play with code and computers.
      </h4>
    </article>
  );
}

export default Greeting;
