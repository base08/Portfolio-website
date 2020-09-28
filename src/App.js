import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Greeting from "./Components/Greeting";
import ProjectSection from "./Components/ProjectSection";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ScrollToLocal from "./Components/ScrollToLocal";

const content = [
  {
    category: "3D Render",
    title: "Moticon Insole",
    article: {
      __html: `<p class="Project-description">This render image was part of a colaboration with <a class="Project-description" href="https://www.moticon.de/">Moticon ReGo AG</a> which involved several promotional materials for the 2018 release of their new sensor insole: Insole 3. </p><p class="Project-description">One of the images asked to be developed was a 3D render, that would show the insole being used in a shoe, but also showing the X-ray view of the sensors on the insole. This work was done with Illustrator, Photoshop and Keyshot.</p>`,
    },
    image1: require("./moticon_3d_shoe_1.png"),
    image2: require("./moticon_3d_shoe_2.png"),
    image3: require("./moticon_3d_shoe_3.png"),
  },
  {
    category: "Illustration",
    title: "Festas Lisboa '20",
    article: {
      __html: `<p class="Project-description">Every year there is an illustration competition for the traditional Lisbon's popular saint celebrations: Festas de São António. The typical food eaten on this day by the locals is sardine.</p> <p class="Project-description">Thus in order to promote this event the <a class="Project-description" href="https://www.egeac.pt/concurso-sardinhas-2020/EGEAC">EGEAC</a>, organization responsible in promoting culture in Lisbon, invites several artists from around the world to compete with eachother, to have a selection of 10 illustrated sardines for their campaign.</p> <p class="Project-description">With the COVID-19 confinement I was feeling inspired enough to participate, and one of my 3 entries had a patriotic take, in which the body of the sardine becomes the map of Portugal.</p>
      <p class="Project-description">My second attempt was: "Size does matter"! The sardine takes the shape of a normal ruller and becomes the standardizaton of a perfect sardine size.</p>
      <p class="Project-description">My third and final take on the subject was a humorous recreation of the famous peculiar way of eating the main star dish of the day: grilled sardine on a rustic bread. Bellow you can see how the progress was made and how I evolve the idea, while actually doing it.</p>
      <div class="iframe-wrapper video-middle">
      <iframe
                  class="resp-iframe"
                  title="This is a video of a sardine on a bread timelapse illustration"
                  src="https://www.youtube.com/embed/Mm-6ksXQYTc?controls=0&autoplay=1&loop=1"
                  gesture="media"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe></div>
      <p class="Project-description">These ilustrations were done mainly with vectors on Illustrator and digital hand drawings on an iPad 2017 with Procreate. </p>`,
    },
    image1: require("./sardinha_portugal.png"),
    image2: require("./sardinha_regua.png"),
    image3: require("./sardinha_pao.png"),
  },
  {
    category: "Infography",
    title: "Kinematix Comics",
    article: {
      __html: `<p class="Project-description">One of the companies I worked in the past was <a class="Project-description" href="https://www.youtube.com/watch?v=a8glddOUzdg">Kinematix</a>, a tech-health company that developed products for patients in hospitals and nursing homes. The first 3 products the company developed were: Movinsense, WalkinSense and Orthomonitor. <p class="Project-description"> As for the Movisense, the idea behind the product was to help nursing homes and hospital controlling any movement from a patient and even realtime positioning of a person on a bed or on a chair.</p><p class="Project-description">Walkisense was made for patients with foot problems analyzing the way how they walked. With its smart insoles, it was able to create a series of graphs and statistics on the patients walking patterns in order to help on their recovery.</p> <p class="Project-description">Orthomonitor was a device to be integrated within orthotics or prosthetics, that would measure their use, creating a series of statistics later to be interpreted by a Physician or Doctor.</p><p class="Project-description">In order to explain these all these features to investors or clients a series of friendly infographic images were developed, depicting the basic features in a clear way.</p> <p class="Project-description">This infographic series was done with vectors on Illustrator.</p>`,
    },
    image1: require("./movinsense_info_full.png"),
    image2: require("./walkinsense_info_full.png"),
    image3: require("./orthomonitor_info_full.png"),
  },
  {
    category: "Exhibition Design",
    title: "FeetMe Roll-up",
    article: {
      __html: `<p class="Project-description">This roll-up was a part of a small colaboration with <a class="Project-description" href="https://feetme.fr/en">FeetMe</a>, which is a french company that develops insoles to help medical staff measure, rehabilitate and assist gait to maintain autonomy of their patients.</p><p class="Project-description"> At this point the company was participating in different fairs and exhibitions in order to promote their product and they needed some promotional materials.</p><p class="Project-description">I've created these roll-ups with the main focus being the insoles and their features.</p><p class="Project-description">This roll-up was done on Illustrator.</p>`,
    },
    image1: require("./feetme_rollup_1.png"),
    image2: require("./feetme_rollup_2.png"),
    image3: require("./feetme_rollup_3.png"),
  },
  {
    category: "Motion Graphics",
    title: "RTP2 Layout",
    article: {
      __html: `<p class="Project-description"><a class="Project-description" href="https://www.rtp.pt/programa/tv/p28665">Layout</a> was a TV program that aired on Portuguese national tv channel RTP2. The program was a showcase of Art and Design iniciatives, where different portuguese artists got interviewed and talked more about their process on their work.</p><p class="Project-description">My role on Layout was to create the visuals and animations regarding the behaviour of the logo, footer information, and segment separations, each with their own reinterpretation according to the theme presented in that segment.</p><p class="Project-description">I've created these animations with After Effects.</p>`,
    },
    video: "https://www.youtube.com/embed/Pxk4Ei1HMxU",
  },
  {
    category: "Category",
    title: "Under construction",
    article: {
      __html: `<p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus. </p><p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus. </p><p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus.</p>`,
    },
    image1: require("./placeholder-image.png"),
    image2: require("./placeholder-image.png"),
    image3: require("./placeholder-image.png"),
  },
  {
    category: "Category",
    title: "Under construction",
    article: {
      __html: `<p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus. </p><p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus. </p><p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus.</p>`,
    },
    image1: require("./placeholder-image.png"),
    image2: require("./placeholder-image.png"),
    image3: require("./placeholder-image.png"),
  },
  {
    category: "Category",
    title: "Under construction",
    article: {
      __html: `<p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus. </p><p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus. </p><p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus.</p>`,
    },
    image1: require("./placeholder-image.png"),
    image2: require("./placeholder-image.png"),
    image3: require("./placeholder-image.png"),
  },
  {
    category: "Category",
    title: "Under construction",
    article: {
      __html: `<p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus. </p><p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus. </p><p class="Project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ex, pharetra quis ligula sit amet, faucibus pretium urna. Pellentesque vestibulum tincidunt massa, quis vestibulum urna tincidunt eu. Cras luctus eros a felis molestie tempus. Nulla ornare sapien quis suscipit scelerisque. Nunc eu nisi pharetra, pharetra sem nec, tincidunt libero. Mauris venenatis eget neque vel elementum. Donec tincidunt condimentum odio in maximus.</p>`,
    },
    image1: require("./placeholder-image.png"),
    image2: require("./placeholder-image.png"),
    image3: require("./placeholder-image.png"),
  },
];

function App() {
  return (
    <div className="App">
      <Router basename="/Portfolio-Website">
        <Header />
        <main>
          <ScrollToLocal />
          <Switch>
            {content.map((cont, index) => (
              <Route path={`/project${index + 1}`}>
                <ProjectSection content={content} index={index} />
                <div className="Responsive-nav">
                  <Navigation content={content} />
                </div>
              </Route>
            ))}
            <Route path="/">
              <Greeting />
              <Navigation content={content} />
            </Route>
          </Switch>
          <div className="Responsive-footer">
            <Footer />
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
