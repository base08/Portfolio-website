import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
      <h2 className="Title-nav">Selection of Works</h2>
      <Link style={{ textDecoration: "none" }} to="/project1">
        <div className="Project Project-1">
          <div className="Project-caption">
            <h5 className="Category">3D Render</h5>
            <h4 className="Title-project">Moticon 3D Shoe</h4>
          </div>
        </div>
      </Link>
      <div className="Project Project-2">
        <div className="Project-caption">
          <h5 className="Category">Illustration</h5>
          <h4 className="Title-project">Sardinha Portugal</h4>
        </div>
      </div>
      <div className="Project Project-3">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-4">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-5">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-6">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-7">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-1">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-2">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-3">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-4">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-5">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-6">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
      <div className="Project Project-7">
        {" "}
        <div className="Project-caption">
          <h5 className="Category">Category</h5>
          <h4 className="Title-project">Title of the Project</h4>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
