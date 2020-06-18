import React from "react";
import { Link } from "react-router-dom";
import "./ProjectSection.css";
import Moticon_image from "../moticon_3d_shoe.png";
import Footer from "./Footer";

function ProjectSection({ title, description }) {
  return (
    <article className="ProjectSection">
      <div className="ProjSec-wrapper">
        <Link to="/">
          <svg
            className="Arrow"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H35C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0L5 0ZM20.885 26.615C21.1197 26.8497 21.2516 27.1681 21.2516 27.5C21.2516 27.8319 21.1197 28.1503 20.885 28.385C20.6503 28.6197 20.3319 28.7516 20 28.7516C19.6681 28.7516 19.3497 28.6197 19.115 28.385L11.615 20.885C11.4986 20.7689 11.4062 20.6309 11.3432 20.4791C11.2802 20.3272 11.2478 20.1644 11.2478 20C11.2478 19.8356 11.2802 19.6728 11.3432 19.5209C11.4062 19.3691 11.4986 19.2311 11.615 19.115L19.115 11.615C19.2312 11.4988 19.3692 11.4066 19.521 11.3437C19.6729 11.2808 19.8356 11.2484 20 11.2484C20.1644 11.2484 20.3271 11.2808 20.479 11.3437C20.6308 11.4066 20.7688 11.4988 20.885 11.615C21.0012 11.7312 21.0934 11.8692 21.1563 12.021C21.2192 12.1729 21.2516 12.3356 21.2516 12.5C21.2516 12.6644 21.2192 12.8271 21.1563 12.979C21.0934 13.1308 21.0012 13.2688 20.885 13.385L15.5175 18.75H27.5C27.8315 18.75 28.1495 18.8817 28.3839 19.1161C28.6183 19.3505 28.75 19.6685 28.75 20C28.75 20.3315 28.6183 20.6495 28.3839 20.8839C28.1495 21.1183 27.8315 21.25 27.5 21.25H15.5175L20.885 26.615Z"
              />
            </g>
          </svg>
        </Link>
        <img
          src={Moticon_image}
          className="Project-image"
          alt="X-ray view of a shoe with a Moticon branded insole"
        />
        <h2 className="Project-title">{title}</h2>
        <p className="Project-description">{description}</p>
        <p className="Project-description">{description}</p>
        <Footer />
      </div>
    </article>
  );
}

export default ProjectSection;
