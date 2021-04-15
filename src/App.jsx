import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import DemoApp from "./demo-webpage/DemoApp";

const App = () => {
  return (
    <>
      {/* <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route component={Error} />
      </Switch>
      <Footer /> */}
      <DemoApp />
    </>
  );
};

export default App;
