import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

const DemoApp = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route component={Error} />
        {/* <Redirect to="/"/> */}
      </Switch>
      <Footer />
    </>
  );
};

export default DemoApp;
