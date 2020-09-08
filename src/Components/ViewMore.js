import React from "react";
import { Link } from "react-router-dom";
import "./ViewMore.css";
import ReactTooltip from "react-tooltip";

function ViewMore() {
  return (
    <nav className="View-more-wrapper">
      <ReactTooltip />
      <h2 className="Title-view-more">View More</h2>
      <Link style={{ textDecoration: "none" }} to="/project1">
        <div className="Project Project-1" data-tip="Moticon 3D Shoe">
          <div className="Project-caption">
            <h5 className="Category">3D Render</h5>
            <h4 className="Title-project">Moticon 3D Shoe</h4>
          </div>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/project2">
        <div className="Project Project-2" data-tip="Sardinha Portugal">
          <div className="Project-caption">
            <h5 className="Category">Illustration</h5>
            <h4 className="Title-project">Sardinha Portugal</h4>
          </div>
        </div>
      </Link>
      <h4 className="Prev">Previous</h4>
      <h4 className="Next">Next</h4>
    </nav>
  );
}

export default ViewMore;
