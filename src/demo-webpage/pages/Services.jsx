import React from "react";
import Sdata from "../components/Sdata";
import Card from "../components/Card";

const Services = () => {
  return (
    <>
      <section>
        <div className="container my-5">
          <div className="row home__page">
            <h1 className="text-center mb-4"> Our Services </h1>
          </div>
          <div className="row g-3 g-lg-4">
            {Sdata.map((val, index) => {
              return (
                <Card
                  key={index}
                  id={index}
                  p_name={val.product_title}
                  p_desc={val.product_desc}
                  p_img={val.product_img}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
