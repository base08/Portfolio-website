import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Greeting from "./Components/Greeting";
import ProjectSection from "./Components/ProjectSection";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/project1">
              <ScrollToTop />
              <ProjectSection
                title="Moticon 3D Render"
                description="Lorem Ipsum asdasdasdasdasdasdasdsadcenas cenas"
              />
            </Route>
            <Route path="/">
              <Greeting />
              <Navigation />
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
