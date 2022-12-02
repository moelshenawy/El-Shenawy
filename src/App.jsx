import React from "react";
import "./App.scss";
import { About, Work, Contact, Header, Skills, Testimonial } from "./container";
import { Navbar } from "./components";
import ReactGA from "react-ga";

const App = () => {
  const TRACKING_ID = "UA-250925080-2"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default App;
