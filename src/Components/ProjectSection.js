import React from "react";
import "./ProjectSection.css";
import Footer from "./Footer";
import ViewMore from "./ViewMore";
import BackHistory from "./BackHistory";
import Carousel from "nuka-carousel";

function ProjectSection({ content, index }) {
  return (
    <article className="ProjectSection">
      <BackHistory />
      {content[index].video ? (
        <div class="iframe-wrapper">
          <iframe
            title={`This is a video of ${content[index].title}`}
            class="resp-iframe"
            src={`${content[index].video}?controls=0&autoplay=1&loop=1`}
            gesture="media"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ) : (
        <Carousel
          wrapAround="true"
          autoplay="true"
          renderCenterLeftControls={({ previousSlide }) => null}
          renderCenterRightControls={({ nextSlide }) => null}
        >
          <img src={content[index].image1} alt={content[index].title} />
          <img src={content[index].image2} alt={content[index].title} />
          <img src={content[index].image3} alt={content[index].title} />
        </Carousel>
      )}
      <h5 className="Project-category">{content[index].category}</h5>
      <h2 className="Project-title">{content[index].title}</h2>{" "}
      <div dangerouslySetInnerHTML={content[index].article}></div>
      <ViewMore content={content} index={index} />
      <Footer />
    </article>
  );
}

export default ProjectSection;
