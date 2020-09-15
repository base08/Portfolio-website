import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import ReactTooltip from "react-tooltip";

function Navigation({ content }) {
  /*   let style = {
    backgroundSize: "cover",
    backgroundImage: "url(../moticon_3d_shoe.png)",
  };
 */
  return (
    <nav className="Nav-wrapper">
      <ReactTooltip delayShow={2000} />
      <h2 className="Title-nav">Selection of Works</h2>

      {content.map((cont, index) => (
        <Link style={{ textDecoration: "none" }} to={`/project${index + 1}`}>
          <div
            className={`Project Project-${index + 1}`}
            data-tip="An X-ray render of a Moticon insole"
          >
            <div className="Project-caption">
              <h5 className="Category">{content[index].category}</h5>
              <h4 className="Title-project">{content[index].title}</h4>
            </div>
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
