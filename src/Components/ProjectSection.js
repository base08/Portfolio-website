import React from "react";
import "./ProjectSection.css";
import Footer from "./Footer";
import ViewMore from "./ViewMore";
import BackHistory from "./BackHistory";

function ProjectSection({ content }) {
  return (
    <article className="ProjectSection">
      <div className="ProjSec-wrapper">
        <BackHistory />
        {content.video ? (
          <div class="iframe-wrapper">
            <iframe
              title={`This is a video of ${content.title}`}
              class="resp-iframe"
              src={`${content.video}?controls=0&autoplay=1&loop=1`}
              gesture="media"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ) : (
          <img
            src={content.image}
            className="Project-image"
            alt="This is the project"
          />
        )}
        <h5 className="Project-category">{content.category}</h5>
        <h2 className="Project-title">{content.title}</h2>{" "}
        <div dangerouslySetInnerHTML={content.article}></div>
        <ViewMore />
        <Footer />
      </div>
    </article>
  );
}

export default ProjectSection;
