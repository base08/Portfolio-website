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
      __html: `<p class="Project-description">This render image was part of a colaboration with <a class="Project-description" href="https://www.moticon.de/">Moticon ReGo AG</a> which involved several promotional materials for the 2018 release of their new sensor insole: Insole 3. </p> <p class="Project-description">One of the images asked to be developed was a 3D render, that would show the insole being used in a shoe, but also showing the X-ray view of the sensors on the insole. This work was done with Illustrator, Photoshop and Keyshot.</p>`,
    },
    image: require("./moticon_3d_shoe.png"),
  },
  {
    category: "Illustration",
    title: "Sardinha Portugal",
    article: {
      __html: `<p class="Project-description">Every year there is an illustration competition for the traditional Lisbon's popular saint celebrations: São Pedro. The typical food eaten on this day by the locals is sardine.</p> <p class="Project-description">Thus in order to promote this event the <a class="Project-description" href="https://www.egeac.pt/concurso-sardinhas-2020/EGEAC">EGEAC</a>, organization responsible in promoting culture in Lisbon, invites several artists from around the world to compete with eachother, to have a selection of 10 illustrated sardines for their campaign.</p> <p class="Project-description">With the COVID-19 confinement I was feeling inspired enough to participate, with a patriotic take, in which the body of the sardine becomes the map of Portugal. </p> <p class="Project-description">This ilustration was done with vectors on Illustrator and digital hand drawings on an iPad with Procreate. </p>`,
    },
    image: require("./sardinha.png"),
  },
  {
    category: "Infography",
    title: "Movinsense Comic",
    article: {
      __html: `<p class="Project-description">Movinsense was a medical product that helped elderly patients in hospitals and nursing homes, being developed by <a class="Project-description" href="https://www.youtube.com/watch?v=a8glddOUzdg">Kinematix</a>, one of the companies I worked in the past.</p> <p class="Project-description"> The idea behind the product was to help nursing homes and hospital controlling any movement from a patient, even realtime positioning of a person on a bed or on a chair.</p><p class="Project-description">In order to explain these features to investors or clients a series of friendly infographic images were developed, depicting the basic features in a clear way.</p> <p class="Project-description">This infograhy was done with vectors on Illustrator.</p>`,
    },
    image: require("./movinsense_info_full.png"),
  },
  {
    category: "Exhibition Design",
    title: "FeetMe Roll-up",
    article: {
      __html: `<p class="Project-description">This roll-up was a part of a small colaboration with <a class="Project-description" href="https://feetme.fr/en">FeetMe</a>, which is a french company that develops insoles to help medical staff measure, rehabilitate and assist gait to maintain autonomy of their patients.</p><p class="Project-description"> At this point the company was participating in different fairs and exhibitions in order to promote their product and they needed some promotional materials.</p><p class="Project-description">I've created these roll-ups with the main focus being the insoles and their features.</p><p class="Project-description">This roll-up was done on Illustrator.</p>`,
    },
    image: require("./feetme_rollup.png"),
  },
  {
    category: "Motion Graphics",
    title: "RTP2 Layout",
    article: {
      __html: `<p class="Project-description">This roll-up was a part of a small colaboration with <a class="Project-description" href="https://feetme.fr/en">FeetMe</a>, which is a french company that develops insoles to help medical staff measure, rehabilitate and assist gait to maintain autonomy of their patients.</p><p class="Project-description"> At this point the company was participating in different fairs and exhibitions in order to promote their product and they needed some promotional materials.</p><p class="Project-description">I've created these roll-ups with the main focus being the insoles and their features.</p><p class="Project-description">This roll-up was done on Illustrator.</p>`,
    },
    video: "https://www.youtube.com/embed/Pxk4Ei1HMxU",
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <ScrollToLocal />
          <Switch>
            {content.map((cont, index) => (
              <Route path={`/project${index + 1}`}>
                <ProjectSection content={content} index={index} />
                <Navigation content={content} />
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
