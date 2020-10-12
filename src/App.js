import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Greeting from "./Components/Greeting";
import ProjectSection from "./Components/ProjectSection";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ScrollToLocal from "./Components/ScrollToLocal";
import ReactGA from "react-ga";
import { content } from "./Content";

ReactGA.initialize("UA-179015148-1");
ReactGA.pageview(window.location.pathname + window.location.search);

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
