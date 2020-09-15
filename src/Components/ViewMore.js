import React from "react";
import { Link } from "react-router-dom";
import "./ViewMore.css";
import ReactTooltip from "react-tooltip";

function ViewMore({ content, index }) {
  var lastProjectIndex = content.length - 1;
  return (
    <nav className="View-more-wrapper">
      <ReactTooltip delayShow={2000} />
      <h2 className="Title-view-more">View More</h2>
      {index === 0 && (
        <Link
          style={{ textDecoration: "none" }}
          to={`/project${lastProjectIndex + 1}`}
        >
          <div
            className={`Project Project-${lastProjectIndex + 1}`}
            data-tip={content[lastProjectIndex].title}
          >
            <div className="Project-caption">
              <h5 className="Category">{content[lastProjectIndex].category}</h5>
              <h4 className="Title-project">
                {content[lastProjectIndex].title}
              </h4>
            </div>
          </div>
          <h4 className="Prev">Previous</h4>
        </Link>
      )}
      {index >= 1 && (
        <Link style={{ textDecoration: "none" }} to={`/project${index}`}>
          <div
            className={`Project Project-${index}`}
            data-tip={content[index - 1].title}
          >
            <div className="Project-caption">
              <h5 className="Category">{content[index - 1].category}</h5>
              <h4 className="Title-project">{content[index - 1].title}</h4>
            </div>
          </div>
          <h4 className="Prev">Previous</h4>
        </Link>
      )}
      {index + 1 < content.length && (
        <Link style={{ textDecoration: "none" }} to={`/project${index + 2}`}>
          <div
            className={`Project Project-${index + 2}`}
            data-tip={content[index + 1].title}
          >
            <div className="Project-caption">
              <h5 className="Category">{content[index + 1].category}</h5>
              <h4 className="Title-project">{content[index + 1].title}</h4>
            </div>
          </div>
          <h4 className="Next">Next</h4>
        </Link>
      )}
      {index + 1 === content.length && (
        <Link style={{ textDecoration: "none" }} to={`/project${1}`}>
          <div className={`Project Project-${1}`} data-tip={content[0].title}>
            <div className="Project-caption">
              <h5 className="Category">{content[0].category}</h5>
              <h4 className="Title-project">{content[0].title}</h4>
            </div>
          </div>
          <h4 className="Prev">Next</h4>
        </Link>
      )}
    </nav>
  );
}

export default ViewMore;
