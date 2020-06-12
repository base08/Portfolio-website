import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Greeting from "./Components/Greeting";
import ProjectSection from "./Components/ProjectSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/project1">
              <ProjectSection />
            </Route>
            <Route exact path="/">
              <Greeting />
            </Route>
          </Switch>
          <Navigation />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
