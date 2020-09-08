import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import ReactTooltip from "react-tooltip";

function Navigation({ content }) {
  let style = {
    backgroundSize: "cover",
    backgroundImage: "url(../moticon_3d_shoe.png)",
  };

  return (
    <nav className="Nav-wrapper">
      <ReactTooltip delayShow={2000} />
      <h2 className="Title-nav">Selection of Works</h2>
      <Link style={{ textDecoration: "none" }} to="/project1">
        <div
          className="Project Project-1"
          data-tip="An X-ray render of a Moticon insole"
        >
          <div className="Project-caption">
            <h5 className="Category">{content[0].category}</h5>
            <h4 className="Title-project">{content[0].title}</h4>
          </div>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/project2">
        <div className="Project Project-2" data-tip="Sardinha Portugal">
          <div className="Project-caption">
            <h5 className="Category">{content[1].category}</h5>
            <h4 className="Title-project">{content[1].title}</h4>
          </div>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/project3">
        <div className="Project Project-3">
          <div className="Project-caption">
            <h5 className="Category">{content[2].category}</h5>
            <h4 className="Title-project">{content[2].title}</h4>
          </div>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/project4">
        <div className="Project Project-4">
          <div className="Project-caption">
            <h5 className="Category">{content[3].category}</h5>
            <h4 className="Title-project">{content[3].title}</h4>
          </div>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/project5">
        <div className="Project Project-5">
          <div className="Project-caption">
            <h5 className="Category">{content[4].category}</h5>
            <h4 className="Title-project">{content[4].title}</h4>
          </div>
        </div>
      </Link>
      <div className="Project Project-6">
        <div className="Project-caption">
          <h5 className="Category">{content[1].category}</h5>
          <h4 className="Title-project">{content[1].title}</h4>
        </div>
      </div>
      <div className="Project Project-7">
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-8">
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-9">
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-10">
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-11">
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-12">
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-13">
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-14">
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
