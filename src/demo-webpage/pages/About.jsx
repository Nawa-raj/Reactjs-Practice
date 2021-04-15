import React from "react";
import Common from "../components/Common";
import hero_img from "../images/hero-img1.png";

const About = () => {
  return (
    <>
      <Common
        title="Welcome to about page"
        desc="If you want to grow your business worldwide with E-commerce and manage all your things contact us."
        imgsrc={hero_img}
        visit="/contact"
        btn_name="Contact Now"
      />
    </>
  );
};

export default About;
