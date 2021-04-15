import React from "react";
import Common from "../components/Common";
import hero_img from "../images/hero-img.svg";

const Home = () => {
  return (
    <>
      <Common
        title=" Grow Your Business With"
        imgsrc={hero_img}
        desc="We are the team of React Developer Making Websites"
        visit="/services"
        btn_name="Get Started"
      />
    </>
  );
};

export default Home;
